import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ProfileNav.module.css'

let UserInfo = ({setProfileNav, setLogin, ...props}) => {

    let userInfoFocus = useRef();
    
    useEffect(()=>{

        userInfoFocus.current.focus();

    }, [])

    return (

        <div
            ref={userInfoFocus}
            className={s.profileNav__userInfo}
            tabIndex="-1"
            onBlur={() => setProfileNav(false)}>

            {!props.isAuth ?

                <div>

                    <button onClick={() => {
                        setLogin(2)
                        setProfileNav(false)
                        document.body.style.overflow = 'hidden'
                    }}>Sign up</button>

                    <button onClick={() => {
                        setLogin(1)
                        setProfileNav(false)
                        document.body.style.overflow = 'hidden'
                    }}>Sign in</button>

                </div> :

                <div>

                    <div>
                        <Link to='/profile'>{props.profile.email}</Link>
                    </div>
                    <button>Logout</button>

                </div>}

        </div>

    )

}
const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        profile: state.auth.profile

    }

}

export default connect(mStP, {})(UserInfo)