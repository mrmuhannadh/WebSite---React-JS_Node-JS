import React from 'react'
import './style.css'
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact_Body = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6nmafjl', 'template_yovyspq', e.target, 'P8AewQJ45l9939vst')
          .then((result) => {
              alert("Email sent");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <>
            <div className="row theHeadingArea">
                <div className="col text-center">
                    <h1 className="head">CONTACT US</h1>
                </div>
                <div className="row">
                    <div className="col text-center">
                        PHONE<br />+94 775 205 475
                    </div>
                </div>
                <div className="row emailRow">
                    <div className="col text-center">
                        EMAIL<br />reservations@kalundewaretreat.com
                    </div>
                </div>
            </div>
            <Form onSubmit={sendEmail}> 
                <div className="container ctrBox">
                    <div className="row">
                        <div className="row ">
                            <div className="col-md-6 sm-12 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" required/>
                                    <Form.Text className="text-muted">
                                        Please enter you name here...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Phone</Form.Label>
                                    <input type="number" className='form-control' placeholder="07########" maxLength="10" name="mobile" required/>
                                    <Form.Text className="text-muted">
                                        Please enter valid contact number...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="client_mail" required/>
                                    <Form.Text className="text-muted">
                                        Please enter valid email here...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Room</Form.Label>
                                    <Form.Control type="number" placeholder="001" name="room_no" required/>
                                    <Form.Text className="text-muted">
                                        Select your room here...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 sm-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Arrival</Form.Label>
                                    <Form.Control type="date" placeholder="Ariival Date" name="arrival" required/>
                                    <Form.Text className="text-muted">
                                        Please a arrival date here...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-3 sm-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Departure</Form.Label>
                                    <Form.Control type="date" placeholder="Departure date" name="departure"/>
                                    <Form.Text className="text-muted">
                                        Please a departure date here...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 sm-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Adults</Form.Label>
                                    <input type="number" className='form-control' min="0" placeholder="01" name="adults"/>
                                    <Form.Text className="text-muted">
                                        Please select number of...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-3 sm-6 d-flex flex-column justify-content-center align-items-start">
                                <Form.Group className="mb-2 w-100" >
                                    <Form.Label className='labelName'>Children</Form.Label>
                                    <input type="number" className='form-control' min="0" placeholder="01" name="children"/>
                                    <Form.Text className="text-muted">
                                        Please select number of...
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 sm-12 d-flex flex-column justify-content-center align-items-start">
                                <Form.Label className='mb-2 labelName'>Message</Form.Label>
                                <FloatingLabel className='w-100' controlId="floatingTextarea2" label="Message...">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name="message"
                                    />
                                </FloatingLabel>
                            </div>

                            <div className="col-6 g-5 d-flex justify-content-start align-items-end">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button variant="danger" type="reset" className="mx-1">
                                            Reset
                                        </Button>
                                   
                                        <Button className='btn' type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </Form>
        </>
    )
}

export default Contact_Body
