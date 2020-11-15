import React from 'react';
import { Link } from 'react-router-dom';
import s from './Main.module.css'

const Main = () => {

    return (

        <div className={s.main__content}>
                <Link to='/profile'>ProfilePage </Link>
                <Link to='/admin'>AdminPage</Link> <br/>
            </div>

    )

}

export default Main;