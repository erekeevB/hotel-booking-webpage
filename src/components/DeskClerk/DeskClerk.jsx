import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addReservationThunk, deleteReservationThunk, getSetReservationsThunk } from '../../redux/deskClerkReducer';
import PanelList from '../PanelList/PanelList';

import s from './DeskClerk.module.css'

const DeskClerk = (
    {
        profile,

        reservations,
        getSetReservationsThunk,
        addReservationThunk,
        deleteReservationThunk
    }) => {

    useEffect(()=>{

        getSetReservationsThunk()

    },[])

    return (

        <div className={s.deskclerk}>

            {profile.role !== 'DeskClerk' && <Redirect to='/' />}

                <div className={s.deskclerk__header}>

                    <Link to='/deskclerk' className={s.deskclerk__header_link}>Desk Clerk Page</Link>

                </div>
                    
                <PanelList
                    objectNames={reservations.names}
                    objectList={reservations.list}
                    isAddable={false}
                />

        </div>
    )

}

const mStP = (state) => ({

    reservations: state.deskClerk.reservations,

    profile: state.auth.profile

})



export default connect(
    mStP,
    {
        getSetReservationsThunk,
        addReservationThunk,
        deleteReservationThunk
        
    })(DeskClerk)