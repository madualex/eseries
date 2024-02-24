import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import {Examinations} from './data';


const AllExams = () => {

    document.title = "Exams | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1'>
                        <Link to='/study'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                    </div>
                    <h2 className='text-success mb-4 mt-2'>ALL AVAILABLE EXAMS</h2>

                    <Row>
                        {Examinations.map(exam => (
                            <Col xl={3} key={exam.id} className='my-2'>
                                <div className={`mt-2 rounded border border-${exam.color} bg-soft-${exam.color}`}>
                                    <div className="p-4 text-center">
                                        <div className="avatar-lg mb-4 mx-auto">
                                            <img src={exam.logo} alt={exam.name} className="img-fluid" />
                                        </div>
                                        <h5 className="fw-bold mb-3 text-uppercase">{exam.name}</h5>
                                        <Link to='/exam' className="mb-0 text-success text-decoration-underline">Proceed</Link>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AllExams;
