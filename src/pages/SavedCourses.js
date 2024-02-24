import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { Link } from 'react-router-dom';
import { Subjects } from './data';


const SavedCourses = () => {

    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    function activeSubject() {
        const divElList = document.querySelectorAll('.active__subject');

        divElList.forEach((divEl) => {
            divEl.addEventListener('click', () => {
                document.querySelector('.active-subject')?.classList.remove('active-subject');
                divEl.classList.add('active-subject');
            });
        })
    }

    document.title = "Saved Courses | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/profile'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <div className='d-flex align-items-center my-4'>
                            <h4 className='text-success me-2'>Saved Courses</h4>
                            <i className="text-success fs-4 mb-2 ri-bookmark-fill"></i>
                        </div>
                    </div>

                    <Row className='mx-4'>
                        <Col xxl={9}>
                            <div className="mt-xxl-n5 mt-4">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}
                                                type="button">
                                                UTME/JAMB
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                POST UTME
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" })}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                WASSCE
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "4" })}
                                                onClick={() => {
                                                    tabChange("4");
                                                }}
                                                type="button">
                                                NECO
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "5" })}
                                                onClick={() => {
                                                    tabChange("5");
                                                }}
                                                type="button">
                                                JUPEB
                                            </NavLink>
                                        </NavItem>

                                    </Nav>
                                </CardHeader>
                                <CardBody className=" px-2">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <ul className='row exams-list px-0 mt-4'>
                                                {Subjects.map(subject => (
                                                    <li className='col-3' key={subject.id} style={{ listStyle: 'none' }}>
                                                        <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{background: '#F8F8F8'}}>
                                                            <h5 className="fw-bold mb-3">{subject.name}</h5>
                                                        </div>
                                                    </li>
                                                )).slice(0, 3)}
                                            </ul>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <ul className='row exams-list px-0 mt-4'>
                                                {Subjects.map(subject => (
                                                    <li className='col-3' key={subject.id} style={{ listStyle: 'none' }}>
                                                        <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{background: '#F8F8F8'}}>
                                                            <h5 className="fw-bold mb-3">{subject.name}</h5>
                                                        </div>
                                                    </li>
                                                )).slice(3, 6)}
                                            </ul>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <ul className='row exams-list px-0 mt-4'>
                                                {Subjects.map(subject => (
                                                    <li className='col-3' key={subject.id} style={{ listStyle: 'none' }}>
                                                        <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{background: '#F8F8F8'}}>
                                                            <h5 className="fw-bold mb-3">{subject.name}</h5>
                                                        </div>
                                                    </li>
                                                )).slice(1, 4)}
                                            </ul>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <ul className='row exams-list px-0 mt-4'>
                                                {Subjects.map(subject => (
                                                    <li className='col-3' key={subject.id} style={{ listStyle: 'none' }}>
                                                        <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{background: '#F8F8F8'}}>
                                                            <h5 className="fw-bold mb-3">{subject.name}</h5>
                                                        </div>
                                                    </li>
                                                )).slice(5, 7)}
                                            </ul>
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <ul className='row exams-list px-0 mt-4'>
                                                {Subjects.map(subject => (
                                                    <li className='col-3' key={subject.id} style={{ listStyle: 'none' }}>
                                                        <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{background: '#F8F8F8'}}>
                                                            <h5 className="fw-bold mb-3">{subject.name}</h5>
                                                        </div>
                                                    </li>
                                                )).slice(8, 11)}
                                            </ul>
                                        </TabPane>

                                    </TabContent>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default SavedCourses;
