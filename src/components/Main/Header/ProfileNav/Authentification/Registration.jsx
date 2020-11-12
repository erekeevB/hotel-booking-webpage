import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { CloseIcon } from '../../../../../assets/Icons';
import { registerUserThunk } from '../../../../../redux/authReducer';
import s from './Authentication.module.css';

const Registration = ({registerUserThunk, closeAuth}) => {

    return (

        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Required';
                }

                if (!values.lastName) {
                    errors.lastName = 'Required';
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
                setSubmitting(false);
                closeAuth(0, 'unset');
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.authentication__form}>
                    <div className={s.form__heading}>
                        <div className={s.form__filler}></div>
                        <div className={s.form__name}>Sign Up</div>
                        <div className={s.form__close} onClick={()=>closeAuth(0, 'unset')}><CloseIcon /></div>
                    </div>

                    <p>First Name</p>
                    <Field type="text" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                    <p>Second Name</p>
                    <Field type="text" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                    <p>E-mail</p>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <p>Phone Number</p>
                    <Field type="number" name="phoneNumber" maxLength="11" />
                    <ErrorMessage name="phoneNumber" component="div" />
                    <p>Password</p>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <div><button type="submit" disabled={isSubmitting}>
                        Sign Up
                        </button></div>
                    <div>Already have an account? <button onClick={()=>{closeAuth(1, 'hidden')}}>Sign In</button></div>
                </Form>
            )}
        </Formik>

    )

}

export default connect(null, { registerUserThunk })(Registration);