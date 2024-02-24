import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const AllPlans = () => {
    const [shortPlan, setShortPlan] = useState(false);
    const [yearlyPlan, setYearlyPlan] = useState(false);
    const [lifetimePlan, setLifetimePlan] = useState(false);
    const [isButton, setIsButton] = useState(false);

    function activeShortPlan() {
        setShortPlan(true);
        setIsButton(true);
        setYearlyPlan(false);
        setLifetimePlan(false);
    }
    function activeYearlyPlan() {
        setYearlyPlan(true);
        setIsButton(true);
        setShortPlan(false);
        setLifetimePlan(false);
    }
    function activeLifetimePlan() {
        setLifetimePlan(true);
        setIsButton(true);
        setShortPlan(false);
        setYearlyPlan(false);
    }

    document.title = "Profile Settings | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/checkout'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <p className='text-success mt-3'>Learning Plans <span><i className='ri-price-tag-3-fill align-bottom'></i></span></p>
                        <h4 className='mt-2'>Available learning plans</h4>
                        <p className='fs-10'>Choose from our array of learning plans the one that suits your need</p>
                    </div>

                    <div className='mt-5 mx-5'>
                        <div className={shortPlan ? 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded border border-success' : 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded'} onClick={activeShortPlan} style={{ width: '600px' }} >
                            <Link>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-5 fw-semibold'>3 Months</p>
                                    <p className='fs-4 text-success fw-semibold'>N 20,000.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className=''>Valid for 90 days</p>
                                    <p className='fs-5 text-decoration-line-through'>N24,000.00</p>
                                </div>
                            </Link>
                        </div>
                        <div className={yearlyPlan ? 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded border border-warning' : 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded'} onClick={activeYearlyPlan} style={{ width: '600px' }}>
                            <Link>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-5 fw-semibold'>12 Months</p>
                                    <p className='fs-4 text-warning fw-semibold'>N 50,000.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className=''>Valid for 360 days</p>
                                    <p className='fs-5 text-decoration-line-through'>N60,000.00</p>
                                </div>
                            </Link>
                        </div>
                        <div className={lifetimePlan ? 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded border border-secondary' : 'mb-4 px-5 py-4 pb-2 bg-soft-success text-center rounded'} onClick={activeLifetimePlan} style={{ width: '600px' }}>
                            <Link >
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-5 fw-semibold'>Lifetime</p>
                                    <p className='fs-4 text-secondary fw-semibold'>N 150,000.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className=''>Valid for life</p>
                                    <p className='fs-5 text-decoration-line-through'>N200,000.00</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {isButton && (
                        <div className='mx-5 mt-5'>
                            <Link to='/profile' className='btn btn-success w-25'>Continue</Link>
                        </div>
                    )}
                    

                </Container>
            </div >
        </React.Fragment >
    );
};

export default AllPlans;