import React from 'react'
import './Repository.css'
import { GithubContext } from '../API'
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import Repocard from '../Repocard/Repocard';

function Repository() {

    const { githubUser } = React.useContext(GithubContext);
    const { public_repos, followers, following, public_gists } = githubUser;
    const [repo, setRepo] = React.useState([]);
    console.log(public_repos)
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        console.log(page);
    };
    const url = `https://api.github.com/users/${githubUser.login}/repos?page=${page}&per_page=10`;

    React.useEffect(() => {
        console.log(url)
        axios.get(url)
            .then(res => {
                setRepo(res.data);
            }
            )
            .catch(err => console.log(err));
            console.log(repo)

    }, [page, githubUser.login]);

  return (
    <div style={{padding: "25px", margin: "95px 0"}}>

        <Repocard repo={repo} />
          <div className='page'>{githubUser && <Pagination color='primary' style={{ color: "white" }} count={Math.ceil(public_repos / 10)} page={page} onChange={handleChange} />} </div>
    </div>
  )
}

export default Repository