import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import s from './GuestNumSelect.module.css';
import SelectField from './SelectFIeld';

const GuestNumSelect = function({className, headerText, adultNum, childrenNum, changeGuestNum, ...props}) {

    let [isActive, setIsActive] = useState(false);

    GuestNumSelect.handleClickOutside = ()=>{setIsActive(false)};

    return (

        <div className={s.guestnumselect__wrapper}>

            <div className={className} onClick={()=>setIsActive(!isActive)}>

                <div>{headerText}</div>

                <div>
                    {adultNum ? adultNum + ' adults': 'Add Guests'}
                    {childrenNum ? <span>, {childrenNum} children</span> : null}
                </div>

            </div>

            {isActive && 
                <div className={s.selectfield__wrapper}>
                    <SelectField 
                        text='Adults'
                        num={adultNum}
                        setNum={(num)=>{changeGuestNum(1, num)}}
                        childrenNum={childrenNum}
                    />
                    <SelectField 
                        text='Children'
                        num={childrenNum}
                        setNum={(num)=>{changeGuestNum(2, num)}}
                    />
                </div>
            }

        </div>

    )

}

const clickOutsideConfig = {

    handleClickOutside: () => GuestNumSelect.handleClickOutside,

}

export default onClickOutside(GuestNumSelect, clickOutsideConfig);