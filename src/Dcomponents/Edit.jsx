import React, { useState } from 'react';
import "../App.css";
import "./Create.css";
import { useFormik } from "formik";
import { signupSchema } from '../schemas';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Edit = () => {
  const [file, setFile] = useState(null);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className='flex justify-center items-center  w-full p-5 bg-gray-100 ml-48 flex-row'>
      <form className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl' onSubmit={handleSubmit}>
        <div className='mb-6 text-center'>
          <p className='text-gray-600'>Upload photo</p>
          <div className='flex justify-center items-center mt-2 relative'>
            <label className='flex items-center cursor-pointer'>
              <PhotoCamera className='mr-4 text-5xl text-stone-800' />
              <input type='file' className='hidden' onChange={handleFileChange} />
            </label>
            {file && <img src={file} alt="Profile" className='w-20 h-20 rounded-full object-cover absolute right-0' />}
          </div>
          <p className='text-gray-700 text-sm mt-2'>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='relative'>
            <input
              type='text'
              name='name'
              placeholder='Parth'
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
              placeholder='Suthar '
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
              placeholder=' Parthsuthar589@gmail.com'
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

          <div className='relative'>
            <input
              type='text'
              name='country'
              placeholder='India'
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
              placeholder='Gujarat'
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
              placeholder='Thasra'
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

          <div className='relative'>
            <input
              type='text'
              name='pinCode'
              placeholder='388250'
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
              placeholder='Web Site'
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
        <button
          type='submit'
          className='flex items-center justify-center bg-stone-800 p-3 rounded-lg shadow-lg w-full mt-5 font-medium text-white hover:bg-blue-600 transition-colors'
        >
          <CheckCircleOutlineIcon className='mr-2' />
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Edit;
