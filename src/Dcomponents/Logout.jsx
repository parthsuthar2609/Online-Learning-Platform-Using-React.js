import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session (e.g., remove token from local storage)
        localStorage.removeItem('token');

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-600 w-96">
            <button 
                className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
