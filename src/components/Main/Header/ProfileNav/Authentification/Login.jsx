import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { CloseIcon } from '../../../../../assets/Icons';
import { loginUserThunk } from '../../../../../redux/authReducer';
import s from './Authentication.module.css';

const Login = ({loginUserThunk, closeAuth}) => {

    

    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                loginUserThunk(values)
                setSubmitting(false);
                closeAuth(0, 'unset');
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.authentication__form}>
                    <div className={s.form__heading}>
                        <div className={s.form__filler}></div>
                        <div className={s.form__name}>Sign In</div>
                        <div className={s.form__close} onClick={()=>closeAuth(0, 'unset')}><CloseIcon /></div>
                    </div>

                    <p>E-mail</p>
                    <Field type="email" name="email" />
                    <ErrorMessage className={s.error} name="email" component="div" />
                    <p>Password</p>
                    <Field type="password" name="password" />
                    <ErrorMessage className={s.error} name="password" component="div" />
                    <div><button type="submit" disabled={isSubmitting}>
                        Sign In
                        </button></div>
                    <div>Don't have an account? <button onClick={()=>{closeAuth(2, 'hidden')}}>Sign Up</button></div>
                </Form>
            )}
        </Formik>

    )

}

export default connect(null, { loginUserThunk })(Login);