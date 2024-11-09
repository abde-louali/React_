import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

let index = 1;

export default function Main() {
    const [SigninU, setsign] = useState({
        id: '',
        username: '',
        password: '',
        email: ''
    });
    const [LoginU, setLog] = useState({
        username: '',
        password: '',
    });
    const [userslist, setuserslist] = useState([]);
    const [message, setmessage] = useState('');

    function SigninAdd() {
        if (SigninU.email === '' || SigninU.password === '' || SigninU.username === '') {
            setmessage('There is an empty field');
        } else {
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...SigninU, id: index++})
            });
            setmessage('Signin successful');
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(res => setuserslist(res));
    }, []);

    function LoginF() {
        const exists = userslist.find(user => LoginU.username === user.username && LoginU.password === user.password);
        if (exists) {
            setmessage('You logged in successfully');
        } else {
            setmessage('Incorrect credentials');
        }
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/Signin/" element={<Signin Obj={SigninU} setobj={setsign} onAdd={SigninAdd} ErrorMesage={message} />} />
                    <Route path="/Login/" element={<Login ObjLogin={LoginU} Onlog={LoginF} setlog={setLog} ErrorMesage={message} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
