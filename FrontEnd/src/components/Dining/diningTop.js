import React from 'react'
import topImage from '../../images/Dinning/top.jpg';
import './DiningStyle.css'

const DiningTop = () => {
  return (
    <div className="theImageArea">
        <div>
            <img
                src={topImage}
                className="topImage"
                alt="topImage"
            />
        </div>
        <div className="container">
            <div className="row theHeadingArea">
                <div className="col-md-12 text-center">
                    <h1 className="head">DINING</h1>
                    <p className="thePara">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                        nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                        sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                        ut sed diam nonummy nibh euismod tincidunt ut
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiningTop
