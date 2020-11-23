import React, { useState } from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import s from './Header.module.css';
import BookingForm from './Booking/BookingForm';
import { Link } from 'react-router-dom';

const Header = () => {

    let [booking, setBooking] = useState(false);
    
    return (

        <div className={s.header_wrapper}>

            <div className={s.header}>

                <Link className={s.header__grid1} to='/'>Srazu Hotel</Link>
                <div>
                    {!booking ? 
                        <button 
                            className={s.header__bookingButton} 
                            onClick={() => setBooking(true)}>
                                Start Booking!
                        </button> : 
                        <div></div>
                    }
                </div>
                <div className={s.header__grid2}><ProfileNav setBooking={setBooking} /></div>
            </div>
            {booking && 
                <div className={s.header__bookingForm}>

                    <BookingForm setBooking={setBooking}/>

                </div>}

            {booking && 
                <div onClick={() => {
                    setBooking(false)
                    }} 
                    className={s.header__bookingFrom_filler}></div>}

        </div>

    )

}

export default Header;