import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CloseIcon } from '../../../../assets/Icons';
import s from './Authentication.module.css';
import InputComponent from './InputComponent';

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
                setSubmitting(false);
                closeAuth(0, 'unset')
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.authentication__form}>
                    <div className={s.form__heading}>
                        <div className={s.form__filler}></div>
                        <div className={s.form__name}>Sign In</div>
                        <div className={s.form__close} onClick={()=>closeAuth(0, 'unset')}><CloseIcon /></div>
                    </div>

                    <div className={s.form__body}>

                        <Field placeholder='Username' type="text" name="username" component={InputComponent}/>
                        <Field placeholder='Password' type="password" name="password" component={InputComponent}/>

                        {error && <p className={s.error}>{error}</p>}

                    </div>

                    <div><button className={s.form__submit} type="submit" disabled={isSubmitting}>
                        Sign In
                        </button></div>
                    <div className={s.form__redirect}>
                        Don't have an account? <span onClick={(e)=>{
                            e.preventDefault()
                            closeAuth(2, 'hidden')
                            }}>Sign Up</span>
                    </div>
                </Form>
            )}
        </Formik>

    )

}

export default Login;