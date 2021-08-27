import React from 'react';
import User from "./User";
import '../styles/UserList.css';

const UserList = ({users}) => {
    return (
        <div className="user_list_container">
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;