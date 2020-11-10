import React, { useState } from 'react';
import { connect } from 'react-redux';
import Date from './Date';
import s from './DatePicker.module.css'

const DatePicker = ({num}) => {

    let [offset, setOffset] = useState(0)

    let [number, setNumber] = useState([3, 20, false])
    
    return (

        <div className={s.datepicker}>
            <button onClick={()=>setOffset(offset-1)}>&lt;</button>

            {[...Array(num)]
                .map((el, index) =>{

                    return(

                        <Date offset={offset + index} number={number} setNumber={setNumber} />

                    )

                })}
                
            <button onClick={()=>setOffset(offset+1)}>&gt;</button>
        </div>

    )

}

const mStP = (state) => {

    return {

        date: state.hotel.date

    }

}

export default connect(mStP, {})(DatePicker);