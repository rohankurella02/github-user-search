import React from 'react'
import './Followers.css'
import { GithubContext } from '../API'

function Followers() {

    const { followers} = React.useContext(GithubContext);

  return (
    <div>
        <div className="followers">
              {(typeof followers != 'undefined' && followers.length > 0)?  followers?.map((follower, index) => {
                const { avatar_url: img, login, html_url } = follower;
                return (
                    <div key={index} className="follower">
                        <img className='fimg' src={img} alt={login}></img>
                        <div>
                            <h4>{login}</h4>
                            <a style={{color: "grey", textDecoration: "none"}} href={html_url}>{html_url}</a>
                        </div>
                    </div>
                )
            }) : <p style={{color: "white", display: "flex", alignItems: "center", justifyContent: "center"}}>No followers</p>}
        </div>
    </div>
  )
}

export default Followers