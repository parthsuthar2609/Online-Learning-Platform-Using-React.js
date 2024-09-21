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
import Course from './Pages/Course';
import CourseDetails from './Pages/CoueseDetails';
import User from './Components/User';
import Faq from './Pages/Faq';
import MyCourse from './Pages/MyCourse';
import CommingSoon from './Pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/form" element={<Form />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path='user' element={<User></User>}/>
          <Route path="profile" element={<UserProfile />} />
          <Route path="category" element={<List />} />
          <Route path="cards" element={<Cards />} />
          <Route path="create" element={<Create />} />
          <Route path="edit" element={<Edit />} />
          <Route path="logout" element={<Logout />} />
          <Route path="course" element={<Course />} />
          <Route path="course/course-details/:id" element={<CourseDetails />} />
          <Route path="faq" element={<Faq />} />
          <Route path="mycourse" element={<MyCourse />} />
          <Route path="commingsoon" element={<CommingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
