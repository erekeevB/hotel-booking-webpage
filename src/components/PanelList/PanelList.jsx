import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {CloseIcon} from '../../assets/Icons' 

import s from './PanelList.module.css';

const PanelList = (
    {
        objectNames,
        objectList,
        deleteObjectThunk,
        createObjectThunk,
        isCompact,
        isAddable,
        isIdLinkable,
        params,
        paramId,
        isIdChangable
    }
    ) => {
    
    let [isAdd, setIsAdd] = useState(false)

    let tempField = {}

    for(let i = 0; i < objectNames.length; i = i+1){

        if((!isIdChangable) && i !== 0){
            tempField[objectNames[i]] = ''
        }

    }

    let [field, setField] = useState(tempField)

    const handleChange = (e, name) => {
    
        setField({...field, [name]: e.target.value})

    }

    const handleSubmit = () => {

        debugger

        // if(paramId){

        //     createObjectThunk(paramId, field)

        // }else{
        
        //     createObjectThunk(field)

        // }

        createObjectThunk(field)
        

        setField(tempField)

        setIsAdd(false)

    }

    const handleDelete = (id) => {

        debugger

        if(paramId){
            deleteObjectThunk(paramId, id)
        }else{
            deleteObjectThunk(id)
        }

    }

    let tempObjectList = [];

    for(let i = 0; i < objectList.length; i = i + 1){

        if(i===5 && isCompact){
            break
        }else{
            tempObjectList.push(
                <div key={objectList[i][objectNames[0]]} className={s.objectlist__rows}>

                    {objectNames.map((name, index)=>{
                        if(isIdLinkable && index===0){
                            if(isCompact){
                                return (
                                    <div>
                                        <Link to={isCompact+'/'+objectList[i][name]}>
                                            {objectList[i][name]}
                                        </Link>
                                    </div>
                                )
                            }
                            return (
                                <div>
                                    <Link to={'/admin/'+params+'/'+objectList[i][name]}>
                                        {objectList[i][name]}
                                    </Link>
                                </div>
                            )
                        }
                        return(
                            
                            <div key={name}>{objectList[i][name]}</div>
    
                        )

                    })}

                    {(!isCompact && deleteObjectThunk) &&

                        <div className={s.objectlist__button_wrapper}>
                            <button
                                className={s.objectlist__button + ' ' + s.objectlist__button_delete}
                                onClick={() => handleDelete(objectList[i][objectNames[0]])}>
                                Delete
                            </button>
                        </div>
                    
                    }

                </div>
            )
        }

    }

    return (

        <div className={s.objectlist}>
            
            <div>
            
            <div className={s.objectlist__labels}>
                {objectNames.map((name) => {
                    return(
                        
                        <div key={name}>{name}</div>

                    )
                })}
                {!isCompact && 
                    <div className={s.objectlist__button_wrapper}> { isAddable ?
                        <div>
                            {isAdd ? 
                            <button 
                                className={s.objectlist__button+' '+s.objectlist__button_close}
                                onClick={() => {setIsAdd(false)}}>
                                    <CloseIcon />
                            </button> :
                            <button 
                                className={s.objectlist__button + ' ' + s.objectlist__button_add}
                                onClick={() => {setIsAdd(true)}}>
                                    Add
                            </button>
                            }
                            
                        </div> : <div></div>}
                    </div>
                }
            </div>

            {isAdd && 
                <div className={s.objectlist__form}>
                    {objectNames.map((name, index) => {
                        if(index===0 && !isIdChangable){
                            return <div>{name}</div>
                        }
                        return(

                            <input 
                                key={name+'b'}
                                name={name}
                                placeholder={name}
                                value={field[name]}
                                onChange={(e) => handleChange(e, name)}
                            ></input>

                        )
                    })}
                    {!isCompact && 
                        <div className={s.objectlist__button_wrapper}>
                            <button
                                className={s.objectlist__button + ' ' + s.objectlist__button_add}
                                onClick={handleSubmit}>
                                    Add
                            </button>
                        </div>}
                </div>
            }

            <div>

                {objectList.length ?
                    tempObjectList:
                    <div className={s.objectlist__empty}>Empty</div>
                }

                {isCompact && 
                    <Link className={s.objectlist__seeMore} to={isCompact}>See More</Link>
                }
            
            </div></div>

        </div>

    )

}

export default PanelList;