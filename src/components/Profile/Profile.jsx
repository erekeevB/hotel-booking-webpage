import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Profile.module.css'
import profileImg from '../../assets/profilePhoto.png'

const Profile = ({profile, isAuth}) => {

    return (

        <div className={s.profile__wrapper}>

            {!isAuth && <Redirect to='/'/>}

            <h2>Hello, {profile.username}!</h2>

            <div className={s.profile__rows}>

                <div className={s.profile__row1}>
                    <div className={s.profileImg}>
                        <img alt='Profile' src={profile.img ? profile.img : profileImg} />
                    </div>
                    <div>{profile.username}</div>
                    <div>{profile.email}</div>
                    <div>{profile.role}</div>
                </div>

                <div className={s.profile__row2}>
                    <div>Notifications</div>
                </div>

            </div>

        </div>

    )

}

const mStP = (state) => {

    return {

        profile: state.auth.profile,
        isAuth: state.auth.isAuth

    }

}

export default connect(mStP, {})(Profile);