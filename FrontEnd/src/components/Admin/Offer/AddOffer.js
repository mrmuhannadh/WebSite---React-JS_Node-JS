import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery'
import axios from 'axios'

const AddOffer = () => {
    const [image, setImage] = useState("");
    const handleInputChange = (e) => {
        const file = e.target.files[0];
        previewFiles(file);
    }

    function previewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImage(reader.result);
        }


    }
    const addNewOffer = () => {
        $('.addOfferArea').toggle(1000);
    }

    function offerForm(e) {
        e.preventDefault();
        e.target.reset();
        axios.post('http://backend.techms.ru.com/main/offerUpload', {
            image: image
        }).then((response)=>{
            alert(response.data);
            window.location.reload();
        })
        
    };

    return (
        <>
            <div className='row'>
                <button className='btn btn-success' onClick={() => { addNewOffer(); }}>ADD A NEW OFFER</button>
            </div>
            <div className='addOfferArea'>

                <form method='POST' encType='multipart/form-data' onSubmit={offerForm}>
                    <div className='row'>
                        <div className='col-6 p-5 w-100 '>
                            <div className='container p-5 theimgboxarea'>
                                <div className='row'>
                                    <div className='col pb-3 text-center'>
                                        <h3>ADD A NEW OFFER</h3>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>

                                        <div className='row'>
                                            <Form.Group className="mb-2 w-100" >
                                                <Form.Label className='labelName'>OFFER IMAGE</Form.Label>
                                                <input type='file' className='form-control' name='upload_file' onChange={handleInputChange} required/>
                                                <Form.Text className="text-muted">
                                                    Image should be in <span className='format'>*.jpg </span>or <span className='format'>*.png </span> format
                                                </Form.Text>
                                            </Form.Group>

                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <Button variant="danger" type="reset">
                                                    RESET
                                                </Button>
                                            </div>
                                            <div className='col d-flex flex-column justify-content-end align-items-end'>
                                                <Button className='btn' type="submit" >
                                                    UPLOAD
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 theBoxtopreview '>
                                        <div className='imagepreview'>
                                            {image != null ?
                                                <img src={image}
                                                    alt="imageto Upload"
                                                    className='thePrevImage'
                                                />
                                                : null}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </form>
            </div>

        </>
    )
}

export default AddOffer
