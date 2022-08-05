
import React, { useState, useEffect } from 'react';


const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState();
    const [repos, setRepos] = useState();
    const [followers, setFollowers] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //request loading
    const [requests, setRequests] = useState(0);

    const searchGithubUser = async (user) => {
        const response = await axios
            .get(`users/${user}`)
            .catch((err) => {console.log(err); setError(true);});
            setLoading(true);

        console.log(response);
        if (response) {
            setGithubUser(response.data);
            setLoading(false);
            setError(false);
            console.log(response);
            const { followers_url, login } = response.data;

            await Promise.allSettled([
                axios.get(`/users/${login}/repos?per_page=10`),
                axios.get(`${followers_url}?per_page=10`),
                setLoading(true),
            ])
                .then((results) => {
                    const [repos, followers] = results;
                    const fulfilledStatus = 'fulfilled';
                    setLoading(false);
                    setError(false);

                    if (repos.status === fulfilledStatus) {
                        setRepos(repos.value.data);
                    }
                    if (followers.status === fulfilledStatus) {
                        setFollowers(followers.value.data);
                    }
                })
                .catch((err) => {console.log(err); setError(true); setLoading(false);});
        } else {
            
            console.log('no such user');
            setError(true);
            setLoading(false);
        }
    };
    //nfn named function
    

    //add empty dependency array hence,
    // useEffect will run only once after the rendering of the page.
    // It will not re-run
    //useEffect(() => getRemainingRequests());
    return (
        <GithubContext.Provider
            value={{ githubUser, repos, followers, requests, searchGithubUser, loading, error }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };