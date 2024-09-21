import React from 'react';
import '../App.css'; 

const Card = ({ title, image, description }) => {
  return (
    <div className="w-52 rounded overflow-hidden shadow-lg m-4 mb-44"> 
      <img className="w-full h-32 object-cover" src={image} alt={title} />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-4 py-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Enroll</button>
      </div>
    </div>
  );
};

const Slogan = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-5xl font-bold">Coming Soon</h1>
    </div>
  );
};

function CommingSoon() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Slogan />
      <div className="flex flex-wrap justify-center">
        <Card
          title="PHP"
          image="https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Master PHP from the basics to building dynamic, data-driven websites in our comprehensive course. Gain hands-on experience with practical projects and real-world applications, guided by expert instructors to elevate your web development skills."
        />
        <Card
          title="MongoDB"
          image="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Learn MongoDB from the ground up in our comprehensive course, covering data modeling, CRUD operations, and performance optimization. Gain practical experience with hands-on projects and real-world scenarios to become proficient in managing NoSQL databases."
        />
        <Card
          title="Flutter"
          image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Learn to build stunning, high-performance mobile applications with our Flutter course. Master the fundamentals and advanced features of Flutter, guided by expert instructors, through hands-on projects and real-world examples."
        />
        <Card
          title="Cyber Security"
          image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Gain essential skills to protect digital assets and defend against cyber threats in our comprehensive Cyber Security course. Learn practical techniques and industry-standard practices from expert instructors to safeguard networks, systems, and data."
        />
      </div>
    </div>
  );
}

export default CommingSoon;
