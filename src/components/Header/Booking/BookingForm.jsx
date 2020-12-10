import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { changeGuestNum, searchThunk, setCity, setDate, setGuestNum } from '../../../redux/searchReducer';
import DateComponent from '../../DateComponent/DateComponent';
import GuestNumSelect from '../../GuestNumSelect/GuestNumSelect';
import s from './BookingForm.module.css';

const BookingForm = ({setBooking, startDate, endDate, city, adultNum, childrenNum, ...props}) => {

    useEffect( () => {

        return () => {

            window.removeEventListener('scroll', ()=>setBooking(false))

        }

    },[setBooking])

    let selectRef = useRef();

    window.addEventListener('scroll', ()=>setBooking(false))

    let history = useHistory();

    const handleSearch = () => {

        setBooking(false)

        let temp = {
            city: city,
            inDate: startDate.toString(),
            outDate: endDate.toString(),
            people: adultNum + childrenNum
        }

        props.searchThunk(temp)

        history.push('/results')

    }

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
                            defaultValue={city ? {label: city, value: city} : null}
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
                        startDate={startDate} 
                        endDate={endDate}
                        setDate={props.setDate}
                        firstDateHeader='Check In'
                        secondDateHeader='Check Out'
                    />
                </div>
                <div>
                    <GuestNumSelect
                        className={s.bookingForm__input}
                        headerText='Number of People'
                        adultNum={adultNum}
                        childrenNum={childrenNum}
                        changeGuestNum={props.changeGuestNum}
                    />
                </div>
                <button onClick={handleSearch}>Search</button>

            </div>

        </div>

    )

}

const mStP = (state) => {

    return {

        startDate: state.search.input.startDate,
        endDate: state.search.input.endDate,

        city: state.search.input.city,
        cities: state.search.cities,

        adultNum: state.search.input.numOfPeople.adult,
        childrenNum: state.search.input.numOfPeople.children,

    }

}



export default connect(
    mStP,
    {
        setDate,
        setCity,
        changeGuestNum,
        setGuestNum,
        searchThunk
    })(BookingForm);