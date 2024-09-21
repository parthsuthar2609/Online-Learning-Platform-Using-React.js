import React, { useState } from 'react';
import "../App.css";
import "./Create.css";
import { useFormik } from "formik";
import { signupSchema } from '../schemas';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Create = () => {

  const defaultImage = 'https://via.placeholder.com/150'; 

  const [file, setFile] = useState(defaultImage);
  const [emailVerified, setEmailVerified] = useState(false);


  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      country: '',
      state: '',
      address: '',
      pinCode: '',
      company: '',
      projects: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleEmailVerification = () => {

    setEmailVerified(true);
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className='flex justify-center items-start w-full p-5 bg-gray-100 mb-56'>
      <form className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-6xl' onSubmit={handleSubmit}>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='lg:w-1/3 text-center mb-6'>
            <p className='text-gray-600  font-bold text-4xl'>Upload photo</p>
            <div className='flex justify-center items-center mt-2 relative'>
              <label className='flex items-center cursor-pointer'>
                <input type='file' className='hidden' onChange={handleFileChange} />
                <img src={file} alt="Profile" className='w-30 h-30 rounded-full object-cover border border-gray-300' />
              </label>
            </div>
            <p className='text-gray-700 text-lg mt-2'>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</p>
            <div className="mt-4">
              <button onClick={handleEmailVerification} className={`bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${emailVerified ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={emailVerified}>
                {emailVerified ? 'Email Verified' : 'Verify Email'}
              </button>
            </div>
          </div>

          <div className='lg:w-2/3 flex flex-col gap-6'>
            <div className='bg-gray-50 p-6 rounded-lg shadow'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    name='name'
                    placeholder=' '
                    autoComplete='off'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.name && errors.name ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    First Name
                  </label>
                  {touched.name && errors.name && (
                    <p className='text-sm text-red-600 mt-1'>{errors.name}</p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='lastname'
                    placeholder=' '
                    autoComplete='off'
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.lastname && errors.lastname ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Last Name
                  </label>
                  {touched.lastname && errors.lastname && (
                    <p className='text-sm text-red-600 mt-1'>{errors.lastname}</p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='email'
                    name='email'
                    placeholder=' '
                    autoComplete='off'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.email && errors.email ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Enter Your Email
                  </label>
                  {touched.email && errors.email && (
                    <p className='text-sm text-red-600 mt-1'>{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    name='country'
                    placeholder=' '
                    autoComplete='off'
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.country && errors.country ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Country
                  </label>
                  {touched.country && errors.country && (
                    <p className='text-sm text-red-600 mt-1'>{errors.country}</p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='state'
                    placeholder=' '
                    autoComplete='off'
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.state && errors.state ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    State
                  </label>
                  {touched.state && errors.state && (
                    <p className='text-sm text-red-600 mt-1'>{errors.state}</p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='address'
                    placeholder=' '
                    autoComplete='off'
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.address && errors.address ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Address
                  </label>
                  {touched.address && errors.address && (
                    <p className='text-sm text-red-600 mt-1'>{errors.address}</p>
                  )}
                </div>
              </div>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    name='pinCode'
                    placeholder=' '
                    autoComplete='off'
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.pinCode && errors.pinCode ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Pin Code
                  </label>
                  {touched.pinCode && errors.pinCode && (
                    <p className='text-sm text-red-600 mt-1'>{errors.pinCode}</p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='projects'
                    placeholder=' '
                    autoComplete='off'
                    value={values.projects}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`block w-full px-4 py-2 mt-2 border ${touched.projects && errors.projects ? 'border-red-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <label className='absolute top-0 left-4 transform -translate-y-3 scale-75 text-gray-600 duration-300 origin-[0] bg-white px-1 pointer-events-none'>
                    Projects
                  </label>
                  {touched.projects && errors.projects && (
                    <p className='text-sm text-red-600 mt-1'>{errors.projects}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='flex items-center justify-center bg-stone-800 p-3 rounded-lg shadow-lg w-full mt-5 font-medium text-white hover:bg-rose-600 transition-colors'
        >
          <CheckCircleOutlineIcon className='mr-2' />
          Create User
        </button>
      </form>
    </div>
  );
}

export default Create;
