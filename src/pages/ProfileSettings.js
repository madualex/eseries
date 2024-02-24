import React, { useState } from 'react';
import { Col, Collapse, Container, Row, } from 'reactstrap';
import classnames from "classnames";
import { Link } from 'react-router-dom';


const ProfileSettings = () => {
    const [col1, setcol1] = useState(false)
    const [col2, setcol2] = useState(false)
    const [col3, setcol3] = useState(false)
    const [col4, setcol4] = useState(false)
    const [col5, setcol5] = useState(false)
    const [isButton, setIsButton] = useState(false);

    function handleNotification() {
        setIsButton(true);
    }

    function handleFontsize() {
        setIsButton(true);
    }

    function handleImagesize() {
        setIsButton(true);
    }

    const t_col1 = () => {
        setcol1(!col1)
        setcol2(false)
        setcol3(false)
        setcol4(false)
        setcol5(false)
    }

    const t_col2 = () => {
        setcol2(!col2)
        setcol1(false)
        setcol3(false)
        setcol4(false)
        setcol5(false)

    }

    const t_col3 = () => {
        setcol3(!col3)
        setcol1(false)
        setcol2(false)
        setcol4(false)
        setcol5(false)

    }

    const t_col4 = () => {
        setcol4(!col4)
        setcol1(false)
        setcol2(false)
        setcol3(false)
        setcol5(false)
    }

    const t_col5 = () => {
        setcol5(!col5)
        setcol1(false)
        setcol2(false)
        setcol3(false)
        setcol4(false)
    }

    document.title = "Settings | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5'>
                        <Link to='/profile'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <div className='d-flex align-items-center my-4'>
                            <h4 className='text-success me-2'>Settings</h4>
                            <i className="text-success fs-4 mb-2 ri-settings-5-line"></i>
                        </div>
                    </div>

                    <Row className='mx-5'>
                        <Col lg={4}>
                            <div className="mt-3" style={{ width: '600px' }}>
                                <div className="custom-accordionwithicon accordion-flush" id="genques-accordion">
                                    <div className="accordion-item" style={{ borderBottom: '1px solid #00000020' }}>
                                        <h2 className="accordion-header" id="genques-headingOne" >
                                            <button
                                                className={classnames(
                                                    "accordion-button ps-0 pe-1 ",
                                                    "fw-medium",
                                                    { collapsed: !col1 }
                                                )}
                                                type="button"
                                                onClick={t_col1}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Edit Profile
                                            </button>
                                        </h2>
                                        <Collapse isOpen={col1} className="accordion-collapse">
                                            <div className="accordion-body px-3 pb-3 pt-1 text-muted">
                                                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item" style={{ borderBottom: '1px solid #00000020' }}>
                                        <h2 className="accordion-header" id="genques-headingTwo">
                                            <button
                                                className={classnames(
                                                    "accordion-button ps-0 pe-1",
                                                    "fw-medium",
                                                    { collapsed: !col2 }
                                                )}
                                                type="button"
                                                onClick={t_col2}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Notification
                                            </button>
                                        </h2>
                                        <Collapse isOpen={col2} className="accordion-collapse">
                                            <div className="accordion-body px-3 pb-3 pt-1">
                                                <div>
                                                    <label htmlFor="email" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="notification" id="email" className='me-2' onClick={handleNotification} style={{ cursor: "pointer" }} />Email Notification</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="sms" className='mb-2 fs-11 style={{ cursor: "pointer" }}'><input type="radio" name="notification" id="sms" className='me-2' onClick={handleNotification} style={{ cursor: "pointer" }} />Sms Notification</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="in-app" className='mb-2 fs-11 style={{ cursor: "pointer" }}'><input type="radio" name="notification" id="in-app" className='me-2' onClick={handleNotification}  style={{ cursor: "pointer" }}/>In-App Notification</label>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item" style={{ borderBottom: '1px solid #00000020' }}>
                                        <h2 className="accordion-header" id="genques-headingThree">
                                            <button
                                                className={classnames(
                                                    "accordion-button ps-0 pe-1",
                                                    "fw-medium",
                                                    { collapsed: !col3 }
                                                )}
                                                type="button"
                                                onClick={t_col3}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Font Size
                                            </button>
                                        </h2>
                                        <Collapse isOpen={col3} className="accordion-collapse">
                                            <div className="accordion-body px-3 pb-3 pt-1">
                                                <div>
                                                    <label htmlFor="email" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="fontSize" id="small" className='me-2' onClick={handleFontsize}  style={{ cursor: "pointer" }}/>Small</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="sms" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="fontSize" id="medium" className='me-2' onClick={handleFontsize}  style={{ cursor: "pointer" }}/>Medium</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="in-app" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="fontSize" id="large" className='me-2' onClick={handleFontsize}  style={{ cursor: "pointer" }}/>Large</label>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item" style={{ borderBottom: '1px solid #00000020' }}>
                                        <h2 className="accordion-header" id="genques-headingThree">
                                            <button
                                                className={classnames(
                                                    "accordion-button ps-0 pe-1",
                                                    "fw-medium",
                                                    { collapsed: !col4 }
                                                )}
                                                type="button"
                                                onClick={t_col4}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Image Size
                                            </button>
                                        </h2>
                                        <Collapse isOpen={col4} className="accordion-collapse">
                                            <div className="accordion-body px-3 pb-3 pt-1">
                                                <div>
                                                    <label htmlFor="email" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="imageSize" id="small" className='me-2' onClick={handleImagesize}  style={{ cursor: "pointer" }}/>Small</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="sms" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="imageSize" id="medium" className='me-2' onClick={handleImagesize} style={{ cursor: "pointer" }}/>Medium</label>
                                                </div>
                                                <div >
                                                    <label htmlFor="in-app" className='mb-2 fs-11' style={{ cursor: "pointer" }}><input type="radio" name="imageSize" id="large" className='me-2' onClick={handleImagesize} style={{ cursor: "pointer" }}/>Large</label>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item" >
                                        <h2 className="accordion-header" id="genques-headingThree">
                                            <button
                                                className={classnames(
                                                    "accordion-button ps-0 pe-1",
                                                    "fw-medium",
                                                    { collapsed: !col5 }
                                                )}
                                                type="button"
                                                onClick={t_col5}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Data and Privacy
                                            </button>
                                        </h2>
                                        <Collapse isOpen={col5} className="accordion-collapse">
                                            <div className="accordion-body px-3 pt-1 text-muted">
                                                he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>

                                {isButton && (
                                    <div className='ms-5 mt-5 pt-5 text-end'>
                                        <Link to='/profile' className='btn btn-success w-sm'>Save</Link>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </React.Fragment >
    );
};

export default ProfileSettings;
