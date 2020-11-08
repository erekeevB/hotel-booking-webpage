import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Authentification/Login';
import Registration from '../Authentification/Registration';
import Header from './Header/Header';
import s from './Main.module.css'

const Main = () => {

    return(

        <div className={s.main}>

            <Header />

            <Switch >
              <Route path='/login' component={Login} />
              <Route path='/register' component={Registration} />
            </Switch>

            <div className={s.main__content}>AAAAA</div>

        </div>
    
    )

}
export default Main;