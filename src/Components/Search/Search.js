import React from 'react'
import { useState } from 'react';
import './Search.css'
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../API';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

function Search() {

    const [user, setUser] = React.useState('');
    const { requests, searchGithubUser , error, loading} = React.useContext(GithubContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGithubUser(user);
        }
        console.log(user);
    };

  return (
    <div>
        {loading && <CircularProgress />}
        {error && <Alert style={{margin: "25px"}} severity="error">No Such User Exists</Alert>}
        <div className="search-container">
              <form onSubmit={handleSubmit}>
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
  )
}

export default Search