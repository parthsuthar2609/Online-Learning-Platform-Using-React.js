import React from 'react';

const Profile = () => {
  return (

    <div className="container mx-3 mt- max-w-md mb-4">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center text-center">
          <div>
            <p className="text-2xl font-bold">1,947</p>
            <p className="text-gray-500">Follower</p>
          </div>
          <div>
            <p className="text-2xl font-bold">9,124</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="mb-4">
          Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..
        </p>
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
          <p>Live at <span className="font-bold">Andorra</span></p>
        </div>
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 8V7l-3 2v4l3 2v-1l1 .5V8.5L21 8zM3 5v14l9-7L3 5zm11 7l9 7V5l-9 7z" />
          </svg>
          <p>ashlynn_ohara62@gmail.com</p>
        </div>
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 21v-2c0-2.8 5.4-4 8-4s8 1.2 8 4v2H2zm8-16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          </svg>
          <p>Data Analyst at <span className="font-bold">Gleichner, Mueller and Tromp</span></p>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 2c.8 0 1.5.2 2.2.6C12.5 5.5 11 7.6 11 10H7.5c-.3 0-.5.1-.7.3l-.8.8C5.3 9.8 5 8.9 5 8c0-3.9 3.1-7 7-7zm-1 8c-1.1 0-2 .9-2 2s.9 2 2 2h6c0-3.3-2.7-6-6-6zm6 6c0 1.1-.9 2-2 2H9c-2.2 0-4-1.8-4-4 0-.9.3-1.8.7-2.5l1.2 1.2c.1.2.3.3.6.3h1.1c1.7 0 3.4-1.1 4.5-2.8.6.1 1.2.3 1.8.6 1.3.7 2.4 1.6 3.1 2.6C20 17.5 18.5 18 17 18z" />
          </svg>
          <p>Studied at <span className="font-bold">Nikolaus - Leuschke</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;