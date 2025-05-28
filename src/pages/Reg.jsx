import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { allUsersApi } from '../service/allapis';
import { registerUser } from '../service/allapis';
import { useNavigate } from 'react-router-dom';

function Reg() {

    const [data, setData] = useState({
        username: "", email: "", password: ""
    })

    const nav = useNavigate()

    const handleSubmit = async () => {
        const { username, email, password } = data
        if (!username || !email || !password) {
            alert("Enter Valid Inputs!!")
        }
        else {
            const users = await allUsersApi()
            // console.log(users);            
            // console.log(data);

            const existing = users.data.find(item => item.email == data.email || item.username)
            // console.log(existing);
            if (existing) {
                alert("User already Exists !! Please provide a different Email and Username")
            }
            else {
                const result = await registerUser(data)
                console.log(result);
                if (result.status == 201) {
                    setData({
                        username: "", email: "", password: ""
                    })
                    alert("Registration Successfull")
                    nav('/log')
                }
                else {
                    alert("Registration Failed !!")
                }
            }


        }
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <div className="w-75 border border-2 shadow p-4">
                    <div className="row">
                        <div className="col">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.I1Wr4Rg6UGf_6YiW4BOlRAHaHa&pid=Api&P=0&h=600" className='w-75 ps-2' alt="" />
                        </div>
                        <div className="col">
                            <h2>Register</h2>
                            <div className="my-5">
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Username">
                                    <Form.Control type="text" onChange={(e) => setData({ ...data, username: e.target.value })} placeholder="name" className='mb-3' />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Password" />
                                </FloatingLabel>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-success' onClick={handleSubmit}>Register</button>
                                <Link to='/log'>Already a User?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reg
