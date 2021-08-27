import React from 'react';
import '../styles/UserInfo.css';

const UserInfo = ({user}) => {
    const _steps = user && [...user.steps].splice(0, 2);

    return (
        <>
            {user ?
                <div className='user_info_container'>
                <img className='user_info_img' src={user.small_image}/>
                <h3 className='user_info_title'>{user.title}</h3>
                {_steps.map((step) => (
                    <div className="user_info_step_container">
                        <h3 className='user_info_step_order'>{step.order}</h3>
                        <span className='user_info_step_text'>{step.text}</span>
                    </div>
                ))}
                </div>
                : <div> Отсутствуют данные для отображения информации о пользователе </div>
            }
        </>
    );
};

export default UserInfo;