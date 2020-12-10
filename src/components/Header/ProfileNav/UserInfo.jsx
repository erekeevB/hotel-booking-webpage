import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutThunk } from '../../../redux/authReducer';
import s from './ProfileNav.module.css'

let UserInfo = ({profileNav, setProfileNav, setLogin, setBooking, ...props}) => {

    return (

        <div className={s.profileNav__userInfo} >
            {!props.isAuth ?

                <div>
                    
                    <div>
                        <button onClick={() => {
                            setLogin(1)
                            setProfileNav(false)
                            setBooking(false)
                            document.body.style.overflow = 'hidden'
                        }}>Sign in</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            setLogin(2)
                            setProfileNav(false)
                            setBooking(false)
                            document.body.style.overflow = 'hidden'
                        }}>Sign up</button>
                    </div>

                </div> :

                <div>
                    <div>
                        <Link 
                            onClick={()=>{

                                setBooking(false)
                                setProfileNav(false)

                            }} 
                            to='/admin'
                        >
                            Admin Page
                        </Link>
                    </div>
                    <div>
                        <Link 
                            onClick={()=>{

                                setBooking(false)
                                setProfileNav(false)

                            }} 
                            to='/manager'
                        >
                            Manager Page
                        </Link>
                    </div>
                    <div>
                        <Link 
                            onClick={()=>{

                                setBooking(false)
                                setProfileNav(false)

                            }} 
                            to='/deskclerk'
                        >
                            Desc Clerk Page
                        </Link>
                    </div>
                    <div>
                        <Link 
                            onClick={()=>{

                                setBooking(false)
                                setProfileNav(false)

                            }} 
                            to='/profile'
                        >
                            {props.profile.username}
                        </Link>
                    </div>
                    <button
                        onClick={() => {

                            props.logoutThunk()
                            setBooking(false)
                            setProfileNav(false)

                    }}>Logout</button>

                </div>}

        </div>

    )

}
const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        profile: state.auth.profile,

    }

}

export default connect(mStP, {logoutThunk})(UserInfo)