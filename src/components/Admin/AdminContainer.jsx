import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import { connect } from 'react-redux';
import { deleteUserThunk, getSetUsersThunk } from '../../redux/adminReducer';
import { 
    addHotelThunk,
    addRoomThunk,
    deleteHotelThunk,
    deleteRoomThunk,
    getSetHotelsThunk,
    getSetRoomsThunk 
} from '../../redux/hotelReducer';

const AdminContainer = ({
        match,
        isAuth, role,
        error,
        isFetching,
        users, getSetUsersThunk, deleteUserThunk,
        hotels, getSetHotelsThunk, deleteHotelThunk, addHotelThunk,
        rooms, getSetRoomsThunk, deleteRoomThunk, addRoomThunk
        }) => {

    const objectMap = {
        users: {
            users,
            delete: deleteUserThunk
        },
        hotels: {
            hotels,
            delete: deleteHotelThunk,
            create: addHotelThunk,
            addable: true,
            link: 'rooms',
        },
        rooms: {
            rooms,
            delete: deleteRoomThunk,
            create: addRoomThunk,
            addable: true
        }
    }

    useEffect(()=>{

        getSetUsersThunk()
        getSetHotelsThunk()
        // console.log(users)
        // console.log(objectMap[params.object])
        // console.log(params.object)

    }, [])

    useEffect(()=>{

        getSetRoomsThunk(match.id)

    }, [match.id])

    return (

        <div>

        {!(isAuth && role==='Admin') && <Redirect to='/' />}

        <Switch>

            <Route exact path='/admin' render={() => <Admin allObjects={objectMap}/>} />

            <Route 
                path='/admin/:parent/:id/:child' 
                render={(match) => <Admin 
                        params={match.match.params.child}
                        child={match.match.params.child}
                        id={match.match.params.id}
                        parent={match.match.params.parent}
                        object={objectMap[match.match.params.child]}
                        getSetRoomsThunk={getSetRoomsThunk}
                    />
                } 
            />

            <Route 
                path='/admin/:object' 
                render={(match) => <Admin 
                    params={match.match.params.object}
                    parent={match.match.params.object}
                    object={objectMap[match.match.params.object]}
                />} 
            />

        </Switch>

        </div>
        

    )

}



const mStP = (state) => {

    return {

        isAuth: state.auth.isAuth,
        role: state.auth.profile.role,

        hotels: state.hotel.hotels,

        rooms: state.hotel.rooms,

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
        deleteHotelThunk,
        addHotelThunk,

        getSetRoomsThunk,
        deleteRoomThunk,
        addRoomThunk


    })(AdminContainer);