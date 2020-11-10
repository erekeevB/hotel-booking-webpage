import React, { useEffect } from 'react';
import DatePicker from '../../../DatePicker/DatePicker';
import s from './BookingForm.module.css';

const BookingForm = ({setBooking}) => {

    useEffect( () => {

        return () => {

            window.removeEventListener('scroll', ()=>setBooking(false))

        }

    },[setBooking])

    window.addEventListener('scroll', ()=>setBooking(false))

    return (

        <div className={s.bookingForm}>

            <select onChange={(e)=>console.log(e.selectedIndex)}>

                <option>Nur-Sultan</option>
                <option>Temirtau</option>
                <option>Aqtobe</option>
                <option>Pavlodar</option>

            </select>
            <select>

                <option>Hotel1</option>
                <option>Hotel2</option>
                <option>Hotel3</option>
                <option>Hotel4</option>

            </select>
            <DatePicker num={2} />
            <button>Search</button>

        </div>

    )

}

export default BookingForm;