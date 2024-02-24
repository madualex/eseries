import React from 'react';
import { Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import learnerReviewBg from '../assets/images/eseries/learner-review.png'
import { Overview } from './data';


const LearnerPreview = () => {

    document.title = "Home | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-5 me-5 ms-3">
                <Container fluid>
                    <h5 className='text-success'>TODAY'S QUOTE</h5>
                    <div className='d-flex align-items-center' style={{marginBottom: '100px'}}>
                        <p className='p-text' style={{marginRight: '300px'}}>A person who won't read has no advantage over the one who cannot read. <span className='fw-semibold'>- English Proverb</span></p>

                        <div className='position-relative btn btn-icon btn-topbar btn-soft-success rounded-circle px-1'>
                            <i className='bx bx-bell fs-22 '></i>
                            <span
                                className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">2<span
                                    className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                    <div className='bg-soft-success p-5 position-relative mt-5' style={{ borderRadius: '20px',  }}>
                        <div className='ms-5'>
                            <h1>Hello, Alex</h1>
                            <p>Ready to continue learning where you left off?</p>
                        </div>
                    </div>
                    <div className='position-absolute' style={{top: '13%', right: '10%', width: '300px'}}>
                        <img src={learnerReviewBg} alt="" className='w-100' />
                    </div>
                    <div className='d-flex mt-4 mb-0'>
                        <p className='fw-bold me-auto'>Overview</p>
                        <Link to='' className='bg-success text-white rounded px-2 py-1' style={{ height: 'fit-content' }}>View All</Link>
                    </div>

                    <div className='row px-0 mt-0'>
                        {Overview.map(item => (
                            <div className='col-4 px-3 py-2' key={item.id}>
                                <div className={`bg-${item.color} d-flex justify-content-between align-items-center py-3`} style={{ borderRadius: '15px' }}>
                                    <div className='ms-5 home__filter-1' style={{ borderRadius: '10px' }}>
                                        <i className={`fs-2 text-white ${item.logo}`}></i>
                                    </div>
                                    <div className='me-5'>
                                        <h4 className='text-white mb-0'>{item.amount}</h4>
                                        <p className='fw-lighter mb-0 text-white' style={{ fontSize: '8px' }}>{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='d-flex mt-5 mb-3'>
                        <p className='fw-bold me-auto'>Scores</p>
                        <Link to='' className='bg-success text-white rounded px-2 py-1' style={{height: 'fit-content'}}>View All</Link>
                    </div>
                    <div className="table-responsive table-card table-bordered">
                        <Table className="align-middle table-nowrap mb-0">
                            <thead className="table-success">
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Subjects</th>
                                    <th scope="col">1st Attempt</th>
                                    <th scope="col">2nd Attempt</th>
                                    <th scope="col">3rd Attempt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-medium">1.</td>
                                    <td>11/09/2023</td>
                                    <td>Mathematics 2020</td>
                                    <td>62</td>
                                    <td>78</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">2.</td>
                                    <td>11/09/2023</td>
                                    <td>Chemsitry 2020</td>
                                    <td>62</td>
                                    <td>78</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="fw-medium">3.</td>
                                    <td>11/09/2023</td>
                                    <td>English 2020</td>
                                    <td>72</td>
                                    <td>78</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default LearnerPreview;
