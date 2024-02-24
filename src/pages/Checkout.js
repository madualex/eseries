import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const Checkout = () => {

    document.title = "Profile Settings | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/learning-plans'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <p className='text-success mt-3'>Learning Plans <span><i className='ri-price-tag-3-fill align-bottom'></i></span></p>
                        <h4 className='mt-2'>Subscribe to a learning plan</h4>
                        <p className='fs-10'>Choose from our array of learning plans the one that suits your need</p>
                    </div>

                    <div className='mt-4 d-flex justify-content-center'>
                        <div className='px-5 py-3 bg-soft-success text-center rounded' style={{ width: '500px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                            <div className='d-flex justify-content-between'>
                                <p className='text-success'>Plan</p>
                                <p className='text-success'>Amount</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4 text-success'>1 Year UTME/JAMB</p>
                                <p className='fs-4 text-success fw-semibold'>N3000.00</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-4 d-flex justify-content-center'>
                        <div className='px-5 py-4 bg-soft-success rounded' style={{ width: '500px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                            <h4 className='mb-5 mt-2 text-center'>Enter your card details</h4>
                            <Row>
                                <Col>
                                    <div className="mb-4">
                                        <label htmlFor="cardNumber" className='text-muted fs-10 mb-0'>Card Number</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark fw-bold p-0" value='1 2 3 4    5 6 7 8    9 0 1 2    1 3 1 4' style={{borderBottom: '1px solid #00000080'}} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mb-4">
                                        <label htmlFor="cardHolderName" className='text-muted fs-10 mb-0'>Card Holder Name</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark fw-bold p-0" value='Adewale John' style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="expiryDate" className='text-muted fs-10 mb-0'>Expiry Date</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark fw-bold p-0" value='MM/YY' style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="cvv" className='text-muted fs-10 mb-0'>CVV</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark fw-bold p-0" value='* * *' style={{ borderBottom: '1px solid #00000080' }}  />
                                    </div>
                                </Col>
                            </Row>
                            <div className='text-center'>
                                <Link to='/all-plans' className='btn btn-success w-50 my-3'>Pay</Link>
                            </div>
                        </div>
                    </div>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default Checkout;