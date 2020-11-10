import React from 'react';
import s from './DatePicker.module.css'

const Date = ({month, year, offset, number, setNumber}) => {

    const setNumber1 = (num) => {

        if(number[3]){

            setNumber([num, num, true])

        }else{

            setNumber([number[0], num, false])

        }

    }

    return (

        <div className={s.date}>
            {offset}
            <input
                onClick={()=>setNumber1((offset*4) + 1)}
                disabled={offset<0 && `disabled`} 
                checked={(offset*4) + 1 >= number[0] && (offset*4) + 1 <= number[1] && 'checked'} 
                type='checkbox' />
            <input
                onClick={()=>setNumber1((offset*4) + 2)}
                disabled={offset<0 && `disabled`} 
                checked={(offset*4) + 2 >= number[0] && (offset*4) + 2 <= number[1] && 'checked'} 
                type='checkbox' />
            <input
                onClick={()=>setNumber1((offset*4) + 3)}
                disabled={offset<0 && `disabled`} 
                checked={(offset*4) + 3 >= number[0] && (offset*4) + 3 <= number[1] && 'checked'} 
                type='checkbox' />
            <input
                onClick={()=>setNumber1((offset*4) + 4)}
                disabled={offset<0 && `disabled`} 
                checked={(offset*4) + 4 >= number[0] && (offset*4) + 4 <= number[1] && 'checked'} 
                type='checkbox' />
        </div>

    )

}

export default Date;