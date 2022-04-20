import React, { useState } from 'react';
import TeacherData from './TeacherData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function RegisterTeacher() {
    const navigate = useNavigate();

    const [teacherName, setTeacherName] = useState('')
    const [studentClass, setStudentClass] = useState('');
    const [studentSubject, setSubject] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var response = await axios.post(
            'https://62136ddcf43692c9c604517b.mockapi.io/teacherdata', {
            name: teacherName,
            class: studentClass,
            subject: studentSubject
        });
        console.log(response.data)
        // let studentCopy = [...studentUpdate]
        // console.log(studentCopy)
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
                        <h3 className='teacher'>Register teacher</h3>
                        <label>Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={teacherName}
                            onChange={e => setTeacherName(e.target.value)} /><br /><br />

                        <label>Class : </label>
                        <input
                            type="text"
                            name="class"
                            value={studentClass}
                            onChange={e => setStudentClass(e.target.value)} /><br /><br />

                        <label>Subject : </label>
                        <input
                            type="text"
                            name="name"
                            value={studentSubject}
                            onChange={e => setSubject(e.target.value)} /><br /><br />

                        <button type="submit" >Update</button><br /><br />

                    </div>
                </form>


            </div>
        </div>
    )
}