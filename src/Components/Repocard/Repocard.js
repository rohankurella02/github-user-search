import axios from 'axios';
import React, { useEffect } from 'react'
import './Repocard.css'
import { FaExternalLinkAlt } from 'react-icons/fa';
import Chip from '@mui/material/Chip';


function Repocard({repo}) {


  

  return (
    <div style={{margin: "0 125px"}}>
        <div className="repo-card">
            {repo.map((repo, index) => {
                const { name, description, html_url, stargazers_count: stars, language } = repo;
                //lang(repo.languages_url)
                return (
                    <div key={index} className="repo-card-item">
                        <div className="repo-card-item-header">
                            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                <h2>{name}</h2>
                                <a href={html_url} target="_blank" > <FaExternalLinkAlt /> </a>
                            </div>
                            <p>{description || "No description available"}</p>
                        </div>
                        <div className="repo-card-item-footer">
                            
                            <p> <Chip label={ repo.language || "Unknown" } /> </p>
                        </div>
                    </div>
                )
            }
            )}
            </div>
    </div>
  )
}

export default Repocard