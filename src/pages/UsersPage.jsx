import React, {useEffect, useState, useContext} from 'react';
import metadata from "../metadata";
import '../styles/UsersPage.css';
import UserList from "../components/UserList";
import Modal from "../components/Modal";
import UserInfo from "../components/UserInfo";
import {PageContext} from "../context";
// import Service from "../API/Service";


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const {curr_user, modal} = useContext(PageContext);

    const fetchUsers = async () => {
        setUsers(metadata);
        // const response = await Service.getUsers();
        // setUsers(response);
    }

    useEffect(() => { fetchUsers(); },[])

    return (
        <div className="main_container">
                <h1 className="title">
                    Exercises
                </h1>
                <h3 className="subtitle">
                    Strengthen respiratory system
                </h3>
                <Modal visible={modal}>
                    <UserInfo user={curr_user}/>
                </Modal>

                <UserList users={users}/>
        </div>
    );
};

export default  UsersPage;