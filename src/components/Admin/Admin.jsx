import React from 'react';
import { Link } from 'react-router-dom';

import s from './Admin.module.css';
import AdminList from '../PanelList/PanelList';

const Admin = ({ object, params, allObjects, id, parent, child}) => {

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

                    {id ? 
                        <Link to={'/admin/'+parent+'/'+id} 
                            className={s.admin__header_link}>
                                &nbsp;/ {id}
                        </Link> : null}

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
                                isIdLinkable={allObjects.hotels.isIdLinkable}
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
                        isIdLinkable={object.isIdLinkable}
                        params = {params}
                        paramId={id}
                        isIdChangable={object.isIdChangable}
                        parentId={object.parentId}
                    />
                 }

                

            </div>

        </div>

    )

}

export default Admin;