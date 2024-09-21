import React from "react";
import background1 from '../assets/backgrounds/background1.jpg';
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col ml-20 mb-44" style={{ height: '90vh' }}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex-1">
        <div
          className="bg-cover bg-center h-36 relative rounded-t-lg"
          style={{ backgroundImage: `url(${background1})` }}
        >
          <div className="absolute bottom-0 left-0 ml-4 mb-4">
            <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center overflow-hidden border-4 border-white">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Jaydon Frankie</h2>
          <p className="text-gray-600">Data Analyst Student</p>
        </div>
        <div className="border-t">
          <nav className="flex justify-around p-2">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path>
              </svg>
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 20a5.003 5.003 0 01-4.472-6.659A8.978 8.978 0 0011 13c-1.61 0-3.14.438-4.472 1.341A5.003 5.003 0 012 20h15z"></path>
                <path d="M15.538 10.533A5.502 5.502 0 0017 7.5c0-.694-.128-1.36-.36-1.974a8.06 8.06 0 01-3.8 2.363 7.055 7.055 0 011.696 2.644zm-4.227-.977a8.057 8.057 0 01-3.8-2.363A5.506 5.506 0 007 7.5c0 1.379.469 2.63 1.25 3.634a7.054 7.054 0 011.696-2.645A8.057 8.057 0 0112 6.5a8.057 8.057 0 011.311.062zm7.375 3.128a8.978 8.978 0 00-1.311-.062c-.489 0-.96.055-1.416.148a7.056 7.056 0 011.696 2.644z"></path>
              </svg>
              <span>Followers</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 
                24"
                >
                  <path d="M17 20a5.003 5.003 0 01-4.472-6.659A8.978 8.978 0 0011 13c-1.61 0-3.14.438-4.472 1.341A5.003 5.003 0 012 20h15z"></path>
                  <path d="M15.538 10.533A5.502 5.502 0 0017 7.5c0-.694-.128-1.36-.36-1.974a8.06 8.06 0 01-3.8 2.363 7.055 7.055 0 011.696 2.644zm-4.227-.977a8.057 8.057 0 01-3.8-2.363A5.506 5.506 0 007 7.5c0 1.379.469 2.63 1.25 3.634a7.054 7.054 0 011.696-2.645A8.057 8.057 0 0112 6.5a8.057 8.057 0 011.311.062zm7.375 3.128a8.978 8.978 0 00-1.311-.062c-.489 0-.96.055-1.416.148a7.056 7.056 0 011.696 2.644 5.504 5.504 0 00-.969 2.659h2.876a5.003 5.003 0 00-1.876-5.39z"></path>
                </svg>
                <span>Friends</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-2.39 0-4.48 1.02-5.939 2.601C3.29 18.341 2 20.17 2 22v2h20v-2c0-1.83-1.29-3.659-4.061-5.399C16.48 15.02 14.39 14 12 14z"></path>
                </svg>
                <span>Gallery</span>
              </a>
            </nav>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <Profile />
              </div>
              <div className="flex-1">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  };
  
  export default UserProfile;
  