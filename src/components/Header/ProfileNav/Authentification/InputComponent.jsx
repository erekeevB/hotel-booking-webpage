import { getIn } from 'formik';
import React from 'react';
import s from './Authentication.module.css'

const InputComponent = ({field, form: {errors}, ...props}) => {

    console.log(field)

    return (

        <input 
            className={getIn(errors, field.name) ? s.form__input + ' ' + s.input_error : s.form__input} 
            {...field}
            {...props}
            />

    )

}

export default InputComponent