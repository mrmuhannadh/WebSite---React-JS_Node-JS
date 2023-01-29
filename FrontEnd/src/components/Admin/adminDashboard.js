import React, { useState, useRef } from 'react'
import './adminStyle.css'
import Axios from 'axios'
import { Form, Button } from 'react-bootstrap';



const AdminDashboard = () => {
    let user = localStorage.getItem('theUserName');

    const [oldpw, setoldpw] = useState('');
    const [newpw, setnewpw] = useState('');
    const [renewpw, setrenewpw] = useState('');
    const buttonRef = useRef();


    //console.log(oldpw);
    //console.log(newpw);

    const changePwFun = (e) => {
        e.preventDefault();
        const oldPassword = oldpw;
        const newPass = (e.target.confirmPassword.value);
        const userName = user;
        Axios.put('http://backend.techms.ru.com/main/changepws', {
            user_name: userName,
            oldpassword: oldPassword,
            newPassw: newPass
        }).then((response) => {

            if (response.data.message) {
                alert(response.data.message);
                /*window.location = "/login";*/
            } else {
                alert("Password not changed");
            }

        });
    };

    const [input, setInput] = useState({

        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({

        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);


    }

    const validateInput = e => {
        let { name, value } = e.target;

        let pw = input.password;
        /*console.log(pw);*/
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {

                case "confirmPassword":
                    if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                        buttonRef.current.disabled = true;

                    } else {
                        stateObj[name] = "Password match.";
                        buttonRef.current.disabled = false;
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    return (
        <>
            <div className='row theFirstRow'>
                <div className='col text-center'>
                    WELCOME {user}
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-7'>


                    </div>



                    <div className='col-md-5 thepwset'>
                        <div className='row p-3 '>
                            <div className='col text-center'>
                                CHANGE PASSWORD
                            </div>
                        </div>
                        <div className='row p-2'>
                            <Form onSubmit={changePwFun}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setoldpw(e.target.value)
                                        }}
                                    />
                                    <Form.Text className="text-muted">
                                        Enter your current password
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="New Password"
                                        name="password"
                                        value={input.password}
                                        onBlur={validateInput}
                                        onChange={onInputChange}
                                    />
                                    <Form.Text className="text-muted">
                                        Enter your new password
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword3">
                                    <Form.Label>Re-Enter New Password</Form.Label>
                                    <Form.Control
                                        name="confirmPassword"

                                        type="password"
                                        value={input.confirmPassword}
                                        onBlur={validateInput}
                                        placeholder="Re-Enter New Password"
                                        onChange={onInputChange}


                                    />
                                    <Form.Text className="text-muted">
                                        Re-Enter your new password
                                    </Form.Text>

                                </Form.Group>
                                <div className='row'>
                                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                                </div>
                                <div className="row">
                                    <div className='col-6'>
                                        <Button variant="success" type="submit" ref={buttonRef} disabled={true}>
                                            CHANGE
                                        </Button>
                                    </div>
                                    <div className='col-6 d-flex flex-column justify-content-end align-items-end'>
                                        <Button variant="danger" type="reset" onClick={changePwFun}>
                                            CLEAR
                                        </Button>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
