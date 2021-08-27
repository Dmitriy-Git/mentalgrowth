import React, {useState} from 'react';
import cl from '../styles/Navbar.module.css';
import Menu from './Menu';

const Navbar = () => {
    const [visible, setVisible] = useState(true);

    document.addEventListener("DOMContentLoaded", function(event) {
        window.onresize = function() {
            if (window.screen.width > 700) setVisible(true);
        };
    });

    return (
        <div className={cl.nav_main}>
            <button className={cl.burger_button} onClick={() => {setVisible(!visible)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                    <rect x="2" width="15" height="2" fill="#235864"/>
                    <rect x="6" y="4" width="11" height="2" fill="#235864"/>
                    <rect y="8" width="17" height="2" fill="#235864"/>
                </svg>
            </button>
            <div className={cl.burger_panel}> </div>

            { visible ? <Menu /> : <></> }
        </div>
    );
};

export default Navbar;