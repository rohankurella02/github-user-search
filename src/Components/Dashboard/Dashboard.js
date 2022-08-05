import React from 'react'
import Card from '../Card/Card'
import '../Dashboard/Dashboard.css'
import Navbar from '../Navbar'
import Search from '../Search/Search'
import { GithubContext } from '../API'
import User from '../User/User'
import Pagination from '@mui/material/Pagination';
import Repository from '../Repository/Repository'


function Dashboard() {

    const { githubUser } = React.useContext(GithubContext);
    console.log(githubUser)

  return (
    <div>
        <Navbar />
        <Search />
        { githubUser && <User />}
          { githubUser && <Repository />}
    </div>
  )
}

export default Dashboard