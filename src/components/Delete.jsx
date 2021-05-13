import React, {useState} from 'react';
import {deleteStudentById} from '../api/studentApi'

const Delete = () => {
    const [id, setId] = useState();

    const handleClick = () => {
        deleteStudentById(id);
    };

    return (
        <div>
            <input type="text" name="id" placeholder="id" onChange={e => {e.preventDefault(); setId(e.target.value)}}/>
            <br/>
            <input type="submit" value="Approve" onClick={e => {e.preventDefault(); handleClick()}}></input>
        </div>
    )
}

export default Delete;