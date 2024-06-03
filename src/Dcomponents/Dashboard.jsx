import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft, ArrowRight, People, Category, Edit, ExitToApp, ViewQuilt, ViewCarousel, KeyboardArrowDown } from '@mui/icons-material';
import "../App.css";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LinearDeterminate from '../Components/LinearDeterminate';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const sidebarWidth = isSidebarOpen ? 250 : 80; 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    // Simulate a loading effect
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LinearDeterminate />} {/* Conditional rendering of the loader */}
      <div className='bg-white flex items-center'>
        <div className='flex justify-center items-center'>
          <div className={`bg-slate-800 text-gray-100 p-3 full-height`} style={{ width: `${sidebarWidth}px`, height: '100vh', minWidth: "180px" }}>
            <div className="flex items-center gap-2.5 font-medium py-2 mx-2">
              <img
                src="https://img.icons8.com/color/512/firebase.png"
                width={50}
                alt=""
              />
              <span className="text-2xl whitespace-pre text-light">Fireball</span>
            </div>
            <button className="btn btn-light mb-5" onClick={toggleSidebar}>
              {isSidebarOpen ? <ArrowLeft /> : <ArrowRight />}
            </button>
            <Link to="#" onClick={toggleMenu} className={`d-block mb-4 text-decoration-none text-light p-3 ${isMenuVisible ? 'active-menu' : ''}`}>
              <AccountBoxIcon className="me-3 fs-5 text-light" />
              {isSidebarOpen && 'User'}
              <KeyboardArrowDown className='me-3'></KeyboardArrowDown>
            </Link>
            {(isSidebarOpen || isMenuVisible) && (
              <ul className="list-unstyled">
                <li className="mb-5 List-1 p-4">
                  <Link to="profile" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <People className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Profile'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="cards" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <ViewCarousel className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Cards'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="category" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <FeaturedPlayListIcon  className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'List'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="create" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <NoteAddIcon className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Create'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="edit" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <Edit className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Edit'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="logout" className={`text-decoration-none text-light d-flex align-items-center ${isMenuVisible ? 'active-menu' : ''}`}>
                    <ExitToApp className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Logout'}
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
