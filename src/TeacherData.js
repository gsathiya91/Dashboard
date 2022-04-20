import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

class TeacherData extends React.Component {
    constructor() {
        super();
        this.state = {
            teacher: []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/teacherdata'
        );
        await this.setState({ teacher: response.data });
        // console.log(response.data);
        
    }
    onPopulateData = (id) => {
        var selectedData = this.state.teacher.filter((teacher) => teacher.id === id);
        console.log(selectedData)
    }
    render() {
        //  const {studentUpdate, setStudentUpdate} = this.props;
        return (
            <>
                
                <div className="table">

                    <div>

                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Class</td>
                                    <td>Subject</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teacher.map((data) => (
                                    <tr key={data.id}>
                                        <td> {data.id} </td>
                                        <td> {data.name} </td>
                                        <td> {data.class} </td>
                                        <td> {data.subject} </td>
                                        <td> <button onClick={() => this.onPopulate(data.id)}>Edit</button>&nbsp;
                                            <button>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </>
        )
    }
}

export default TeacherData;