import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import ForgotPass from './Components/ForgotPass';
import Form from './Components/Form';
import Dashboard from './Dcomponents/Dashboard';
import List from "./Dcomponents/List";
import Logout from "./Dcomponents/Logout";
import UserProfile from './Dcomponents/UserProfile';
import Create from './Dcomponents/Create';
import Cards from "./Dcomponents/Cards";
import Edit from './Dcomponents/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/form" element={<Form />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="category" element={<List />} />
          <Route path="cards" element={<Cards />} />
          <Route path="create" element={<Create />} />
          <Route path="edit" element={<Edit />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
