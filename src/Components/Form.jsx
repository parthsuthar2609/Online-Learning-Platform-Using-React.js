import React from 'react';
import '../App.css';
import { useFormik } from "formik";
import { signupSchema } from '../schemas';
import { Link } from 'react-router-dom';
import LinearDeterminate from '../Components/LinearDeterminate';

const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
};

const Form = () => {
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
        <div className='main-form'>
              <div className="flex items-center gap-2.5 font-medium mx-5">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={50}
            alt=""
          />
          <span className="text-2xl whitespace-pre">Fireball</span>
        
            <p className='main-font mt-5'>Hi, Please Sign Up</p>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
                <img src='./src/assets/SideImage.jpg' alt='Side view' className='mb-8'/>
                <form className='form-data' onSubmit={handleSubmit}>
                    <div className='data'>
                        <h1 className='sign'>Get started absolutely free</h1>
                        <h2 className='create'>Already have an account? <Link to="/login"><span className='new-user'>Sign in</span></Link></h2>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='name'
                            className={`mt-5 block w-96 p-3 border rounded-md shadow-sm ${
                                touched.name && errors.name ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='First Name'
                            autoComplete='off'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && errors.name && (
                            <p className='text-lg text-red-600'>{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type='text'
                            name='lastname'
                            className={`mt-5 block w-96 p-3 border rounded-md shadow-sm ${
                                touched.lastname && errors.lastname ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='Last Name'
                            autoComplete='off'
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.lastname && errors.lastname && (
                            <p className='text-lg text-red-600'>{errors.lastname}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type='email'
                            name='email'
                            className={`mt-5 block w-full p-3 border rounded-md shadow-sm ${
                                touched.email && errors.email ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='Enter Your Email'
                            autoComplete='off'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ width: '24rem' }} // inline style for width
                        />
                        {touched.email && errors.email && (
                            <p className='text-lg text-red-600'>{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            className={`mt-5 block p-3 border rounded-md shadow-sm ${
                                touched.password && errors.password ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='Enter Password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ width: '24rem' }} // inline style for width
                        />
                        {touched.password && errors.password && (
                            <p className='text-lg text-red-600'>{errors.password}</p>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='bg-stone-800 p-3 rounded md:rounded-lg shadow-md w-96 mt-5 font-medium text-slate-100'
                    >
                        Create User
                    </button>
                </form>
            </div>
        </div>
    </>
    );
}

export default Form;
