import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


const LoginBody = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState("")

    const nav = useNavigate();
    const submitData = () => {
        Axios.post('http://backend.techms.ru.com/main/insert', {
            user_name: userName,
            password: password
        }).then(()=>{
            alert("Success");
        });
    };

    const login = () => {
        Axios.post('http://backend.techms.ru.com/main/login', {
            user_name: userName,
            password: password
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message);
                /*window.location = "/login";*/
                nav('/login');
            }else{
                setLoginStatus(response.data[0].user_name);
                //console.log(response.data[0].user_name);
                const u=response.data[0].user_name;
                let theUser = localStorage.setItem('theUserName',u);
                if(u == userName){
                    nav('/dash');
                }else{
                    nav('/login');
                }
                
            }
            
        });
    };


    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-3"></div>
                <div className="col-md-6 d-flex d-flex flex-column align-items-center">
                    <div className="theLogin m-4 p-5 mb-4 d-flex flex-column align-items-center">
                        <div className='row loginTopic'>
                            <h4>LOGIN</h4>
                        </div>
                        <div className="row w-100">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>USER NAME</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        onChange={(e) => {
                                            setUserName(e.target.value)
                                        }}
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}

                                    />

                                </Form.Group>
                                <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                                    <a href="#" className='forgotPw'><i>Forgot password?</i></a>
                                </Form.Group>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <Button variant="danger" type="reset">
                                            Clear
                                        </Button>
                                    </div>
                                    <div className='col d-flex flex-column justify-content-end align-items-end'>
                                        <Button className='btn' type="button" onClick={login}>
                                            Login
                                        </Button>
                                    </div>
                                </div>

                            </Form>
                        </div>
                        {loginStatus }
                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>
            
            

        </div>

    )
}

export default LoginBody
