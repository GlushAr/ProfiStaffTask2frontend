import React, {useEffect, useState} from 'react';
import {getAllStudents} from '../api/studentApi';

const All = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getAllStudents().then(students => setStudents(students));
    }, [])
    console.log(students)
    return (
        <div>
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>patronymic</th>
                    <th>birthDate</th>
                    <th>group</th>
                </tr>
                
                {students.map(student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        <td>{student.patronymic}</td>
                        <td>{student.birthDate}</td>
                        <td>{student.group}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    );
}

export default All;