import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft, ArrowRight, People, Category, Edit, ExitToApp, ViewCarousel, KeyboardArrowDown } from '@mui/icons-material';
import "../App.css";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LinearDeterminate from '../Components/LinearDeterminate';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Star, School, Code, Language } from '@mui/icons-material/';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import UpcomingIcon from '@mui/icons-material/Upcoming';



const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);
  const [isCoursesMenuVisible, setCoursesMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const sidebarWidth = isSidebarOpen ? 280 : 100;
  const [isSidebarClose, setSidebarClose] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSlider = () => {
    setSidebarClose(!isSidebarClose);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  };

  const toggleCoursesMenu = () => {
    setCoursesMenuVisible(!isCoursesMenuVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LinearDeterminate />}
      <div className='bg-white flex items-center'>
        <div className='flex justify-center items-center'>
          <div className={`bg-slate-800 text-gray-100 p-3 full-height`} style={{ width: `${sidebarWidth}px`, height: '140vh', minWidth: "220px" }}>
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

            {/* User Section */}
            <Link to="user" onClick={toggleUserMenu} className={`d-block mb-4 text-decoration-none text-light p-3 ${isUserMenuVisible ? 'active-menu' : ''}`}>
              <AccountBoxIcon className="me-3 fs-5 text-light" />
              {isSidebarOpen && 'User'}
              <KeyboardArrowDown className='me-3'></KeyboardArrowDown>
            </Link>
            {(isSidebarOpen || isUserMenuVisible) && (
              <ul className="list-unstyled">
                <li className="mb-5 List-1 p-4">
                  <Link to="profile" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <People className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Profile'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="cards" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <ViewCarousel className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Cards'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="category" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <FeaturedPlayListIcon className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'List'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="create" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <NoteAddIcon className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Create'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="edit" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <Edit className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Edit'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="logout" className={`text-decoration-none text-light d-flex align-items-center ${isUserMenuVisible ? 'active-menu' : ''}`}>
                    <ExitToApp className="me-2 fs-5 text-light" />
                    {isSidebarOpen && 'Logout'}
                  </Link>
                </li>
              </ul>
            )}

            {/* Courses Section */}
            <div>
            <button className="btn btn-light mb-5" onClick={toggleSlider}>
              {isSidebarClose ? <ArrowLeft /> : <ArrowRight />}
            </button>
            <Link to="#" onClick={toggleCoursesMenu} className={`d-block mb-4 text-decoration-none text-light p-3 ${isCoursesMenuVisible ? 'active-menu' : ''}`}>
              <LocalLibraryIcon className="me-3 fs-5 text-light" />
              {isSidebarClose && 'Courses'}
              <KeyboardArrowDown className='me-3'></KeyboardArrowDown>
            </Link>
            {(isSidebarOpen || isCoursesMenuVisible) && (
              <ul className="list-unstyled mt-4">
                <li className="mb-5 List-1 p-4">
                  <Link to="course" className={`text-decoration-none text-light d-flex align-items-center ${isCoursesMenuVisible ? 'active-menu' : ''}`}>
                    <DensitySmallIcon className="me-2 fs-5 text-light" />
                    {isSidebarClose && 'All Courses'}
                  </Link>
                </li>
                <li className="mb-5 List-1 p-4">
                  <Link to="mycourse" className={`text-decoration-none text-light d-flex align-items-center ${isCoursesMenuVisible ? 'active-menu' : ''}`}>
                    <PersonPinIcon className="me-2 fs-5 text-light" />
                    {isSidebarClose && 'My Courses'}
                  </Link>
                </li>

                <li className="mb-5 List-1 p-4">
                  <Link to="commingsoon" className={`text-decoration-none text-light d-flex align-items-center ${isCoursesMenuVisible ? 'active-menu' : ''}`}>
                    <UpcomingIcon className="me-2 fs-5 text-light" />
                    {isSidebarClose && 'Comming Soon Courses'}
                  </Link>
                </li>

                <li className="mb-5 List-1 p-4">
                  <Link to="faq" className={`text-decoration-none text-light d-flex align-items-center ${isCoursesMenuVisible ? 'active-menu' : ''}`}>
                    <QuestionAnswerIcon className="me-2 fs-5 text-light" />
                    {isSidebarClose && 'F A QS'}
                  </Link>
                </li>

                
              </ul>
            )}
          </div>
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
