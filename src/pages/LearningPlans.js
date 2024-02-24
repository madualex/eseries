import React, { useState } from 'react';
import {Col, Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';


const LearningPlans = () => {
    const [amount, setAmount] = useState('0');
    const [exam, setExam] = useState('Exam Type')
    const [mode, setMode] = useState('Study Mode')
    const [year, setYear] = useState('Duration');


    const handleAmount = (exam === 'JUPEB' || exam === 'UTME/JAMB') && (mode === 'CBT Practice' || mode === 'PDF') && (year === '1 Year' || year === '2 Years');

    const disabled = !handleAmount;
    // const handleAmount = (exam === ('JUPEB' || 'UTME/JAMB')) && (mode === ('CBT Practice' || 'PDF')) && (year === ('1 Year' || '2 Years'));

    document.title = "Profile Settings | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/profile'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <p className='text-success mt-3'>Learning Plans <span><i className='ri-price-tag-3-fill align-bottom'></i></span></p>
                        <h4 className='mt-2'>Subscribe to a learning plan</h4>
                        <p className='fs-10'>Choose from our array of learning plans the one that suits your need</p>
                    </div>

                    <div className='mt-5 d-flex justify-content-center'>
                        <div className='px-5 py-3 bg-soft-success text-center' style={{width: '500px'}}>
                            <h4 className='mb-5 mt-2'>Choose a Year</h4>
                            <Row>
                                <Col>
                                    <div className="mb-4">
                                        <select className="form-select mb-3 bg-white text-dark" value={exam} onChange={e => setExam(e.target.value)}>
                                            <option className='text-muted'>{exam}</option>
                                            <option value='UTME/JAMB' >UTME/JAMB </option>
                                            <option value='JUPEB' >JUPEB </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mb-4">
                                        <select className="form-select mb-3 bg-white text-dark" value={mode} onChange={e => setMode(e.target.value)}>
                                            <option className='text-muted'>{mode}</option>
                                            <option value='CBT Practice' >CBT Practice </option>
                                            <option value='PDF' >PDF </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mb-4">
                                        <select className="form-select mb-3 bg-white text-dark" value={year} onChange={e => setYear(e.target.value)}>
                                            <option className='text-muted'>{year}</option>
                                            <option value='1 Year' >1 Year </option>
                                            <option value='2 Years' >2 Years </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <p className='fw-semibold fs-4 text-success mx-auto bg-white py-2 px-5 rounded my-3' style={{ width: 'fit-content' }}>{handleAmount ? 'N3000.00' : `N${amount}.00`}</p>
                            <Link to='/checkout' className={disabled ? 'btn btn-success w-50 my-3 disabled' : 'btn btn-success w-50 my-3'}>Proceed</Link>
                        </div>
                    </div>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default LearningPlans;