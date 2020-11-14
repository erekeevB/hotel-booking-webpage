import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { CloseIcon } from '../../../../assets/Icons';
import s from './Authentication.module.css';

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
                closeAuth(0, 'unset')
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

                    <p>Username</p>
                    <Field type="text" name="username" />
                    <ErrorMessage className={s.error} name="username" component="div" />
                    <p>E-mail</p>
                    <Field type="email" name="email" />
                    <ErrorMessage className={s.error} name="email" component="div" />
                    <p>Phone Number</p>
                    <Field type="number" name="phoneNumber" maxLength="11" />
                    <ErrorMessage className={s.error} name="phoneNumber" component="div" />
                    <p>Password</p>
                    <Field type="password" name="password" />
                    <ErrorMessage className={s.error} name="password" component="div" />

                    {error && <p className={s.error}>{error}</p>}

                    <div><button type="submit" disabled={isSubmitting}>
                        Sign Up
                        </button></div>
                    <div>Already have an account? <button onClick={()=>{closeAuth(1, 'hidden')}}>Sign In</button></div>
                </Form>
            )}
        </Formik>

    )

}

export default Registration;