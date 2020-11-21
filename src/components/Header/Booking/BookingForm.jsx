import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeGuestNum, setCity, setDate } from '../../../redux/hotelReducer';
import DateComponent from '../../DateComponent/DateComponent';
import GuestNumSelect from '../../GuestNumSelect/GuestNumSelect';
import s from './BookingForm.module.css';

const BookingForm = ({setBooking, ...props}) => {

    useEffect( () => {

        return () => {

            window.removeEventListener('scroll', ()=>setBooking(false))

        }

    },[setBooking])

    let selectRef = useRef();

    window.addEventListener('scroll', ()=>setBooking(false))

    return (

        <div className={s.bookingForm__wrapper}>

            <div className={s.bookingForm}>

                <div onClick={()=>selectRef.current.select.focus()} className={s.bookingForm__input}>
                    <div>Location</div>
                    <div>
                        <Select
                            ref={selectRef}
                            className={s.select}
                            placeholder={"City..."}
                            defaultValue={props.city ? {label: props.city, value: props.city} : null}
                            onChange={(option) => {
                                if(option){
                                    props.setCity(option.value)
                                }else{
                                    props.setCity(option)
                                }
                            }}
                            options={props.cities.map((el)=>{
                                return {value: el, label: el}
                            })}
                            isClearable
                        />
                    </div>
                </div>
                <div>
                    <DateComponent
                        className={s.bookingForm__input} 
                        num={2} 
                        startDate={props.startDate} 
                        endDate={props.endDate}
                        setDate={props.setDate}
                        firstDateHeader='Check In'
                        secondDateHeader='Check Out'
                    />
                </div>
                <div>
                    <GuestNumSelect
                        className={s.bookingForm__input}
                        headerText='Number of People'
                        adultNum={props.adultNum}
                        childrenNum={props.childrenNum}
                        changeGuestNum={props.changeGuestNum}
                    />
                </div>
                <button onClick={()=>{

                    console.log(
                        {
                            city: props.city,
                            date: {
                                startDate: props.startDate,
                                endDate: props.endDate
                            },
                            guestNum: {
                                adult: props.adultNum,
                                children: props.childrenNum
                            }
                        })

                }}>Search</button>

            </div>

        </div>

    )

}

const mStP = (state) => {

    return {

        startDate: state.hotel.input.startDate,
        endDate: state.hotel.input.endDate,

        city: state.hotel.input.city,
        cities: state.hotel.cities,

        adultNum: state.hotel.input.numOfPeople.adult,
        childrenNum: state.hotel.input.numOfPeople.children,

    }

}

export default connect(mStP, {setDate, setCity, changeGuestNum})(BookingForm);