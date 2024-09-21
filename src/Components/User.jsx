import React from 'react';
import { Star, School, Code, Language } from '@mui/icons-material/';

const User = () => {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-6 rounded-lg shadow-lg ml-36 mb-44'>
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-6 rounded-lg shadow-lg h-96 w-auto">
      <h1 className="text-4xl font-bold text-white mb-4 ">Welcome to our Learning Platform!</h1>
      <p className="text-lg text-white mb-8">Unlock your potential with our wide range of courses.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center text-white bg-white bg-opacity-10 rounded-lg py-4 px-6 shadow-md">
          <Star className="text-yellow-400 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Top-notch Instructors</h2>
            <p className='text-green-600'>Learn from industry experts.</p>
          </div>
        </div>
        <div className="flex items-center text-white bg-white bg-opacity-10 rounded-lg py-4 px-6 shadow-md">
          <School className="text-blue-400 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-400">Diverse Courses</h2>
            <p className='text-yellow-400'>Explore a wide variety of subjects.</p>
          </div>
        </div>
        <div className="flex items-center text-white bg-white bg-opacity-10 rounded-lg py-4 px-6 shadow-md">
          <Code className="text-green-400 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-400">Hands-on Learning</h2>
            <p className='text-blue-400'>Get practical experience.</p>
          </div>
        </div>
        <div className="flex items-center text-white bg-white bg-opacity-10 rounded-lg py-4 px-6 shadow-md">
          <Language className="text-purple-400 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-400 ">Global Community</h2>
            <p className='text-pink-400 '>Connect with learners worldwide.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default User;
