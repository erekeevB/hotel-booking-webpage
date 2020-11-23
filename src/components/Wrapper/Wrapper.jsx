import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Main from '../Main/Main';
import s from './Wrapper.module.css';
import AdminContainer from '../Admin/AdminContainer';
import SearchPage from '../SearchPage/SearchPage';
import Manager from '../Manager/Manager';
import DeskClerk from '../DeskClerk/DeskClerk';

const Wrapper = () => {

    return (

        <div className={s.wrapper}>

            <Header />

            <div className={s.wrapper__content}>

                <Switch >

                    <Route exact path='/' component={Main} />

                    <Route path='/profile' component={Profile} />

                    <Route 
                        path='/admin/:parent?/:id?/:child?' 
                        render={(match)=><AdminContainer match={match.match.params}/>} 
                    />

                    <Route path='/results' component={SearchPage} />

                    <Route path='/manager/:child?' render={(match)=><Manager child={match.match.params.child}/>} />

                    <Route path='/deskclerk' component={DeskClerk} />

                </Switch>

            </div>

        </div>

    )

}
export default Wrapper;