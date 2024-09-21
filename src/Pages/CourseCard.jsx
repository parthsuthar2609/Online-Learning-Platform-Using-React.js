import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course-details/${course.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 pl-24 ml-10">
      <img src={course.image} alt={course.title} className="w-50 h-16 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <button onClick={handleNavigate} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Start Watching
      </button>
    </div>
  );
}

export default CourseCard;
