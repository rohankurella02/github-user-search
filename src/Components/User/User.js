import React from 'react'
import './User.css'
import Card from '../Card/Card'
import Followers from '../Followers/Followers'
import { GithubContext } from '../API'

function User() {

    const { githubUser } = React.useContext(GithubContext);

    return (
        <div>
            <div className="user">
                <div>
                    <div className="ubox">User</div>
                    <Card />
                </div>
                <div className="fol">
                    <div className="fbox">Followers</div>
                    <div className="foll">
                        {githubUser && <Followers />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User