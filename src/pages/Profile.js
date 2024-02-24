import React from 'react';
import { Button, Container } from 'reactstrap';
import profileAvatar from '../assets/images/eseries/avatar.png'
import profileImg from '../assets/images/eseries/profile-hero.png'
import { Link } from 'react-router-dom';


const Profile = () => {

    document.title = "Profile | Eseries";


    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-3 mx-5'>
                        <p className='mt-2 text-success fw-semibold'>Profile</p>
                    </div>
                    <div className='d-flex justify-content-between mx-5'>
                        <div className='d-flex align-items-center'>
                            <div className='me-4'>
                                <img src={profileAvatar} alt="" className='rounded-circle avatar-sm' />
                            </div>
                            <h4>Alex Madu <span><i className='ri-award-fill ri-md text-success align-bottom'></i></span></h4>
                        </div>
                        <div className=''>
                            <div className='position-relative btn btn-icon btn-topbar btn-soft-success rounded-circle px-1 me-4'>
                                <i className='bx bx-bell fs-22 '></i>
                                <span
                                    className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">2<span
                                        className="visually-hidden">unread messages</span>
                                </span>
                            </div>
                            <Link to='/edit-profile' className='btn-sm btn btn-success w-sm'>Edit <span><i className='ri-edit-2-line ri-md text-white'></i></span></Link>
                        </div>
                    </div>
                    <div className='d-flex mt-3 border-bottom border-3 mx-5'>
                        <p className='me-4 mb-0'><i className='ri-mail-line text-success me-1 align-bottom'></i>alex@gmail.com</p>
                        <p className='mx-4 mb-0'><i className='ri-phone-line text-success me-1 align-bottom'></i>23480-123-45-678</p>
                        <p className='mx-4 mb-0'><i className='ri-map-pin-line text-success me-1 align-bottom'></i>Lagos, Nigeria</p>
                        <p className='ms-4 mb-0'><i className='ri-stack-line text-success me-1 align-bottom'></i>Subscribed</p>
                    </div>
                    <div className='d-flex mt-5 mx-5'>
                        <div className='ms-5'>
                            <Link to='/learning-plans' className="d-flex justify-content-between py-2 px-4 bg-success mb-4" style={{ borderRadius: '10px', width: '300px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                                <i className="fs-2 fw-light d-block text-white ri-database-2-line mb-3"></i>
                                <h5 className='text-white mt-5 fw-normal'>Learning Plans</h5>
                            </Link>
                            <Link to='/saved-courses' className="d-flex justify-content-between py-2 px-4 bg-success mb-4" style={{ borderRadius: '10px', width: '300px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                                <i className="fs-2 d-block text-white ri-bookmark-line mb-3"></i>
                                <h5 className='text-white mt-5 fw-normal'>Saved Courses</h5>
                            </Link>
                            <Link to='' className="d-flex justify-content-between py-2 px-4 bg-success mb-4" style={{ borderRadius: '10px', width: '300px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                                <i className="fs-2 d-block text-white ri-notification-2-line mb-3"></i>
                                <h5 className='text-white mt-5 fw-normal'>Notifications</h5>
                            </Link>
                            <Link to='/settings' className="d-flex justify-content-between py-2 px-4 bg-success mb-4" style={{ borderRadius: '10px', width: '300px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                                <i className="fs-2 d-block text-white ri-sound-module-line mb-3"></i>
                                <h5 className='text-white mt-5 fw-normal'>Settings</h5>
                            </Link>
                            <Link to='/help' className="d-flex justify-content-between py-2 px-4 bg-success" style={{ borderRadius: '10px', width: '300px', boxShadow: '4px 6px 4px #2ba89d80' }}>
                                <i className="fs-2 d-block text-white ri-question-line mb-3"></i>
                                <h5 className='text-white mt-5 fw-normal'>Help</h5>
                            </Link>
                        </div>
                        <div className='pt-4 px-4 pb-0' style={{ background: '#2ba89d30', marginLeft: '200px', width: '350px' }}>
                            <h2 className='text-success fw-semibold mt-3' >Learning Anywhere and Everywhere</h2>
                            <div className='mt-5 pt-5'>
                                <img src={profileImg} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Profile;
