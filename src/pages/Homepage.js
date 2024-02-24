import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import homeImg from '../assets/images/eseries/home-bg.png'
import jambLogo from '../assets/images/eseries/jamb-logo.png'
import profile1 from '../assets/images/eseries/profile-1.png'
import profile2 from '../assets/images/eseries/profile-2.png'
import profile3 from '../assets/images/eseries/profile-3.png'
import profile4 from '../assets/images/eseries/profile-4.png'
import { Exams, News } from './data';


const Homepage = () => {

    document.title = "Home | Eseries";
    const ma = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December']
    const today = new Date()


    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='d-flex mx-5 mt-4'>
                        <div className='bg-soft-secondary p-4' style={{ borderRadius: '20px' }}>
                            <h2>Course Activity</h2>
                            <p className='mb-0 text-muted mt-3 fs-10'>Today</p>
                            <h4 className='text-info'>{today.getDate()}th{" "}{ma[today.getMonth()]}{", "} { today.getFullYear()}</h4>
                            <p className='mt-3 fw-semibold text-muted mb-0'>Exams</p>

                            {Exams.map((exam, id) => (
                                <div key={id}>
                                    <div className={`bg-${exam.color} d-flex py-3 mt-2`} style={{ borderRadius: '15px', boxShadow: '2px 2px 8px gray' }}>
                                        <div className='ms-3 home__filter-1' style={{ borderRadius: '10px' }}>
                                            <img src={jambLogo} alt="" className='avatar-xs' />
                                        </div>
                                        <div className='me-2'>
                                            <h3 className='mb-3 text-white'>{exam.name}</h3>
                                            <div className='d-flex'>
                                                <div className="avatar-group">
                                                    <Link to="#"
                                                        className="avatar-group-item"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-trigger="hover"
                                                        data-bs-placement="top"
                                                        title=""
                                                        data-bs-original-title="Christi">
                                                        <img src={profile1}
                                                            alt=""
                                                            className="rounded-circle avatar-xs" />
                                                    </Link>
                                                    <Link to="#"
                                                        className="avatar-group-item"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-trigger="hover"
                                                        data-bs-placement="top"
                                                        title=""
                                                        data-bs-original-title="Frank Hook">
                                                        <img src={profile2}
                                                            alt=""
                                                            className="rounded-circle avatar-xs" />
                                                    </Link>
                                                    <Link to="#"
                                                        className="avatar-group-item"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-trigger="hover"
                                                        data-bs-placement="top"
                                                        title=""
                                                        data-bs-original-title="Frank Hook">
                                                        <img src={profile3}
                                                            alt=""
                                                            className="rounded-circle avatar-xs" />
                                                    </Link>
                                                    <Link to="#"
                                                        className="avatar-group-item"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-trigger="hover"
                                                        data-bs-placement="top"
                                                        title=""
                                                        data-bs-original-title="Frank Hook">
                                                        <img src={profile4}
                                                            alt=""
                                                            className="rounded-circle avatar-xs" />
                                                    </Link>
                                                </div>
                                                <h5 className='ms-1 mt-1 text-white' style={{ lineHeight: '0.8' }}>200k+<br /><span className='fw-lighter' style={{ fontSize: '8px' }}>Active Learners</span></h5>
                                            </div>
                                        </div>
                                        <div className='ms-2'>
                                            <h4 className='home__filter text-center mb-0' style={{ borderRadius: '8px' }}>{exam.subjects}</h4>
                                            <p className='fw-lighter mb-0 ms-1 text-white' style={{ fontSize: '8px' }}>Subjects<br /><span className='fw-lighter'>Enrolled</span></p>
                                            <Link to='/learner-preview' className='fs-10 ms-1 text-white'>View<span className='fs-5'><i className='las la-long-arrow-alt-right align-middle'></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{width: '400px', marginLeft: '100px'}}>
                            <h5 className='text-success'>TODAY'S QUOTE</h5>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='p-text'>A person who won't read has no advantage over the one who cannot read. <span className='fw-semibold'>- English Proverb</span></p>

                                <div className='position-relative btn btn-icon btn-topbar btn-soft-success rounded-circle px-1'>
                                    <i className='bx bx-bell fs-22 '></i>
                                    <span
                                        className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">2<span
                                            className="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex w-100'>
                                <img src={homeImg} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Homepage;
