import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios'
import { Space, Popconfirm, Button } from 'antd';
import 'antd/dist/antd.min.css';
import Axios from 'axios'
import { Modal } from 'react-bootstrap'

const GalleryTable = () => {
    const [galleryList, setGalleryList] = useState([])
    const [search, setSearch] = useState("")
    const [FilteredGallery, setFilteredGallery] = useState([])
    const [ModalInfo, SetModalInfo] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getGallery = async () => {
        try {
            const response = await axios.get('http://backend.techms.ru.com/main/gallery');
           
            setFilteredGallery(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    function cancel(e) {
        console.log(e);

    }
    function deleteImage(x) {
        Axios.delete(`http://backend.techms.ru.com/main/gallery/delete/${x}`).then((response) => {
            setFilteredGallery(FilteredGallery.filter((val)=>{
                return val.img_id != x;
            }))
        })
       
    }
    function editImage(x) {
        //alert(x);
        setShow(true);
        {
            galleryList.map((val) => {
                const id = val.img_id;
                if (id == x) {

                    const name = val.img_path;
                    const category = val.img_category;
                    SetModalInfo(name);
                    //console.log(category);
                }
            })
        };
        //console.log(galleryList);
        //console.log(ModalInfo);
    }

    const columns = [
        {
            name: "IMAGE ID",
            selector: row => row.img_id,
            sortable: true,

        },
        {
            name: "NAME",
            selector: row => row.img_name,
            sortable: true,
            editable: true,
        },
        {
            name: "CATEGORY",
            selector: row => row.img_category,
            sortable: true,
            editable: true,
        },
        {
            name: "IMAGE",
            selector: row => <img width={50} height={50} className="imgSample" src={row.img_path} alt='img' />
        },
        {
            title: "ACTIONS",
            name: "ACTION",
            dataIndex: "actions",
            align: "center",
            cell: row =>
                <div className='row'>
                    <div className='col-6'>
                        <Space>
                            <Popconfirm
                                title="Are you sure to Edit?"
                                onConfirm={() => editImage(row.img_id)}
                                onCancel={cancel}
                                
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="m-2" primary> <Icon.PencilSquare size={20} /> </Button>
                            </Popconfirm>
                        </Space>

                    </div>
                    <div className='col-6'>


                        <Space>
                            <Popconfirm
                                title="Are you sure to delete?"
                                onConfirm={() => deleteImage(row.img_id)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className=" m-2" danger> <Icon.Trash3 size={20} /> </Button>
                            </Popconfirm>
                        </Space>

                    </div>

                </div>

        }
    ];

    useEffect(() => {
        getGallery();
    }, []);

    const rowEvents = {
        onClick: (row) => {
            console.log(row);
        }
    }
    return <>
        <DataTable
            title="Gallery Images"
            columns={columns}
            data={FilteredGallery}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='70vh'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            onRowClicked={rowEvents}
            subHeader
            subHeaderComponent={
                <input
                    type="text"
                    placeholder='Search here'
                    className='w-25 form-control'
                    onChange={(e) => setSearch(e.target.value)}
                />
            }

        />

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img width={50} height={50} src={ModalInfo} alt='img' />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className='btn'>Understood</Button>
            </Modal.Footer>
        </Modal>

    </>
}

export default GalleryTable
