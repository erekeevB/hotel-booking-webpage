import React from 'react';
import RoomTypeImg from '../../assets/room_type.jpg'

import s from './SearchPage.module.css'

const RoomTypeCard = ({ id, maxNumPeople, size, price, setReserveField }) => {

    return (
        <div className={s.roomtype}>
            <div className={s.roomtype__img}>
                <img src={RoomTypeImg} alt='room' />
            </div>
            <div className={s.roomtype__name}>
                Room type #{id}
            </div>
            <div>Number of People: {maxNumPeople}</div>
            <div>Size of Room: {size}</div>
            <div className={s.roomtype__price}>{price}tg</div>
            <button className={s.roomtype__button} onClick={setReserveField}>Reserve</button>
        </div>
    )

}

export default RoomTypeCard