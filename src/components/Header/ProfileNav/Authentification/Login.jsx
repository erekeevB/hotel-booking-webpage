import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { CloseIcon } from '../../../../assets/Icons';
import s from './Authentication.module.css';

const Login = ({loginUserThunk, closeAuth, error}) => {

    return (

        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Required';
                } 
                // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //     errors.email = 'Invalid email address';
                // }

                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                loginUserThunk(values)
                closeAuth(0, 'unset')
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.authentication__form}>
                    <div className={s.form__heading}>
                        <div className={s.form__filler}></div>
                        <div className={s.form__name}>Sign In</div>
                        <div className={s.form__close} onClick={()=>closeAuth(0, 'unset')}><CloseIcon /></div>
                    </div>

                    <p>Username</p>
                    <Field type="text" name="username" />
                    <ErrorMessage className={s.error} name="username" component="div" />
                    <p>Password</p>
                    <Field type="password" name="password" />
                    <ErrorMessage className={s.error} name="password" component="div" />

                    {error && <p className={s.error}>{error}</p>}

                    <div><button type="submit" disabled={isSubmitting}>
                        Sign In
                        </button></div>
                    <div>Don't have an account? <button onClick={()=>{closeAuth(2, 'hidden')}}>Sign Up</button></div>
                </Form>
            )}
        </Formik>

    )

}

export default Login;