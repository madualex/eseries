import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Input, Label, Row, Button, FormFeedback, Alert, Form, Spinner } from 'reactstrap';
import SignInLeft from './SignInLeft';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Images
import eseriesLogo from "../assets/images/eseries/logo.png";

// actions
import { registerUser, apiError, resetRegisterFlag } from "../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

// Formik validation
import * as Yup from "yup";
import { useFormik } from 'formik';

// import withRouter from '../../Components/Common/withRouter';
import withRouter from '../Components/Common/withRouter';


const SignUpOTP = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {

        },
        validationSchema: Yup.object({

        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const { error, registrationError, loading, success } = useSelector(state => ({
        registrationError: state.Account.registrationError,
        success: state.Account.success,
        error: state.Account.error,
        loading: state.Login.loading,
    }));

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => history("/login"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, success, error, history]);

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
                            <div className="hero__card py-5 bg-white rounded h-100">
                                <h2 className='text-success fw-semibold text-center my-5'>Enter OTP</h2>
                                <div className="mt-5">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                        className="needs-validation"
                                        action="#"
                                    >
                                        {success && success ? (
                                            <>
                                                {toast("Your Redirect To Login Page...", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                                <ToastContainer autoClose={2000} limit={1} />
                                                <Alert color="success">
                                                    User Registered Successfully.You are now being redirected to the Login Page...
                                                </Alert>
                                            </>
                                        ) : null}

                                        <div className="mb-5 mt-5 text-center">
                                            <Label htmlFor="otp" className="form-label text-muted fw-normal">Enter code sent to you</Label>
                                            <Input
                                                name="otp"
                                                className="text-center fs-1 rounded-0 px-0 border-start-0 border-top-0 border-end-0 w-100"
                                                id="otp"
                                                placeholder="- - - - - -"
                                                type="password"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.otp || ""}
                                                invalid={
                                                    validation.touched.otp && validation.errors.otp ? true : false
                                                }
                                            />
                                            {validation.touched.first_name && validation.errors.otp ? (
                                                <FormFeedback type="invalid">{validation.errors.otp}</FormFeedback>
                                            ) : null}
                                        </div>
                                        <div className="mt-5 text-center">
                                            <Link to='/' color="success" className="">
                                                Resend Code
                                            </Link>
                                        </div>
                                        
                                        {/* I expect that the button below when clicked will take and validate the OTP before redirecting them to the login page, meaning the submit handler in this case would submit the data to the backend and then redirect the user to the where they can now signin using the usenavigate hook */}
                                        {/* <div className="mt-4">
                                            <Button disabled={error ? null : loading ? true : false} color="success" className="btn btn-success w-100" type="submit">
                                                {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                Proceed
                                            </Button>
                                        </div> */}
                                        <div className="mt-5">
                                            <Link to='/login' color="success" className="btn btn-success w-100">
                                                Proceed
                                            </Link>
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

export default SignUpOTP;