import React from 'react';
import s from './Preloader.module.css'

const Preloader = () => {

    return (

        <div className={s.preloader__wrapper}>
            <div className={s.preloader}>
                <div className={s.preloader__element1}></div>
                <div className={s.preloader__element2}></div>
            </div>
        </div>

    )

}

export default Preloader;