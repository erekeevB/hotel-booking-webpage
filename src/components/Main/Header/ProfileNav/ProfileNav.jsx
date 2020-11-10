import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HamburgerIcon, UserIcon } from '../../../../assets/Icons';
import Authentication from './Authentification/Authentication';
import s from './ProfileNav.module.css'

const ProfileNav = (props) => {

    let [isActive, setIsActive] = useState(false);

    let [isLogin, setLogin] = useState(0);

    return (

        <div className={s.wrapper}>

            <div className={s.profileNav}>

                <button onClick={() => setIsActive(!isActive)}>
                    <HamburgerIcon />
                    <UserIcon />
                </button>

                {isActive &&

                    <div className={s.profileNav__userInfo}>

                        {!props.isAuth ?

                            <div>

                                <button onClick={() => {
                                    setLogin(2)
                                    setIsActive(false)
                                    document.body.style.overflow = 'hidden'
                                }}>Sign up</button>

                                <button onClick={() => {
                                    setLogin(1)
                                    setIsActive(false)
                                    document.body.style.overflow = 'hidden'
                                }}>Sign in</button>

                            </div> :

                            <div>

                                <div>
                                    <Link to='/profile'>{props.profile.email}</Link>
                                </div>
                                <button>Logout</button>

                            </div>}

                    </div>}

                {isLogin!==0 && <Authentication setLogin={setLogin} isLogin={isLogin} />}

            </div>



        </div>

    )

}

const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        profile: state.auth.profile

    }

}

export default connect(mStP, {})(ProfileNav);