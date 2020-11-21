import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CloseIcon } from '../../../../assets/Icons';
import s from './Authentication.module.css';
import InputComponent from './InputComponent';

const Registration = ({registerUserThunk, closeAuth, error}) => {

    return (

        <Formik
            initialValues={{ username: '', email: '', phoneNumber: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Required';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.phoneNumber) {
                    errors.phoneNumber = 'Required';
                }

                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                registerUserThunk(values)
                setSubmitting(false)
                
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.authentication__form}>
                    <div className={s.form__heading}>
                        <div className={s.form__filler}></div>
                        <div className={s.form__name}>Sign Up</div>
                        <div className={s.form__close} onClick={()=>closeAuth(0, 'unset')}><CloseIcon /></div>
                    </div>

                    <div className={s.form__body}>

                        <Field type="text" name="username" placeholder='Username' component={InputComponent}/>
                        <Field type="email" name="email" placeholder='Email' component={InputComponent}/>
                        <Field type="number" name="phoneNumber" maxLength="11" 
                            placeholder='Phone Number' component={InputComponent}/>
                        <Field type="password" name="password" placeholder='Password' component={InputComponent}/>

                        {error && <p className={s.error}>{error}</p>}

                    </div>

                    <div><button className={s.form__submit} type="submit" disabled={isSubmitting}>
                        Sign Up
                        </button></div>
                    <div className={s.form__redirect}>
                        Already have an account? <span onClick={(e)=>{
                            e.preventDefault()
                            closeAuth(1, 'hidden')
                            }}>Sign In</span>
                    </div>
                </Form>
            )}
        </Formik>

    )

}

export default Registration;