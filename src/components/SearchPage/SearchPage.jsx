import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReservationThunk } from '../../redux/authReducer';
import ConfirmationPopup from './ConfirmationPopup';
import RoomTypeCard from './RoomTypeCard';

import s from './SearchPage.module.css'

const SearchPage = ({hotels, outDate, inDate, addReservationThunk}) => {

    let [isField, setIsField] = useState('')

    let[isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = () => {

        addReservationThunk({...isField})

        setIsField('')

        setIsSuccess(true)

    }

    const handleSetField = (hotel, roomType) => {

        setIsField({
            hotelName: hotel.hotelName,
            hotelId: hotel.hotelId,
            hotelAddress: hotel.hotelAddress,
            roomTypeId: roomType.roomTypeId,
            roomTypePeople: roomType.roomTypePeople,
            roomTypeSize: roomType.roomTypeSize,
            roomTypePrice: roomType.roomTypePrice,
            outDate,
            inDate
        })

    }

    return (

        hotels.length ? 
            <div className={s.searchpage__wrapper}>
                {isField ? 
                    <ConfirmationPopup {...isField} setIsField={setIsField} handleSubmit={handleSubmit}/>
                : null}
                {hotels.map((hotel)=>{
                    return (
                        <div className={s.hotel}>

                            <div className={s.hotel__header}>

                                <div className={s.hotel__name}>{hotel.hotelName}</div>
                                <div className={s.hotel__address}>{hotel.hotelAddress}</div>

                            </div>
                            

                            <div className={s.roomtype__wrapper}>

                                {hotel.roomTypes.map((roomType)=>{

                                    return (
                                        <RoomTypeCard 
                                            id={roomType.roomTypeId}
                                            maxNumPeople={roomType.roomTypePeople}
                                            size={roomType.roomTypeSize}
                                            price={roomType.roomTypePrice}
                                            setReserveField={()=>{
                                                handleSetField(hotel, roomType)
                                            }}
                                        />
                                    )

                                })}

                            </div>
                            
                        </div>
                    )
                })}
            </div>: 
            <div>
                Nothing Found :(
            </div>
            

    )

}

let mStP = (state) => {

    return {

        hotels: state.search.hotels,

        inDate: state.search.input.startDate,
        outDate: state.search.input.endDate

    }

}

export default connect(mStP, {addReservationThunk})(SearchPage)