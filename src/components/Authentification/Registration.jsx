import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from './Authentication.module.css';

const Registration = () => {

    return (

        <div className={s.authentication}>

            <Formik
                initialValues={{ username: '', email: '', city: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    }

                    if(!values.email) {
                        errors.email = 'Required';
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if(!values.city) {
                        errors.city = 'Required';
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
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" />
                        <p>E-mail</p>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <p>City</p>
                        <Field type="text" name="city" />
                        <ErrorMessage name="city" component="div" />
                        <p>Password</p>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <div><button type="submit" disabled={isSubmitting}>
                            Registration
                        </button></div>
                    </Form>
                )}
            </Formik>

        </div>

    )

}

export default Registration;