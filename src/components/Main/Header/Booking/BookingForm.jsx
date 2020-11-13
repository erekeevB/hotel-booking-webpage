import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setDate } from '../../../../redux/hotelReducer';
import DateComponent from '../../../DateComponent/DateComponent';
import s from './BookingForm.module.css';

const BookingForm = ({setBooking, ...props}) => {

    useEffect( () => {

        return () => {

            window.removeEventListener('scroll', ()=>setBooking(false))

        }

    },[setBooking])

    window.addEventListener('scroll', ()=>setBooking(false))

    return (

        <div className={s.bookingForm}>

            <Select 
                className={s.select}
                options={props.cities.map((el)=>{
                    return {value: el, label: el}
                })}
                isClearable 
            />
            <DateComponent 
                className={s.dateComponent} 
                num={2} 
                {...props.startDate} 
                {...props.endDate}
                setDate={props.setDate}
            />
            <button>Search</button>

        </div>

    )

}

const mStP = (state) => {

    return {

        startDate: state.hotel.input.startDate,
        endDate: state.hotel.input.endDate,
        cities: state.hotel.cities

    }

}

export default connect(mStP, {setDate})(BookingForm);