import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import reviewImg from '../assets/images/eseries/review.png'
import { Scores } from './data';


const Review = () => {
    document.title = "Review | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1'>
                        <Link to='/practice-test'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex ms-5 gap-5'>
                            <div className='me-5' style={{ width: '300px' }}>
                                <p className='fs-6 fw-semibold text-success mb-1'>Summary</p>
                                <h3>Performance Review</h3>
                                <div>
                                    <img src={reviewImg} alt="" />
                                </div>
                                <p className='fs-6 text-wrap'>Review the questions and learn the topics in areas you are weak and attempt again. We know you can do better go for it.</p>
                            </div>

                            {/* <div className='d-flex'> */}
                            <div className='' style={{ marginLeft: '200px' }}>
                                <h3 className='mb-4 mt-4'>Result</h3>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <i className='fs-4 text-success las la-check-circle me-1 align-bottom'></i><span className='fs-6 text-success mb-4'>Correct</span>
                                        <h4 className='mx-4'>34</h4>
                                    </div>
                                    <div className='me-4'>
                                        <i className='fs-4 text-danger las la-times-circle me-1 align-bottom'></i><span className='fs-6 text-danger mb-4'>Incorrect</span>
                                        <h4 className='mx-4'>20</h4>
                                    </div>
                                    <div className=''>
                                        <i className='fs-4 text-warning bx bx-chevrons-right align-bottom'></i><span className='fs-6 text-warning mb-4'>Unanswered</span>
                                        <h4 className='mx-4'>06</h4>
                                    </div>
                                </div>
                                <Link to='/study' className='btn btn-success d-block mt-5 mb-3'>View Corrections</Link>
                                <Link to='/practice-test' className='btn btn-outline-success d-block'><i className='fs-6 las la-undo-alt me-2'></i>Retake</Link>
                            </div>
                        </div>
                    <div className='ms-2 px-5 mt-5'>
                        {
                            Scores.map((item, id) => (
                                <div key={id} className={`btn btn-${item.color} rounded-0 border-white`}>
                                    {item.number}
                                </div>
                            ))
                        }
                    </div>
                    </div>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default Review;
