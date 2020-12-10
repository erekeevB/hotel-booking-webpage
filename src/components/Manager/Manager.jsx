import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addEmployeeThunk, addSeasonThunk, deleteEmployeeThunk, deleteSeasonThunk, getSetEmployeesThunk, getSetSeasonsThunk } from '../../redux/managerReducer';
import PanelList from '../PanelList/PanelList';

import s from './Manager.module.css'

const Manager = (
    {
        child,
        profile,

        employees,
        getSetEmployeesThunk,
        addEmployeeThunk,
        deleteEmployeeThunk,

        seasons,
        getSetSeasonsThunk,
        addSeasonThunk,
        deleteSeasonThunk
    }) => {

    useEffect(()=>{

        getSetEmployeesThunk()
        getSetSeasonsThunk()

    },[])

    let object = {
        employees:{
            employees,
            delete: deleteEmployeeThunk,
            create: addEmployeeThunk,
            isIdChangable: true,
            addable: true
        },
        seasons: {
            seasons: seasons,
            delete: deleteSeasonThunk,
            create: addSeasonThunk,
            addable: true
        }
    }

    return (

        <div className={s.manager}>

            {/* {profile.role !== 'Manager' && <Redirect to='/' />} */}

            <div className={s.manager__wrapper}>

                <div className={s.manager__header}>

                    <Link to='/manager' className={s.manager__header_link}>Manager Page</Link>

                    {child ? 
                        <Link 
                            to={'/manager/'+child} 
                            className={s.manager__header_link}>
                                &nbsp;/ {child}
                            </Link>
                        : null}

                </div>

                {!child ? 
                    <div className={s.manager__panels}>
                        <div className={s.manager__panels__employees}>
                            <h3>Employees</h3>
                            <PanelList
                                objectNames={employees.compactNames}
                                objectList={employees.list}
                                isCompact={"/manager/employees"}
                            />
                        </div>
                        <div className={s.manager__panels__seasons}>
                            <h3>Seasons</h3>
                            <PanelList
                                objectNames={seasons.compactNames}
                                objectList={seasons.list}
                                isCompact={"/manager/seasons"}
                            />
                        </div>
                    </div>:
                    
                    <PanelList
                        objectNames={object[child][child].names}
                        objectList={object[child][child].list}
                        deleteObjectThunk={object[child].delete}
                        createObjectThunk={object[child].create}
                        isAddable={object[child].addable}
                        params = {child}
                        isIdChangable={object[child].isIdChangable}
                    />
                }

            </div>

        </div>


    )

}

const mStP = (state) => ({

    employees: state.manager.employees,

    seasons: state.manager.seasons,

    profile: state.auth.profile

})

export default connect(
    mStP,
    {
        getSetEmployeesThunk,
        addEmployeeThunk,
        deleteEmployeeThunk,

        getSetSeasonsThunk,
        addSeasonThunk,
        deleteSeasonThunk
        
    })(Manager)