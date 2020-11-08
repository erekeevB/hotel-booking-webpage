import React from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import s from './Header.module.css';
import BookingForm from '../../Booking/BookingForm';

const Header = ({setBooking, booking}) => {
    
    return (

        <div className={s.header_wrapper}>

            <div className={s.header}>

                <div>Batyr B-)</div>
                <div onClick={() => setBooking(!booking)}>Start Booking!</div>
                <ProfileNav />
            </div>
            <div className={ booking ?
                    s.header__bookingForm + ' ' + s.header__bookingForm_active :
                    s.header__bookingForm}>

                    <BookingForm />

                </div>

        </div>

    )

}

export default Header;