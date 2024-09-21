import React from 'react';
import '../App.css';
import { useFormik } from "formik";
import { signupSchema } from '../schemas';
import { Link, useNavigate } from "react-router-dom";
import LinearDeterminate from './LinearDeterminate';

const initialValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: async (values , event) => {
            console.log(values);
            navigate("/dashboard")
            event.preventDefault();
            try {
              const res = await fetch(
                "https://online-learning-platefor-8aefc-default-rtdb.firebaseio.com/Login.json",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
              );
          
              if (res.ok) {
                console.log("Data stored successfully!");
                alert("Data Stored");
              } else {
                console.error("Failed to store data:", res.status, res.statusText);
                alert("Failed to store data");
              }
            } catch (error) {
              console.error("Error storing data:", error);
              alert("An error occurred while storing data");
            }
          }
    });

    return (
        <>
        <LinearDeterminate></LinearDeterminate>
        <div className='main-form'>
            <div className="flex items-center gap-2.5 font-medium mx-2">
                <img
                    src="https://img.icons8.com/color/512/firebase.png"
                    width={50}
                    alt=""
                />
                <span className="text-2xl whitespace-pre ">Fireball</span>
                <p className='main-font mt-5'>Hi, Welcome back</p>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
                <img src='./src/assets/SideImage.jpg' alt='Side view'></img>
                <form className='form-data' onSubmit={formik.handleSubmit}>
                    <div className='data'>
                        <h1 className='sign'>Sign In to Learn</h1>
                        <h2 className='create'>New user?<Link to="/form"><span className='new-user'>Create an account</span></Link></h2>
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            className={`mt-2 block w-full p-3 border rounded-md shadow-sm ${
                                formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='Enter Your Email'
                            autoComplete='off'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className='text-lg text-red-600'>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            className={`mt-5 block p-3 border rounded-md shadow-sm w-96 ${
                                formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-300'
                            }`}
                            placeholder='Enter Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className='text-lg text-red-600'>{formik.errors.password}</p>
                        )}
                    </div>
                    <h2 className='forgot'><Link to="/forgot"><span className='forgot'>Forgot Password ?</span></Link></h2>
                    <button
                        type='submit'
                        className='bg-stone-800 p-3 rounded md:rounded-lg shadow-md w-full mt-5 font-medium text-slate-100'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default LoginForm;
