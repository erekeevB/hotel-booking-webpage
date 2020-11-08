import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from './Authentication.module.css';

const Login = () => {

    return (

        <div className={s.authentication}>

            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    }

                    if(!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <p>Username</p>
                        <Field type="username" name="username"/>
                        <ErrorMessage name="username" component="div" />
                        <p>Password</p>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <div><button type="submit" disabled={isSubmitting}>
                            Login
                        </button></div>
                    </Form>
                )}
            </Formik>

        </div>

    )

}

export default Login;