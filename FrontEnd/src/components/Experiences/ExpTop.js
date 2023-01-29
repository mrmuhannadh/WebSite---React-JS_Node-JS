import React from 'react'
import imgTop from '../../images/Experiences/img1.jpg';
const ExpTop = () => {
  return (
    <div className="theImageArea">
        <div>
            <img
                src={imgTop}
                className="theTopImg"
                alt="imageOne"
            />
        </div>
        <div className="container">
            <div className="row theHeadingArea">
                <div className="col-md-12 text-center theBox">
                    <h1 className="head">EXPERIENCES</h1>
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

export default ExpTop
