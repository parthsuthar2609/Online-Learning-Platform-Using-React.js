import React from 'react';
import '../App.css';
import { useFormik } from "formik";
import { signupSchema } from '../schemas';
import LinearDeterminate from '../Components/LinearDeterminate';

const initialValues = {
    email: "",
};

const ForgotPass = () => {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        handleChange
    } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <>
        <LinearDeterminate></LinearDeterminate>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='bg-white p-10 rounded-lg shadow-lg'>
                    <div className='flex justify-center mb-4'>
                        <img src='./src/assets/ForgotPassword.jpg' alt='Forgot Password' className="w-63" />
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                        <div className='text-center mb-4'>
                            <h1 className='text-2xl font-bold mb-2'>Forgot your password?</h1>
                            <h2 className='text-gray-600'>Please enter the email address associated with your account and we will email you a link to reset your password.</h2>
                        </div>
                        <div className='w-full'>
                            <input
                                type='email'
                                name='email'
                                className={`mt-5 block w-full p-3 border rounded-md shadow-sm ${
                                    touched.email && errors.email ? 'border-red-600' : 'border-gray-300'
                                }`}
                                placeholder='Enter Email Address:'
                                autoComplete='off'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && (
                                <p className='text-lg text-red-600'>{errors.email}</p>
                            )}
                        </div>
                        <button
                            type='submit'
                            className='bg-stone-800 p-3 rounded md:rounded-lg shadow-md w-full mt-5 font-medium text-slate-100'
                        >
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ForgotPass;
