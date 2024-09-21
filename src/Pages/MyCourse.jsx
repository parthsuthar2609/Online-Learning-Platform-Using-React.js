import React, { useState } from 'react';
import React1 from "../assets/React1.png";
import Node from "../assets/Node.png";
import Js from "../assets/Js.png";

const courses = [
  {
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    description: 'Master React from the ground up, with Hooks, React Router, Redux, and more!',
    image: React1, 
    videoUrl: 'https://www.youtube.com/embed/-mJFZp84TIY',
  },
  {
    title: 'JavaScript: The Complete JavaScript Course 2023',
    description: 'Master JavaScript with the most complete course available in 2023!',
    image: Js,
    videoUrl: 'https://www.youtube.com/embed/ajdRvxDWH4w',
  },
  {
    title: 'Node.js - The Complete Guide (incl MVC, REST APIs, Project)',
    description: 'Master Node.js with a comprehensive guide, covering MVC, REST APIs, and more!',
    image: Node, 
    videoUrl: 'https://www.youtube.com/embed/ZLxOUw2ougo',
  },
];

const CourseCard = ({ course, onLearnMore }) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-md mb-72 ml-16">
      <img className="w-50 h-32 object-cover" src={course.image} alt={course.title} />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <button
          onClick={() => onLearnMore(course.videoUrl)}
          className="inline-block px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const Modal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4">
        <button className="mb-2 text-right" onClick={onClose}>Close</button>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    </div>
  );
};

const MyCourse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLearnMore = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideoUrl('');
  };

  return (
    <div>
      <div className="flex justify-center my-4 mb-8">
        <input
          type="text"
          className="px-4 py-2 border rounded-l-lg w-96"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg" onClick={() => setSearchQuery('')}>
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.title} course={course} onLearnMore={handleLearnMore} />
        ))}
      </div>
      {selectedVideoUrl && <Modal videoUrl={selectedVideoUrl} onClose={closeModal} />}
    </div>
  );
};

export default MyCourse;
