import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import * as Icon from 'react-bootstrap-icons';
import { Space, Popconfirm, Button } from 'antd';
import 'antd/dist/antd.min.css';
import axios from 'axios'

const OfferTable = () => {
    const [offersList, setOffersList] = useState([])
    const [FilteredOffer, setFilteredOffer] = useState([])

    const getOffer = async () => {
        try {
            const response = await axios.get('http://backend.techms.ru.com/main/offers');

            setOffersList(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getOffer();
    }, []);

    function cancel(e) {
        console.log(e);
    }

    function deleteOffer(x) {
        axios.delete(`http://backend.techms.ru.com/main/offer/delete/${x}`).then((response) => {
            setOffersList(offersList.filter((val) => {
                return val.offer_id != x;
            }));
            window.location.reload();
            //console.log(response);
        })

    }

    const columns = [
        {
            name: "OFFER ID",
            selector: row => row.offer_id,
            sortable: true,

        },
        {
            name: "OFFER NAME",
            selector: row => row.offer_name,
            sortable: true,
            editable: true,
        },

        {
            name: "IMAGE",
            selector: row => <img width={50} height={50} className="imgSample" src={row.offer_image} alt='img' />
        },
        {
            title: "ACTIONS",
            name: "ACTION",
            dataIndex: "actions",
            align: "center",
            cell: row =>
                <div className='row'>

                    <div className='col-12'>


                        <Space>
                            <Popconfirm
                                title="Are you sure to delete?"
                                onConfirm={() => deleteOffer(row.offer_id)}
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


    return <>
        <DataTable
            title="Gallery Images"
            columns={columns}
            data={offersList}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='70vh'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input
                    type="text"
                    placeholder='Search here'
                    className='w-25 form-control'

                />
            }

        />
    </>
}

export default OfferTable
