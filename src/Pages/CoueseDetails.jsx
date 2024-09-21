import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './Course';
import '../index.css';

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition duration-200">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div className="flex items-start md:items-center">
              <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded-full mb-4 md:mb-0 md:mr-4" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <p className="text-gray-700 mb-2"><span role="img" aria-label="globe">🌐</span> Taught in English | 22 languages available | Some content may not be translated</p>
                <p className="text-gray-700 mb-4">
                  <span role="img" aria-label="instructor">👨‍🏫</span> Instructor: Charles Russell Severance
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Go To Course</button>
                <p className="text-gray-500 mt-4">Sponsored by CVM University</p>
                <p className="text-gray-700 mt-2">219,867 already enrolled</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4 md:mt-0 md:ml-4 w-full md:w-auto hover:bg-gray-200 transition duration-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Course</h2>
              <p className="text-gray-700 mb-2">Gain insight into a topic and learn the fundamentals</p>
              <p className="text-gray-700 mb-2"><span role="img" aria-label="star">⭐</span> 4.8 (5,310 reviews) | <span role="img" aria-label="thumbs up">👍</span> 96%</p>
              <p className="text-gray-700 mb-2">Intermediate level</p>
              <p className="text-gray-700 mb-2">15 hours (approximately)</p>
              <p className="text-gray-700 mb-2">Flexible schedule</p>
              <a href="#course-modules" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-200">View course modules</a>
            </div>
          </div>
        </div>

        {/* Course Modules Section */}
        <div id="course-modules">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">There are 4 modules in this course</h1>
          <p className="mb-8 text-gray-700">{course.details}</p>
          <div className="bg-white shadow rounded">
            {course.modules?.map((module, index) => (
              <Module key={index} {...module} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
