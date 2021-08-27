import React, {useContext} from 'react';
import cl from '../styles/Modal.module.css';
import {PageContext} from "../context";

const Modal = ({children, visible }) => {
    const {setCurrUser, setModal} = useContext(PageContext);
    const rootClass = [cl.modal];

    if (visible) rootClass.push(cl.active);

    return (
        <div className={rootClass.join(' ')} onClick={() => {setModal(false); setCurrUser(null)}}>
            <div className={cl.modalContent} onClick={e => e.stopPropagation()}>
                <button className={cl.modalBtn} onClick={() => {setModal(false); setCurrUser(null)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="white"/>
                        <path d="M24 16L15.6818 24.3182" stroke="black" stroke-width="2"/>
                        <path d="M15.6836 16L24.0018 24.3182" stroke="black" stroke-width="2"/>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;