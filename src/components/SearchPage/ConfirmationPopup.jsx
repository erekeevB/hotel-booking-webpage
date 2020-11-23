import React from 'react';

import s from './SearchPage.module.css'

const ConfirmationPopup = (
    {
        hotelName,
        hotelAddress,
        roomTypeSize,
        roomTypePrice,
        roomTypePeople,
        
        roomTypeId,
        hotelId,

        inDate,
        outDate,

        handleSubmit,
        setIsField
    }) => {

    return (
        <div className={s.confirm__wrapper}>
            <div className={s.confirm}>
                <div>
                    <div className={s.confirm__mainheader}>Please Confirm The Information Below</div>
                    <div className={s.confirm__field}>
                        <div className={s.confirm__header}>Date</div>
                        <div>{inDate.getDate()}/{inDate.getMonth()}/{inDate.getFullYear()}</div>
                        <div>{outDate.getDate()}/{outDate.getMonth()}/{outDate.getFullYear()}</div>
                    </div>
                    <div className={s.confirm__field}>
                        <div className={s.confirm__header}>Hotel</div>
                        <div>{hotelName}</div>
                        <div>{hotelAddress}</div>
                    </div>
                    <div className={s.confirm__field}>
                        <div className={s.confirm__header}>Room Type</div>
                        <div>{roomTypeSize}</div>
                        <div>{roomTypePeople}</div>
                    </div>
                    <div className={s.confirm__field}>
                        <div className={s.confirm__header}>Price</div>
                        <div>{roomTypePrice}</div>
                    </div>
                    
                    <button 
                        className={s.confirm__confirmbutton} 
                        onClick={()=>{handleSubmit(hotelId, roomTypeId)}}>
                            Confirm
                    </button>
                    <button 
                        className={s.confirm__cancelbutton} 
                        onClick={()=>{setIsField('')}}>
                            Cancel
                    </button>
                </div>
            </div>
            <div onClick={()=>{setIsField('')}} className={s.confirm__filler}></div>
        </div>
    )

}

export default ConfirmationPopup