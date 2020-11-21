import React from 'react';
import { MinusIcon, PlusIcon } from '../../assets/Icons';
import s from './GuestNumSelect.module.css';

const SelectField = ({text, num, setNum, childrenNum}) => {

    const increaseNum = () => {

        if(num<10){
            setNum(1)
        }

    }

    const decreaseNum = () => {

        if((!childrenNum && num===1) || num>1){
            setNum(-1)
        }

    }

    return(

        <div className={s.selectfield}>
            <div className={s.selectfield__name}><p>{text}</p></div>
            <div className={s.selectfield__controls} tabIndex='0' onKeyDown={(e)=>{

                if(e.key==='ArrowUp'){

                    increaseNum()

                }else if(e.key==='ArrowDown'){

                    decreaseNum()

                }

            }}>
                <button tabIndex='-1' onClick={decreaseNum}>
                    <MinusIcon />
                </button>
                <div className={s.selectfield__num}>{num}</div>
                <button tabIndex='-1' onClick={increaseNum}>
                    <PlusIcon />
                </button>
                
            </div>
        </div>

    )

}

export default SelectField;