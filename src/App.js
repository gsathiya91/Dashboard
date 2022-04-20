import React from 'react';
import './index.css';
import CrudData from './Cruddata';
import TeacherData from './TeacherData';
import Register from './Register';
import { Button } from '@mui/material';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import RegisterTeacher from './RegisterTeacher';

export default function App() {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/teachersdata" element={<TeachersData />}></Route>
          <Route path="/registerteacher" element={<TeacherRegisterForm />}></Route>
          <Route path="/studentsdata" element={<StudentsData />}></Route>
          <Route path="/registerstudent" element={<RegisterForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="admin">
      <div>
        <h1>Admin Login Page</h1>
      </div>
      <div>
        <Button variant="contained" component={Link} to="/teachersdata">Teacher's Details</Button> &nbsp;
        <Button variant="contained" component={Link} to="/registerteacher">Register Teacher</Button> &nbsp;
        <Button variant="contained" component={Link} to="/studentsdata">Student's Details</Button> &nbsp;
        <Button variant="contained" component={Link} to="/registerstudent">Register Student</Button> &nbsp;
      </div>
    </div>
  )
}

function TeachersData() {
  const navigate = useNavigate();
  return (
    <>
      <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
      <h1 className='teacher'>Teacher's Details</h1>
      <TeacherData />
    </>
  )
}

function StudentsData() {
  const navigate = useNavigate();
  return (
    <>
      <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;

      <CrudData />

    </>
  )
}

function RegisterForm() {
  return (
    <div className="register">
      <Register />
    </div>
  )
}

function TeacherRegisterForm() {
  return (
    <div className="register">
      <RegisterTeacher />
    </div>
  )
}