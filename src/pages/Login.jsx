import React , {useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { loginUser } from '../service/allapis';



function Login() {

    const [user,setUser]=useState({
        email:"",password:""
    })

    const nav=useNavigate()

    const handleSubmit=async()=>{
        console.log(user);
        const {email,password}=user
        if(!email || !password){
            alert("Enter valid Inputs!!")
        }
        else{
            const result=await loginUser(email,password)
            console.log(result);
            if(result.data.length>0){
                alert("Login Successfull!!")
                setUser({
                    username:"",password:""
                })
                nav('/dash')
            }
            else{
                alert("Login Failed!! Invalid Email or Password!!")
            }
            
        }
        
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <div className="w-75 border border-2 shadow p-4">
                    <div className="row">
                        <div className="col">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.I1Wr4Rg6UGf_6YiW4BOlRAHaHa&pid=Api&P=0&h=800" className='w-75 ps-2' alt="" />
                        </div>
                        <div className="col">
                            <h2>Login</h2>
                            <div className="my-5">
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />
                                </FloatingLabel>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-success'onClick={handleSubmit}>Login</button>
                                <Link to='/reg'>Are you new?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
