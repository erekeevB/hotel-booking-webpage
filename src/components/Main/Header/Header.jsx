import React, { useState } from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import s from './Header.module.css';
import BookingForm from './Booking/BookingForm';

const Header = () => {

    let [booking, setBooking] = useState(false);
    
    return (

        <div className={s.header_wrapper}>

            <div className={s.header}>

                <div>Frontovik</div>
                {!booking ? <button onClick={() => setBooking(true)}>Start Booking!</button> : <div></div>}
                <ProfileNav />
            </div>
            {booking && 
                <div className={s.header__bookingForm}>

                    <BookingForm setBooking={setBooking}/>

                </div>}

            {booking && 
                <div onClick={() => setBooking(false)} className={s.header__bookingFrom_filler}></div>}

        </div>

    )

}

export default Header;