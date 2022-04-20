
import React, { useState } from 'react';
import CrudData from './Cruddata';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Register({students, setStudents}) {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentTeacher, setStudentTeacher] = useState('');
    
    // const {students, setStudents } = this.props;
    const handleSubmit = async (e) => {
        e.preventDefault();
        var response = await axios.post(
            'https://62136ddcf43692c9c604517b.mockapi.io/studentsdata', {
            name: name,
            class: studentClass,
            teacher: studentTeacher
        });
        console.log(response.data)
        // let studentCopy = [...students]
        // studentCopy.push(response.data)
        // setStudents(studentCopy)
        // setName('')
        // setStudentClass('')
        // setStudentTeacher('')
    }

    return (
        
        <div >
            <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
            <div className="table">
               
                <form className='teacherform' onSubmit={handleSubmit}>
                    <div>
                        <h3 className='teacher'>Register student</h3>
                        <label>Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)} /><br /><br />

                        <label>Class : </label>
                        <input
                            type="text"
                            name="class"
                            value={studentClass}
                            onChange={e => setStudentClass(e.target.value)} /><br /><br />

                        <label>Teacher : </label>
                        <input
                            type="text"
                            name="teacher"
                            value={studentTeacher}
                            onChange={e => setStudentTeacher(e.target.value)} /><br /><br />

                        <button type="submit" >Update</button><br /><br />

                    </div>
                </form>


            </div>
        </div>
    )
}