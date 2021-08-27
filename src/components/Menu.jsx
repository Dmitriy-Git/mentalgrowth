import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import cl from '../styles/Navbar.module.css';
import {PageContext} from "../context";

const Menu = () => {
    // const [pathname, setPathName] = useState(window.location.pathname);
    const {pathname, setPathName} = useContext(PageContext);


    return (
            <div className={cl.navbar} >
                <div className={pathname === '/discover' ? cl.navbar_link_active : cl.navbar_link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51497 0L4.74251 0C5.43695 0 6 0.671631 6 1.5L6 16.5C6 17.3284 5.43695 18 4.74251 18H2.51497C1.82053 18 1.25749 17.3284 1.25749 16.5L1.25749 10.5C0.562996 10.5 0 9.937 0 9.24251L0 8.75749C0 8.063 0.562996 7.5 1.25749 7.5L1.25749 1.5C1.25749 0.671631 1.82053 0 2.51497 0ZM18.7425 7.5C19.437 7.5 20 8.063 20 8.75749V9.24251C20 9.937 19.437 10.5 18.7425 10.5V16.5C18.7425 17.3284 18.1795 18 17.485 18H15.2575C14.563 18 14 17.3284 14 16.5L14 1.5C14 0.671631 14.563 0 15.2575 0L17.485 0C18.1795 0 18.7425 0.671631 18.7425 1.5V7.5Z" fill="#161616"/>
                    </svg>
                    <Link
                        className={pathname === '/discover' ? cl.navbar_text_active : cl.navbar_text}
                        to='/discover'
                        onClick={() => {setPathName('/discover')}}
                    >Discover</Link>
                </div>
                <div className={pathname === '/' ? cl.navbar_link_active : cl.navbar_link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0001C0 4.48009 4.47 9.15527e-05 10 9.15527e-05C15.52 9.15527e-05 20 4.48009 20 10.0001C20 15.5301 15.52 20.0001 10 20.0001C4.47 20.0001 0 15.5301 0 10.0001ZM12.23 11.8301L13.85 6.71009C13.96 6.36009 13.64 6.03009 13.29 6.14009L8.17 7.74009C7.96 7.81009 7.79 7.97009 7.73 8.18009L6.13 13.3101C6.02 13.6501 6.35 13.9801 6.69 13.8701L11.79 12.2701C12 12.2101 12.17 12.0401 12.23 11.8301Z" fill="#8D8D9C"/>
                    </svg>
                    <Link
                        className={pathname === '/' ? cl.navbar_text_active : cl.navbar_text}
                        to='/'
                        onClick={() => {setPathName('/')}}
                    > Main</Link>
                </div>

                <div className={pathname === '/diet' ? cl.navbar_link_active : cl.navbar_link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.9539 6.89668L12.0079 1.855C11.9704 1.65 11.7505 1.5 11.4932 1.5C11.488 1.5 11.4817 1.5 11.4755 1.5C11.2108 1.50668 10.9952 1.67082 10.9743 1.88168L10.518 4.25918C10.4899 4.52918 9.89076 4.52918 9.86263 4.25918L9.40735 1.88168C9.3844 1.66582 9.15935 1.5 8.88848 1.5C8.61758 1.5 8.3915 1.66582 8.36962 1.88168L7.91327 4.25918C7.88514 4.52918 7.28603 4.52918 7.2579 4.25918L6.80257 1.88168C6.78069 1.67168 6.56502 1.5075 6.30036 1.5C6.29411 1.5 6.28888 1.5 6.28371 1.5C6.02637 1.5 5.8065 1.65 5.76899 1.855L4.82401 6.89668C4.50006 9 5.54814 10.7875 7.23807 11.3767L6.43374 19.3934C6.38583 19.9359 6.62338 20.475 7.08701 20.8734C7.54961 21.2717 8.20498 21.5 8.88638 21.5H8.89054C9.57091 21.5 10.2273 21.2717 10.6909 20.8733C11.1546 20.475 11.3921 19.9358 11.3442 19.3933L10.5399 11.3767C12.2299 10.7875 13.5001 9 12.9539 6.89668Z" fill="#8D8D9C"/>
                        <path d="M20.0017 1.57666C19.8638 1.49834 19.6862 1.47998 19.5263 1.52416C19.4814 1.53666 14.5 2.5 14.5 7C14.5 9.9275 15.8545 10.8269 17 12L15.2204 19.3016C15.1493 19.8624 15.3802 20.4241 15.8545 20.8425C16.3288 21.2608 17.0088 21.5 17.715 21.5C19.0971 21.5 20.2221 20.6025 20.2221 19.5V1.91666C20.2231 1.7808 20.1406 1.65498 20.0017 1.57666Z" fill="#8D8D9C"/>
                    </svg>
                    <Link
                        className={pathname === '/diet' ? cl.navbar_text_active : cl.navbar_text}
                        to='/diet'
                        onClick={() => {setPathName('/diet')}}
                    > Diet </Link>
                </div>
            </div>
    );
};

export default Menu;