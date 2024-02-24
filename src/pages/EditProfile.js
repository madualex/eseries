import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { Link } from 'react-router-dom';


const EditProfile = () => {

    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    document.title = "Profile Settings | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1 mx-5   '>
                        <Link to='/profile'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                        <h4 className='my-4'>Edit Profile</h4>
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
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                Password
                                            </NavLink>
                                        </NavItem>

                                    </Nav>
                                </CardHeader>
                                <CardBody className="py-4 px-2 mt-3">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>
                                                    <Col lg={5}>
                                                        <div className="mb-4">
                                                            <Label htmlFor="firstnameInput" className="form-label">First
                                                                Name</Label>
                                                            <Input type="text" className="form-control rounded-0" id="firstnameInput" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={5}>
                                                        <div className="mb-4">
                                                            <Label htmlFor="lastnameInput" className="form-label">Last
                                                                Name</Label>
                                                            <Input type="text" className="form-control rounded-0" id="lastnameInput" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={5}>
                                                        <div className="mb-4">
                                                            <Label htmlFor="lastnameInput" className="form-label">User
                                                                Name</Label>
                                                            <Input type="text" className="form-control rounded-0" id="usernameInput" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={5}>
                                                        <div className="mb-4">
                                                            <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                                Number</Label>
                                                            <Input type="text" className="form-control rounded-0"
                                                                id="phonenumberInput" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div className="mb-4">
                                                            <Label htmlFor="skillsInput" className="form-label">Display name publicly as</Label>
                                                            <select className="form-select mb-3 rounded-0 bg-success text-white">
                                                                <option >Mustapha Adam </option>
                                                            </select>
                                                        </div>
                                                        <p>The display name is shown in your updated User Profile</p>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <button type="button" className="mt-4 btn btn-success">Update Profile</button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <Form>
                                                <Row>
                                                    <Col lg={5}>
                                                        <div className='mb-4'>
                                                            <Label htmlFor="oldpasswordInput" className="form-label">Current
                                                                Password</Label>
                                                            <Input type="password" className="form-control rounded-0"
                                                                id="oldpasswordInput" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={5}>
                                                        <div className='mb-4'>
                                                            <Label htmlFor="newpasswordInput" className="form-label">New
                                                                Password</Label>
                                                            <Input type="password" className="form-control rounded-0"
                                                                id="newpasswordInput" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={5}>
                                                        <div className='mb-4'>
                                                            <Label htmlFor="confirmpasswordInput" className="form-label">Re-type New
                                                                Password</Label>
                                                            <Input type="password" className="form-control rounded-0"
                                                                id="confirmpasswordInput" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className='mt-4'>
                                                            <button type="button" className="btn btn-success">Reset
                                                                Password</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
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

export default EditProfile;
