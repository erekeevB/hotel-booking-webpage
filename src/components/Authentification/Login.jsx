import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CloseIcon } from '../../assets/Icons';
import { loginUserThunk } from '../../redux/authReducer';
import s from './Authentication.module.css';

const Login = (props) => {

    let history = useHistory();

    let closeForm = () => {

        history.push('/')

    }
    
    return (

        <div className={s.authentication}>

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if(!values.email) {
                        errors.email = 'Required';
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if(!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    debugger
                    props.loginUserThunk(values)
                    setSubmitting(false);
                    closeForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={s.authentication__form}>
                        <div className={s.form__heading}>
                            <div className={s.form__filler}></div>
                            <div className={s.form__name}>Sign in</div>
                            <div className={s.form__close} onClick={closeForm}><CloseIcon /></div>
                        </div>

                        <p>E-mail</p>
                        <Field type="email" name="email"/>
                        <ErrorMessage className={s.error} name="email" component="div" />
                        <p>Password</p>
                        <Field type="password" name="password" />
                        <ErrorMessage className={s.error} name="password" component="div" />
                        <div><button type="submit" disabled={isSubmitting}>
                            Login
                        </button></div>
                    </Form>
                )}
            </Formik>

        </div>

    )

}

export default connect(null, {loginUserThunk})(Login);