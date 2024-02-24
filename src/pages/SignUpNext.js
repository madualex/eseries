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


const SignUpNext = (props) => {
    const [passwordShow, setPasswordShow] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            user_name: '',
            password: '',
            // confirm_password: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
            // confirm_password: Yup.string().when("password", {
            //     is: val => (val && val.length > 0 ? true : false),
            //     then: Yup.string().oneOf(
            //         [Yup.ref("password")],
            //         "Confirm Password Isn't Match"
            //     )
            // })
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const { error, registrationError, errorMsg, loading, success } = useSelector(state => ({
        registrationError: state.Account.registrationError,
        // success: state.Account.success,
        error: state.Account.error,
        loading: state.Login.loading,
        errorMsg: state.Login.errorMsg,
    }));

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => navigate("/signup-otp"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, error, navigate, success]);

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
                            <div className="hero__card py-5 bg-white rounded h-100">
                                <p className="p__text text-center">Already have an account? <a href='/login' className='text-success'>Sign In</a></p>
                                <h2 className='text-success fw-semibold text-center my-5'>Get Started</h2>
                                {errorMsg && errorMsg ? (<Alert color="danger"> {errorMsg} </Alert>) : null}
                                <div className="mt-5">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                        className="needs-validation"
                                        action="#"
                                    >

                                        {error && error ? (
                                            <Alert color="danger"><div>
                                                {registrationError}
                                                The Username is not available, Please pick another one</div></Alert>
                                        ) : null}

                                        <div className="mb-4 mt-5">
                                            <Label htmlFor="user_name" className="form-label text-muted fw-normal mb-0">User Name</Label>
                                            <Input
                                                name="user_name"
                                                className="text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0"
                                                id="user_name"
                                                placeholder=""
                                                type="text"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.user_name || ""}
                                                invalid={
                                                    validation.touched.user_name && validation.errors.user_name ? true : false
                                                }
                                            />
                                            {validation.touched.user_name && validation.errors.user_name ? (
                                                <FormFeedback type="invalid">{validation.errors.user_name}</FormFeedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label text-muted fw-normal" htmlFor="password-input">Password</Label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <Input
                                                    name="password"
                                                    value={validation.values.password || ""}
                                                    type={passwordShow ? "text" : "password"}
                                                    className="text-muted fs-6 rounded-0 px-0 border-start-0 border-top-0 border-end-0"
                                                    placeholder="Enter Password"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    invalid={
                                                        validation.touched.password && validation.errors.password ? true : false
                                                    }
                                                />
                                                {validation.touched.password && validation.errors.password ? (
                                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                ) : null}
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}>
                                                    <i className="ri-eye-fill align-middle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* I expect that the button below when clicked will take and validate the user inputs before redirecting them to the next form, meaning the submit handler in this case would submit the data to the backend and then redirect the user to the next form using the usenavigate hook */}
                                        {/* <div className="mt-4">
                                            <Button disabled={error ? null : loading ? true : false} color="success" className="btn btn-success w-100" type="submit">
                                                {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                Next
                                            </Button>
                                        </div> */}
                                        <div className="mt-4">
                                            <Link to='/signup-otp' color="success" className="btn btn-success w-100">
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

export default withRouter(SignUpNext);