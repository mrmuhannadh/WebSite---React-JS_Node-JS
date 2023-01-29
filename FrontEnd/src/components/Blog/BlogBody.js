import React from 'react'
import './BlogStyle.css'
import $ from 'jquery'
import susImg from '../../images/Blog/body/1.jpg'
import csrImg from '../../images/Blog/body/2.jpg'
import awardImg from '../../images/Blog/body/3.jpg'


const BlogBody = () => {
    const sayHello = (name) => {
        var v = (`.${name}`);

        if (name === 'susDiv') {
            $('.csrDiv').fadeOut(100); 
            $('.awrDiv').fadeOut(100); 
            $(v).fadeIn(300); 
        } else if (name === 'csrDiv') {
            $('.susDiv').fadeOut(100); 
            $('.awrDiv').fadeOut(100); 
            $(v).fadeIn(300); 
        } else if (name === 'awrDiv') {
            $('.susDiv').fadeOut(100); 
            $('.csrDiv').fadeOut(100); 
            $(v).fadeIn(300); 
        }
    };

    return (
        <>
            <div>
                <div className="row">
                    <div className="col text-center">
                        <h1 className='heading'>BLOG</h1>
                    </div>
                </div>
            </div>

            <div className="container ">

                <div className="row  text-center">
                    <div className="col-sm-12 justify-content-center align-items-center cate">
                        <input type="radio" id="sus" defaultChecked name="category" value="sus" onClick={() => {
                            sayHello("susDiv");
                        }} />
                        <label htmlFor="sus" className="btn-lg category-item">SUSTAINABILITY</label>

                        <input type="radio" id="csr" name="category" value="csr" onClick={() => {
                            sayHello("csrDiv");
                        }} />
                        <label htmlFor="csr" className="btn-lg category-item">CSR</label>

                        <input type="radio" id="awr" name="category" value="awr" onClick={() => {
                            sayHello("awrDiv");
                        }} />
                        <label htmlFor="awr" className="btn-lg category-item">AWARDS</label>
                    </div>
                </div>

            </div>
            <div className="container theSliderSec ">
                {/*Sustainability*/}
                <div className="susDiv">
                    <div className="row sus justify-content-center align-items-center">
                        <div className="row px-0">
                            <div className="col px-0 text-center">
                                <img
                                    src={susImg}
                                    className="theImgBlog"
                                    alt="susImg"
                                />
                            </div>

                        </div>
                        <div className="row rowForBod">
                            <div className="col text-center theBodyofBlog">
                                <h3>AGRICULTURE</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <br />
                                <h3>SOLAR FARM</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
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
                {/*CSR*/}
                <div className="csrDiv">
                    <div className="row csr justify-content-center align-items-center">
                        <div className="row px-0">
                            <div className="col px-0 text-center">
                                <img
                                    src={csrImg}
                                    className="theImgBlog"
                                    alt="csrImg"
                                />
                            </div>

                        </div>
                        <div className="row rowForBod">
                            <div className="col text-center theBodyofBlog">
                                <h3>CSR </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <br />
                                <h3>CSR 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
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
                {/*AWARDS*/}
                <div className="awrDiv">
                    <div className="row awr justify-content-center align-items-center">
                        <div className="row px-0">
                            <div className="col px-0 text-center">
                                <img
                                    src={awardImg}
                                    className="theImgBlog"
                                    alt="awardImg"
                                />
                            </div>

                        </div>
                        <div className="row rowForBod">
                            <div className="col text-center theBodyofBlog">
                                <h3>Award 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <br />
                                <h3>Award 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                                    nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                                    sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                                    ut sed diam nonummy nibh euismod tincidunt ut
                                </p>
                                <p>
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
            </div>
        </>
    )
}

export default BlogBody
