import React from 'react';
import { Link } from 'react-router-dom';
import s from './Main.module.css'

const Main = () => {

    return (

        <div className={s.main__content}>
            <div>
                <div className={s.main__header}>Best Hotel Chain Website in Kazakhstan</div>
                <div className={s.question}>Want to Book a Room in one of the best Hotels in Kazakhstan with an
                 affordable price?</div>
            </div>
        </div>

    )

}

export default Main;