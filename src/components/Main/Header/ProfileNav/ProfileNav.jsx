import React, { useState } from 'react';
import { HamburgerIcon, UserIcon } from '../../../../assets/Icons';
import Authentication from './Authentification/Authentication';
import s from './ProfileNav.module.css'
import UserInfo from './UserInfo';

const ProfileNav = (props) => {

    let [isLogin, setLogin] = useState(0);

    return (

        <div className={s.wrapper}>

            <div className={s.profileNav}>

                <button onClick={() => props.setProfileNav(!props.profileNav)}>
                    <HamburgerIcon />
                    <UserIcon />
                </button>

                {props.profileNav && <UserInfo setProfileNav={props.setProfileNav} setLogin={setLogin} /> }

                {isLogin!==0 && <Authentication setLogin={setLogin} isLogin={isLogin} />}

            </div>

        </div>

    )

}

export default ProfileNav;