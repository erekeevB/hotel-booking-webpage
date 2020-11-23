import React from 'react';
import { Link } from 'react-router-dom';

import s from './Admin.module.css';
import AdminList from '../PanelList/PanelList';

const HotelAdmin = ({allObjects, id, parent}) => {

    return (

        <div className={s.admin}>

            <div className={s.admin__wrapper}>

                <div className={s.admin__header}>

                    <Link to='/admin' className={s.admin__header_link}>Admin Page</Link>

                    <Link 
                        to={'/admin/'+parent} 
                        className={s.admin__header_link}>
                            &nbsp;/ {parent}
                    </Link>

                    <Link to={'/admin/'+parent+'/'+id} 
                        className={s.admin__header_link}>
                            &nbsp;/ {id}
                    </Link>

                </div>

                <div className={s.admin__panels}>
                    <div className={s.admin__panels__users}>
                        <h3>Rooms</h3>
                        <AdminList
                            objectNames={allObjects.rooms.rooms.compactNames}
                            objectList={allObjects.rooms.rooms.list}
                            isCompact={"/admin/hotels/"+id+"/rooms"}
                        />
                    </div>
                    <div className={s.admin__panels__hotels}>
                        <h3>Room Types</h3>
                        <AdminList
                            objectNames={allObjects.roomTypes.roomTypes.compactNames}
                            objectList={allObjects.roomTypes.roomTypes.list}
                            isCompact={"/admin/hotels/"+id+"/roomTypes"}
                        />
                    </div>
                </div>

            </div>

        </div>

    )

}

export default HotelAdmin;