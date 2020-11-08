import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HamburgerIcon, UserIcon } from '../../../../assets/Icons';
import { loginUserThunk, logoutThunk } from '../../../../redux/authReducer';
import s from './ProfileNav.module.css'

const ProfileNav = (props) => {

    let [isActive, setIsActive] = useState(false);

    return (

        <div className={s.wrapper}>

            <div className={s.profileNav} onClick={() => setIsActive(!isActive)}>

                <HamburgerIcon />
                <UserIcon />

                {!isActive ?

                    <div className={s.profileNav__userInfo}>

                        {!props.isAuth ?

                            <div>

                                <div>
                                    <Link to='/login'>Login</Link>
                                </div>
                                <div>
                                    <Link to='/register'>Register</Link>
                                </div>

                            </div> :

                            <div>

                                <div>
                                    <Link to='/profile'>{props.profile.username}</Link>
                                </div>
                                <button>Logout</button>

                            </div>}

                    </div> : null}

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