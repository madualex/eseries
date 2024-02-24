import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';


const ExamYear = () => {

    document.title = "Home | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <Row className='justify-content-center' style={{marginTop: '100px'}}>
                        <Col lg={6} className='h-100'>
                            <div className='bg-white h-50 p-5'>
                                <h5 className='text-center pt-3'>Choose a Year</h5>
                                <select name="" id="" className='my-5 d-block form-control'>
                                    <option>Select a year</option>
                                    <option value="">1990</option>
                                    <option value="">1995</option>
                                    <option value="">2005</option>
                                    <option value="">2020</option>
                                </select>
                                <Button color="success" className="btn btn-success w-50 mb-4 d-block mx-auto" type="button">
                                    Proceed
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ExamYear;
