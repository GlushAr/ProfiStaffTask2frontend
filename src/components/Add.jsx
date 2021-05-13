import React, {useState} from 'react';
import {addStudent} from '../api/studentApi'

const Add = () => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [patronymic, setPatronymic] = useState();
    const [birthDate, setBirthDate] = useState();
    const [group, setGroup] = useState();

    const handleClick = () => {
        addStudent(name, surname, patronymic, birthDate, group).then(alert(birthDate));
    };

    return (
        <div>
            <input type="text" name="name" placeholder="name" onChange={e => {e.preventDefault(); setName(e.target.value)}}/>
            <br/>
            <input type="text" name="surname" placeholder="surname" onChange={e => {e.preventDefault(); setSurname(e.target.value)}}/>
            <br/>
            <input type="text" name="patronymic" placeholder="patronymic" onChange={e => {e.preventDefault(); setPatronymic(e.target.value)}}/>
            <br/>
            <input type="date" name="birthDate" placeholder="birthDate" onChange={e => {e.preventDefault(); setBirthDate(e.target.value)}}/>
            <br/>
            <input type="text" name="group" placeholder="group" onChange={e => {e.preventDefault(); setGroup(e.target.value)}}/>
            <br/>
            <input type="submit" value="Approve" onClick={e => {e.preventDefault(); handleClick()}}></input>
        </div>
    );
}

export default Add;