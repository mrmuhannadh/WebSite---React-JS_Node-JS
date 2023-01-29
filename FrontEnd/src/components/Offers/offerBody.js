import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './offerStyle.css'


const OfferBody = () => {
    const [offersList, setOffersList] = useState([])
    useEffect(() => {
        Axios.get('http://backend.techms.ru.com/main/offers').then((response) => {

            setOffersList(response.data);
        });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="row galleryHeader">
                    <div className="col-12 text-center">
                        <h1 className="head">OFFERS</h1>
                    </div>
                </div>
                <div className='row p-4'>

                    {offersList.map((val) => {
                        const id = val.offer_id;
                        const s = val.offer_image;
                        const name = val.offer_name;
                      

                        return <div className='container' key={id} >
                            <div className='row justify-content-center align-items-center' >
                                <div className='col-md-8 theofferbox'>
                                    <img src={s} alt={name} className='offerImage'/>
                                </div>
                            </div>
                        </div>
                        
                        
                    })}


                </div>
            </div>
        </>
    )
}

export default OfferBody
