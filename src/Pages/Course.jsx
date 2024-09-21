import React from 'react';
import '../index.css';
import CourseCard from './CourseCard';
import Node from "../assets/Node.png";
import Express from "../assets/Express.png";
import Js from "../assets/Js.png";
import Vite from "../assets/Vite.jpeg";
import MySql from "../assets/MySql.png";
import PHP from "../assets/PHP.png";
import React1 from "../assets/React1.png";


export const courses = [
  {
    id: 1,
    title: 'Ultimate JavaScript Course',
    description: 'This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy',
    image: Js,
    details: 'Detailed description for the JavaScript course.',
  },
  {
    id: 2,
    title: 'Sql Tutorials in Hindi',
    description: 'SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. SQL is essential for tasks such as querying data, updating records, creating and modifying database schemas, and controlling access to the data',
    image: MySql,
    details: 'Detailed description for the Sanity.io course.',
  },
  {
    id: 3,
    title: 'React Js Tutorials For Beginners',
    description: 'React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!',
    image: React1,
    details: 'Detailed description for the React course.',
  },
  {
    id: 3,
    title: 'Node Js Tutorials For Beginners',
    description: 'Node.js is a popular, open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is designed for building scalable network applications and allows developers to use JavaScript for server-side scripting.',
    image: Node,
    details: 'Detailed description for the React course.',
  },
  {
    id: 3,
    title: 'Express Js Tutorials',
    description: 'Express.js is a fast, unopinionated, minimalist web framework for Node.js. It is designed to build web applications and APIs quickly and easily.',
    image: Express,
    details: 'Detailed description for the React course.',
  },
  {
    id: 3,
    title: 'Vite Js Tutorials For Beginners',
    description: 'Vite.js is a modern front-end build tool that provides a fast and optimized development experience. It focuses on speed and performance, leveraging native ES modules and modern browser features. ',
    image: Vite,
    details: 'Detailed description for the React course.',
  },
  
];

function Course() {
  return (
    <div className=" bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">Premium Courses</h1>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Course;
