import React, {useContext} from 'react';
import '../styles/DiscoverPage.css';
import { useHistory } from "react-router-dom";
import {PageContext} from "../context";



const DiscoverPage = () => {
    let history = useHistory();
    const { setPathName } = useContext(PageContext);

    function handleClick() {
        history.push("/");
        setPathName('/');
    }

    return (
        <div className="main_container_discover">
            <h1 className="title_discover">
                Discover
            </h1>
            <div className="section_discover">
                <img className="image_discover" src='/'/>
                <span className="text_discover" >This page is under construction...</span>
                <button className="btn_discover" onClick={handleClick}> Go to training </button>
            </div>
        </div>
    );
};

export default  DiscoverPage;