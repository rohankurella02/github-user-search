import React from 'react'
import './Home.css'
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../API';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const [user, setUser] = React.useState('');
    const { requests, searchGithubUser, error, loading } = React.useContext(GithubContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hi")
        if (user) {
            searchGithubUser(user);
        }

        console.log(user);
        navigate("/dashboard");
    };

    return (
        <div className='title' >Home
            <div >
                <h3>GITHUB USER SEARCH  By</h3>
                <h1>ROHAN KURELLA</h1>
                <h3>C H E C K   O N  <strong>G I T H U B</strong></h3>
            </div>
            <div className="search">
                <div className="search-container">
                    <form onSubmit={handleSubmit} >
                        <div className='form-control'>
                            <MdSearch></MdSearch>
                            <input
                                data-testid='search-bar'
                                type='text'
                                placeholder='enter github user name'
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            ></input>
                            <button type='submit'>search</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Home