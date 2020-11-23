import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Profile.module.css'
import profileImg from '../../assets/profilePhoto.png'
import { getSetReservationThunk } from '../../redux/authReducer';

const Profile = ({ profile, isAuth, getSetReservationThunk }) => {

    useEffect(()=>{

        getSetReservationThunk();

    },[])

    return (

        <div className={s.profile__wrapper}>

            {!isAuth && <Redirect to='/' />}

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
                    <div>Reservations</div>

                    <div>Current</div>
                    {profile.currentReservations ? profile.currentReservations.map((res) => {

                        let inDate = res.inDate.getDate() + '/' + res.inDate.getMonth() + '/' + res.inDate.getFullYear()
                        let outDate = res.outDate.getDate() + '/' + res.outDate.getMonth() + '/' + res.outDate.getFullYear()

                        return (

                            <div className={s.profile__reservation}>
                                <div>{res.hotelName}</div>
                                <div>{res.roomNumber}</div>
                                <div>{inDate}</div>
                                <div>{outDate}</div>
                                <div>{res.roomTypePrice}</div>
                            </div>

                        )

                    }): <div>No Reservations Found</div>}

                    <div>Past</div>
                    {profile.pastReservations ? profile.pastReservations.map((res) => {

                        

                        let inDate = res.inDate.getDate() + '/' + res.inDate.getMonth() + '/' + res.inDate.getFullYear()
                        let outDate = res.outDate.getDate() + '/' + res.outDate.getMonth() + '/' + res.outDate.getFullYear()

                        return (

                            <div className={s.profile__reservation}>
                                <div>{res.hotelName}</div>
                                <div>{res.roomNumber}</div>
                                <div>{inDate}</div>
                                <div>{outDate}</div>
                                <div>{res.roomTypePrice}</div>
                            </div>

                        )

                    }): <div>No Reservations Found</div>}
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

export default connect(mStP, {getSetReservationThunk})(Profile);