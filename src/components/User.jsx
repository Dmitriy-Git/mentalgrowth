import React, {useContext} from 'react';
import '../styles/User.css';
import {PageContext} from "../context";

const User = ({user}) => {
    const {setCurrUser, setModal} = useContext(PageContext)

    return (
        <div className="user_container" onClick={() => {setModal(true); setCurrUser(user)}}>
            <img className="image" src={user.small_image}/>
            <span className="user_description">{user.title}</span>
        </div>
    );
};

export default User;