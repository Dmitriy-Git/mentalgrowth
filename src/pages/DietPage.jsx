import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import {PageContext} from "../context";
import '../styles/DietPage.css';

const DietPage = () => {

    let history = useHistory();
    const { setPathName } = useContext(PageContext);

    function handleClick() {
        history.push("/");
        setPathName('/');
    }

    const [count , setCount] = useState(3);

    useEffect(() => {
        let interval;
        if(count !== 0) {
            interval = setInterval(() => {
                setCount( count - 1 );
            }, 1000)
        } else {
            handleClick();
            clearInterval(interval);
        }

    }, [count]);


    return (
        <div className="main_container_diet">
            <h1>Станица в разработке</h1>
            <span> Через {count} редирект на главную </span>
        </div>
    );
};

export default  DietPage;