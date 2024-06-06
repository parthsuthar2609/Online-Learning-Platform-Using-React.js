import React, { useState } from 'react';

const initialPeople = [
  {
    id: 1,
    profileImage: 'https://via.placeholder.com/50',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    category: 'It',
  },
  {
    id: 2,
    profileImage: 'https://via.placeholder.com/50',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '098-765-4321',
    category: 'Hr',
  },
  {
    id: 2,
    profileImage: 'https://via.placeholder.com/50',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '098-765-4321',
    category: 'Software Developer',
  },
  {
    id: 2,
    profileImage: 'https://via.placeholder.com/50',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '098-765-4321',
    category: 'TECH',
  },
];

const List = () => {
  const [people, setPeople] = useState(initialPeople);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  const filteredPeople = people.filter(person =>
    `${person.firstName} ${person.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    person.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.phone.includes(searchQuery) ||
    person.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">People List</h1>
      
      <input
        type="text"
        className="w-full mb-6 p-3 border border-gray-300 rounded-lg"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="sticky top-0 px-6 py-3 text-left">Profile Image</th>
              <th className="sticky top-0 px-6 py-3 text-left">First Name</th>
              <th className="sticky top-0 px-6 py-3 text-left">Last Name</th>
              <th className="sticky top-0 px-6 py-3 text-left">Email</th>
              <th className="sticky top-0 px-6 py-3 text-left">Phone</th>
              <th className="sticky top-0 px-6 py-3 text-left">Category</th>
              <th className="sticky top-0 px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {filteredPeople.map((person) => (
              <tr key={person.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-4">
                  <img
                    src={person.profileImage}
                    alt={`${person.firstName} ${person.lastName}`}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="px-6 py-4">{person.firstName}</td>
                <td className="px-6 py-4">{person.lastName}</td>
                <td className="px-6 py-4">{person.email}</td>
                <td className="px-6 py-4">{person.phone}</td>
                <td className="px-6 py-4">{person.category}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(person.id)}
                    className="text-red-600 font-bold hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPeople.length === 0 && (
          <div className="p-6 text-center text-gray-600">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
