import React, { useState } from 'react';
import { Col, Collapse, Container, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const Help = () => {
    const [col1, setcol1] = useState(false)
    const [col2, setcol2] = useState(false)
    const [col3, setcol3] = useState(false)

    const t_col1 = () => {
        setcol1(!col1)
        setcol2(false)
        setcol3(false)
    }

    const t_col2 = () => {
        setcol2(!col2)
        setcol1(false)
        setcol3(false)

    }

    const t_col3 = () => {
        setcol3(!col3)
        setcol1(false)
        setcol2(false)

    }

    document.title = "Help | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/profile'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <p className='text-success mt-3 fw-semibold mb-0'>Need Help?</p>
                        <p className='fs-6 mt-2 text-muted'>Our dedicated team is always already to provide the support you need. If your inquiry is about enrolment, activation or more, fill out this form instead.</p>
                    </div>

                    <div className='mx-5 mt-5 d-flex'>
                        <div className='pt-5 bg-soft-success rounded align-self-start me-5' style={{ width: '400px' }}>
                            <Row className='mx-5'>
                                <Col>
                                    <div className="mb-4">
                                        <label htmlFor="fullname" className='mb-2'>Your Full Name</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark p-0" style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mx-5'>
                                <Col>
                                    <div className="mb-4">
                                        <label htmlFor="email" className='mb-2'>Email Address</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark p-0" style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mx-5'>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className='mb-2'>Phone Number</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark p-0" style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="subject" className='mb-2'>Subject</label>
                                        <input type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark p-0" style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mx-5'>
                                <Col>
                                    <div className="mb-4">
                                        <label htmlFor="message" className=''>Message</label>
                                        <textarea type='text' className="form-control border-top-0 border-start-0 border-end-0 rounded-0 mb-3 bg-transparent text-dark p-0" style={{ borderBottom: '1px solid #00000080' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mx-5'>
                                <Col>
                                    <div className="mb-4">
                                        <label className='mb-3'>Purpose of Contact</label>
                                        <div >
                                            <label htmlFor="general" className='mb-2 fw-light'><input type="checkbox" name="general" id="general" className='me-1' />General</label>
                                        </div>
                                        <div>
                                            <label htmlFor="support" className='mb-2 fw-light'><input type="checkbox" name="support" id="support" className='me-1' />Support</label>
                                        </div>
                                        <div>
                                            <label htmlFor="presale" className='mb-2 fw-light'><input type="checkbox" name="presale" id="presale" className='me-1' />Pre Sale</label>
                                        </div>
                                        <div>
                                            <label htmlFor="collaborations" className='mb-2 fw-light'><input type="checkbox" name="collaborations" id="collaborations" className='me-1' />Collaborations</label>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='text-center'>
                                <Link to='/all-plans' className='btn btn-success w-100 mt-3'>Send a Message</Link>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2">
                                <p className="mb-0 text-center">FAQS</p>
                                <h5 className=" text-center fw-semibold">Popular Questions</h5>
                            </div>
                            <Row>
                                <Col lg={4}>
                                    <div className="mt-3">
                                        <div className="accordion accordion-flush" id="genques-accordion" style={{width: '400px', }}>
                                            <div className="accordion-item" style={{ borderBottomColor: '#00000030' }}>
                                                <h2 className="accordion-header" id="genques-headingOne" style={{ borderBottom: '1px solid #00000080' }}>
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
                                                        1. What is E-Series ?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col1} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item" style={{ borderBottomColor: '#00000030' }}>
                                                <h2 className="accordion-header" id="genques-headingTwo" style={{ borderBottom: '1px solid #00000080' }}>
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
                                                        2. What is Unique about the E-Series App ?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col2} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item" style={{ borderBottom: '1px solid #00000030' }}>
                                                <h2 className="accordion-header" id="genques-headingThree" style={{ borderBottom: '1px solid #00000080' }}>
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
                                                        3. Who are the examinations on E-Series intended for ?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col3} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-5">
                                <h5 className=" text-center fw-semibold">Contact Us</h5>
                                <p className="mb-0 text-center">Reach out to our Customer care team using any of the channels </p>
                                <div className='mt-5'>
                                    <div className='d-flex justify-content-between border border-dark mb-3 px-3 py-1'>
                                        <p className='fs-11 fw-semibold mt-1 mb-0'>Call us on +234 0000 000 000</p>
                                        <i className='fs-4 text-success ri-phone-line'></i>
                                    </div>
                                    <div className='d-flex justify-content-between border border-dark mb-3 px-3 py-1'>
                                        <p className='fs-11 fw-semibold mt-1 mb-0'>Send a Whatsapp message via +234 0000 000 000</p>
                                        <i className='fs-4 text-success ri-whatsapp-line'></i>
                                    </div>
                                    <div className='d-flex justify-content-between border border-dark mb-3 px-3 py-1'>
                                        <p className='fs-11 fw-semibold mt-1 mb-0'>Send an email to e-series@rowaresuite.com</p>
                                        <i className='fs-4 text-success ri-mail-line'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default Help;