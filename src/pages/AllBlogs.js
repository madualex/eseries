import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import { News } from './data';


const AllBlogs = () => {

    document.title = "Blogs | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <h2 className='text-success mb-4 mt-2'>ALL BLOGS</h2>

                    <Row className="row-cols-lg-5">
                        {News.map(item => (
                            <Col key={item.id}>
                                <Link>

                                    <div className={`mt-2 rounded bg-white border border-2 rounded mb-4`}>
                                        <div className="avatar-lg mx-auto text-center mt-4 mx-2">
                                            <img src={item.logo} alt='' className="img-fluid" />
                                        </div>
                                        <div className='bg-success p-2 rounded-bottom mt-4'>
                                            <h6 className="mb-2 text-white fs-11">{item.update}</h6>
                                            <h6 className="mb-0 text-white fs-10 fw-light">{item.date}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </Col>

                        ))}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AllBlogs;
