import React from 'react'
import './Card.css'
import { GithubContext } from '../API';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

function Card() {

    const { githubUser, repos } = React.useContext(GithubContext);
    console.log(repos)
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        bio,
        twitter_username,
    } = githubUser;

    return (
        <div className='card'>
            <div className="head">
                <img src={avatar_url} alt={name}></img>
                <div>
                    <h1>{name}</h1>
                    <p className='bio'>{bio}</p>
                    <p style={{ color: "grey", display: "flex", alignContent: "center", gap: "15px" }}><BsTwitter style={{ color: "white" }} />  {twitter_username || 'john doe'}</p>
                </div>

            </div>
            <div style={{ display: "flex", alignContent: "center", justifyContent: "space-between" }}>
                <div className='links'>
                    <p style={{ color: "grey", display: "flex", alignContent: "center", gap: "15px", marginBottom: "-12px" }}>
                        <MdBusiness style={{ color: "white" }}></MdBusiness>
                        {company}
                    </p>
                    <p style={{ color: "grey", display: "flex", alignContent: "center", gap: "15px" }}>
                        <MdLocationOn style={{ color: "white" }}></MdLocationOn>
                        {location || 'earth'}
                    </p>
                    <a style={{ color: "grey", display: "flex", alignContent: "center", gap: "15px", textDecoration: "none" }} href={`https://${blog}`}>
                        <MdLink style={{ color: "white" }}></MdLink>
                        {blog}
                    </a>
                </div>
                <a className='ufollow' href={html_url}>follow</a>
            </div>
        </div>
    )
}

export default Card