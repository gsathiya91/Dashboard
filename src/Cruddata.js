import React from 'react';
import axios from 'axios';
import './index.css'

class CrudData extends React.Component {
    constructor() {
        super();
        this.state = {
            student: []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/studentsdata'
        );
        await this.setState({ student: response.data });
        console.log(response.data);
    }
    render() {

        return (
            <>
                <div>
                    <h1 className="student">Student's Details</h1>
                </div>

                <div className="table">
                    <div>


                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Class</td>
                                    <td>Teacher</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.student.map((data) => (
                                    <tr key={data.id}>
                                        <td> {data.id} </td>
                                        <td> {data.name} </td>
                                        <td> {data.class} </td>
                                        <td> {data.teacher} </td>
                                        <td> <button>Edit</button>&nbsp;
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

export default CrudData;