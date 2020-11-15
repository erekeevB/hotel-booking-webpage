import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteUserThunk, getSetUsersThunk } from '../../redux/adminReducer';

import s from './Admin.module.css';

const Admin = ({isAuth, role, users, error, isFetching, getSetUsersThunk, deleteUserThunk}) => {

    useEffect(()=>{

        //getSetUsersThunk()

    })

    return (

        <div className={s.admin}>

            {(!isAuth && role==='Admin') && <Redirect to='/' />}

            <div className={s.admin__wrapper}>

                <h2 className={s.admin__header}>Admin Page</h2>

                <div className={s.userlist}>

                    <div className={s.userlist__labels}>
                        <div>ID</div>
                        <div>Email</div>
                        <div>Username</div>
                        <div>Phone Number</div>
                        <div></div>
                    </div>

                    {users.map((user)=>{

                        return(

                            <div key={user.id} className={s.userlist__rows}>
                            
                                <div>{user.id}</div>
                                <div>{user.username}</div>
                                <div>{user.email}</div>
                                <div>{user.phoneNumber}</div>
                                <div className={s.userlist__button_wrapper}>
                                    <button
                                        className={s.userlist__button}
                                        onClick={()=>{deleteUserThunk(user.id)}}>
                                            Delete
                                    </button>
                                </div>

                            </div>

                        )

                    })}

                </div>

            </div>

        </div>

    )

}

const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        role: state.auth.profile.role,
        users: state.admin.users,
        error: state.admin.error,
        isFetching: state.admin.isFetching

    }

}

export default connect(mStP, {getSetUsersThunk, deleteUserThunk})(Admin);