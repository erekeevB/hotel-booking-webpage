import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserThunk, getSetUsersThunk } from '../../redux/adminReducer';
import { deleteHotelThunk, getSetHotelsThunk } from '../../redux/hotelReducer';

import s from './Admin.module.css';
import AdminList from './AdminList/AdminList';

const Admin = ({object, params, allObjects, id, parent, child}) => {

    return (

        <div className={s.admin}>

            <div className={s.admin__wrapper}>

                <div className={s.admin__header}>

                    <Link to='/admin' className={s.admin__header_link}>Admin Page</Link>

                    {parent ? 
                        <Link 
                            to={'/admin/'+parent} 
                            className={s.admin__header_link}>
                                &nbsp;/ {parent}
                        </Link>
                        : null}

                    {id ? <h2>&nbsp;/ {id}</h2> : null}

                    {child ? 
                        <Link 
                            to={'/admin/'+parent+'/'+id+'/'+child} 
                            className={s.admin__header_link}>
                                &nbsp;/ {child}
                            </Link>
                        : null}

                </div>

                {allObjects ? 
                    <div className={s.admin__panels}>
                        <div className={s.admin__panels__users}>
                            <h3>Users</h3>
                            <AdminList
                                objectNames={allObjects.users.users.compactNames}
                                objectList={allObjects.users.users.list}
                                isCompact={"/admin/users"}
                            />
                        </div>
                        <div className={s.admin__panels__hotels}>
                            <h3>Hotels</h3>
                            <AdminList
                                objectNames={allObjects.hotels.hotels.compactNames}
                                objectList={allObjects.hotels.hotels.list}
                                isCompact={"/admin/hotels"}
                            />
                        </div>
                    </div>:
                    
                    <AdminList
                        objectNames={object[params].names}
                        objectList={object[params].list}
                        deleteObjectThunk={object.delete}
                        createObjectThunk={object.create}
                        isAddable={object.addable}
                        link={object.link}
                        params = {params}
                        paramId={id}
                    />
                 }

                

            </div>

        </div>

    )

}

const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        role: state.auth.profile.role,

        hotels: state.hotel.hotels,

        users: state.admin.users,
        error: state.admin.error,
        isFetching: state.admin.isFetching

    }

}

export default connect(mStP,
    {

        getSetUsersThunk,
        deleteUserThunk,

        getSetHotelsThunk,
        deleteHotelThunk

    })(Admin);