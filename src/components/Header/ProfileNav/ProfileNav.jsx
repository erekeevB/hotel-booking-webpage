import React, { useState } from 'react';
import { HamburgerIcon, UserIcon } from '../../../assets/Icons';
import Authentication from './Authentification/Authentication';
import s from './ProfileNav.module.css'
import UserInfo from './UserInfo';
import onClickOutside from 'react-onclickoutside'

const ProfileNav = function({setBooking}){
    
    let [profileNav, setProfileNav] = useState(false);

    let [isLogin, setLogin] = useState(0);

    ProfileNav.handleClickOutside = ()=>{setProfileNav(false)};

    return (

        <>

            <div className={s.profileNav}>

                <button className={s.profileNav__button} onClick={() => setProfileNav(!profileNav)}>
                    <HamburgerIcon />
                    <UserIcon />
                </button>

                {profileNav && 
                    <UserInfo 
                        profileNav={profileNav} 
                        setProfileNav={setProfileNav} 
                        setLogin={setLogin}
                        setBooking={setBooking}
                    /> }

                {isLogin!==0 && <Authentication setLogin={setLogin} isLogin={isLogin} />}

            </div>

        </>

    )

}

const clickOutsideConfig = {

    handleClickOutside: () => ProfileNav.handleClickOutside,

}

export default onClickOutside(ProfileNav, clickOutsideConfig);