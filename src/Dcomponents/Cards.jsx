import React from 'react';
import avatar1 from '../assets/avatars/avatar1.jpg';
import avatar2 from '../assets/avatars/avatar2.jpg';
import avatar3 from '../assets/avatars/avatar3.jpg';
import background1 from '../assets/backgrounds/background1.jpg';
import background2 from '../assets/backgrounds/background2.jpg';
import background3 from '../assets/backgrounds/background3.jpg';

const users = [
  {
    name: 'Jayvion Simon',
    position: 'HR Manager',
    avatar: avatar1,
    backgroundImage: background1,
    follower: 9.91,
    following: 1.95,
    totalPost: 9.12,
  },
  {
    name: 'Lucian Obrien',
    position: 'Data Analyst',
    avatar: avatar2,
    backgroundImage: background2,
    follower: 1.95,
    following: 9.12,
    totalPost: 6.98,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  {
    name: 'Deja Brady',
    position: 'Legal Counsel',
    avatar: avatar3,
    backgroundImage: background3,
    follower: 9.12,
    following: 6.98,
    totalPost: 8.49,
  },
  
];

const UserCard = ({ user }) => {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-lg ">
       <img src={user.backgroundImage} alt="background" className="w-50 h-32 rounded-lg mt-2" />
      <img src={user.avatar} alt={user.name} className="rounded-full w-16 h-16 ml-16 mb-1" />
      <h2 className="mt-2 text-lg font-semibold text-center">{user.name}</h2>
      <p className="text-gray-600">{user.position}</p>
      <p className="text-gray-600">Followers: {user.follower}K</p>
      <p className="text-gray-600">Following: {user.following}K</p>
      <p className="text-gray-600">Posts: {user.totalPost}K</p>
     
    </div>
  );
};

const Cards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-start p-8">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Cards;
