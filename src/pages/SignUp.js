import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Input, Label, Row, Button, FormFeedback, Alert, Form, Spinner } from 'reactstrap';
import SignInLeft from './SignInLeft';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Images
import eseriesLogo from "../assets/images/eseries/logo.png";

// actions
import { registerUser, apiError, resetRegisterFlag, socialLogin } from "../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

// Formik validation
import * as Yup from "yup";
import { useFormik } from 'formik';

// import withRouter from '../../Components/Common/withRouter';
import withRouter from '../Components/Common/withRouter';


const SignUp = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your Firstname"),
            last_name: Yup.string().required("Please Enter Your Lastname"),
            email: Yup.string().required("Please Enter Your Email"),
            phone: Yup.string().required("Please Enter Your Telephone Number"),
        }),

        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const { error, loading, registrationError, success } = useSelector(state => ({
        registrationError: state.Account.registrationError,
        loading: state.Login.loading,
        success: state.Account.success,
        error: state.Account.error
    }));

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => navigate("/signup-next"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, navigate, success, error]);

    const signIn = (res, type) => {
        if (type === "google" && res) {
            const postData = {
                name: res.profileObj.name,
                email: res.profileObj.email,
                token: res.tokenObj.access_token,
                idToken: res.tokenId,
            };
            dispatch(socialLogin(postData, props.router.navigate, type));
        }
    };

    //handleGoogleLoginResponse
    const googleResponse = response => {
        signIn(response, "google");
    };

    document.title = "SignUp | E-Series";
    return (
        <React.Fragment>
            <div className="overflow-hidden py-5">
                <Container>
                    <div className="mb-4 bg-success " style={{ width: 'fit-content' }}>
                        <Link to="/dashboard" className="d-block">
                            <img src={eseriesLogo} alt="" height="40" />
                        </Link>
                    </div>
                    <Row className='g-5 justify-content-center'>
                        <SignInLeft />

                        <Col lg={6}>
                            <div className="hero__card py-5 bg-white rounded">
                                <p className="p__text text-center">Already have an account? <a href='/login' className='text-success'>Sign In</a></p>
                                <h2 className='text-success fw-semibold text-center my-5'>Get started</h2>
                                <div className="mt-5">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                        className="needs-validation"
                                        action="#"
                                    >
                                        <div className='d-flex mb-2 mt-3'>
                                            <div className=" me-5">
                                                <Label htmlFor="first_name" className="mb-0 form-label text-muted fw-normal">First Name</Label>
                                                <Input
                                                    name="first_name"
                                                    className="mt-0 text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0"
                                                    id="first_name"
                                                    placeholder=""
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.first_name || ""}
                                                    invalid={
                                                        validation.touched.first_name && validation.errors.first_name ? true : false
                                                    }
                                                />
                                                {validation.touched.first_name && validation.errors.first_name ? (
                                                    <FormFeedback type="invalid">{validation.errors.first_name}</FormFeedback>
                                                ) : null}
                                            </div>
                                            <div className="">
                                                <Label htmlFor="last_name" className="mb-0 form-label text-muted fw-normal">Last Name</Label>
                                                <Input
                                                    name="last_name"
                                                    className="text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0"
                                                    id="last_name"
                                                    placeholder=""
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.last_name || ""}
                                                    invalid={
                                                        validation.touched.last_name && validation.errors.last_name ? true : false
                                                    }
                                                />
                                                {validation.touched.last_name && validation.errors.last_name ? (
                                                    <FormFeedback type="invalid">{validation.errors.last_name}</FormFeedback>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="mb-2 mt-4">
                                            <Label htmlFor="username" className="form-label text-muted fw-normal">Email Address</Label>
                                            <Input
                                                name="email"
                                                className="text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0 mt-1"
                                                id="username"
                                                placeholder="123@email.com"
                                                type="email"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.email || ""}
                                                invalid={
                                                    validation.touched.email && validation.errors.email ? true : false
                                                }
                                            />
                                            {validation.touched.email && validation.errors.email ? (
                                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                            ) : null}
                                        </div>
                                        <div className=" mt-4">
                                            <Label htmlFor="phone" className="form-label text-muted fw-normal mb-0">Phone Number</Label>
                                            <Input
                                                name="phone"
                                                className="text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0 mt-0"
                                                id="phone"
                                                placeholder=""
                                                type="tel"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.phone || ""}
                                                invalid={
                                                    validation.touched.phone && validation.errors.phone ? true : false
                                                }
                                            />
                                            {validation.touched.phone && validation.errors.phone ? (
                                                <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                            ) : null}
                                        </div>
                                        {/* I expect that the button below when clicked will take and validate the user inputs before redirecting them to the next form, meaning the submit handler in this case would submit the data to the backend and then redirect the user to the next form using the usenavigate hook */}
                                        {/* <div className="mt-4">
                                            <Button disabled={error ? null : loading ? true : false} color="success" className="btn btn-success w-100" type="submit">
                                                {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                Next
                                            </Button>
                                        </div> */}
                                        <div className="mt-4">
                                            <Link to='/signup-next' color="success" className="btn btn-success w-100">
                                                Next
                                            </Link>
                                        </div>

                                        <div className="mt-5 text-center">
                                            <h5 className="fs-13 my-4 text-muted fw-normal">Sign up with your gmail</h5>
                                            <Button color="danger" className="btn-icon me-1"><i className="ri-google-fill fs-16"></i></Button>
                                        </div>

                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withRouter(SignUp);