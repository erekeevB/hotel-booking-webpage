import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Authentification/Login';
import Registration from '../Authentification/Registration';
import Header from './Header/Header';
import s from './Main.module.css'

const Main = () => {

    let [booking, setBooking] = useState(false);

    return(

        <div onScroll={() => console.log("AAAA")} className={s.main}>

            <Header booking = {booking} setBooking = {setBooking} />

            <Switch >
              <Route path='/login' component={Login} />
              <Route path='/register' component={Registration} />
            </Switch>

            <div className={s.main__content}>AAAAA</div>

        </div>
    
    )

}
export default Main;