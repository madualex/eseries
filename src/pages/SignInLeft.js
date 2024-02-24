import React from "react";
import { Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Import Images
import heroBg from "../assets/images/eseries/hero-bg.png";
import playstoreLogo from "../assets/images/eseries/playstore-icon.png";
import appleLogo from "../assets/images/eseries/apple-icon.png";

const SignInLeft = () => {
    return (
        <React.Fragment>

            <Col lg={6}>
                <div className="p-lg-5">
                    <p className="p__text text-center">Welcome to E-Series</p>
                    <h1 className="text-center text-success display-6 hero__text">One App, All of <br /> your exams</h1>
                    <div className="hero__img-div mt-5">
                        <img src={heroBg} alt="hero banner" className="hero__img"/>
                    </div>
                    <p className="p__text text-center">Start your exam practice by installing our mobile apps from the stores</p>
                    <div className="d-flex justify-content-center mt-4">
                        <div className="d-flex bg-dark rounded align-items-center justify-content-center py-2 ps-2 pe-4">
                            <div className="">
                                <img src={playstoreLogo} alt="Google Play Logo" height='25' />
                            </div>
                            <h6 className="text-light ms-2 cta__font-main my-1">Download on the <br /><span className="cta__font">Apple store</span></h6>
                        </div>
                        <div className="d-flex bg-dark rounded align-items-center justify-content-center py-2 ps-2 pe-4 ms-2">
                            <div className="">
                                <img src={playstoreLogo} alt="Google Play Logo" height='25'/>
                            </div>
                            <h6 className="text-light ms-2 cta__font-main my-1">GET IT ON <br /><span className="cta__font">Google Play</span></h6>
                        </div>
                    </div>
                </div>
            </Col>
        </React.Fragment >
    );
};

export default SignInLeft;