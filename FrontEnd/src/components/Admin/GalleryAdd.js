import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery'
import axios from 'axios'

const GalleryAdd = () => {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState("");


    const addNewImage = () => {
        $('.addImageArea').toggle(1000);
    }


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

    const submit = async (e) => {
        const xC = category;
        axios.post(`http://backend.techms.ru.com/main/imageuploadNew/${xC}`, {
            image: image
        }).then((response)=>{
            alert(response.data);
            window.location.reload();
        })
        try {
            console.log("");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className='row'>
                <button className='btn btn-success' onClick={() => { addNewImage(); }}>ADD A NEW IMAGE</button>
            </div>
            <div className='addImageArea'>

                <Form action='' method='POST' encType='multipart/form-data'>
                    <div className='row'>
                        <div className='col-6 p-5 w-100 '>
                            <div className='container p-5 theimgboxarea'>
                                <div className='row'>
                                    <div className='col pb-3 text-center'>
                                        <h3>ADD A NEW IMAGE</h3>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <Form.Group className="mb-2 w-100" >
                                                <Form.Label className='labelName'>Image Category</Form.Label>

                                                <select
                                                    className='form-control'
                                                    name='categoryofimage'
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    required
                                                >
                                                    <option defaultValue>SELECT A CATEGORY</option>
                                                    <option name='dining' value='Dining'>DINING</option>
                                                    <option name='lifeStyle' value='LifeStyle'>LIFE STYLE</option>
                                                    <option name='atm' value='ATM'>ATMOSPHERE</option>
                                                </select>
                                                <Form.Text className="text-muted">
                                                    Please select the category
                                                </Form.Text>
                                            </Form.Group>
                                        </div>
                                        <div className='row'>
                                            <Form.Group className="mb-2 w-100" >
                                                <Form.Label className='labelName'>Select Image</Form.Label>
                                                <input type='file' className='form-control' name='upload_file' onChange={handleInputChange} />
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
                                                <Button className="btn" type="button" onClick={() => submit()}>
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

                </Form>
            </div>
        </>
    )
}

export default GalleryAdd
