import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Input, Label, Row, Button, FormFeedback, Alert, Form, Spinner } from 'reactstrap';
import SignInLeft from './SignInLeft';

// Import Images
import eseriesLogo from "../assets/images/eseries/logo.png";

// actions
import { loginUser, socialLogin } from "../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

// Formik validation
import * as Yup from "yup";
import { useFormik } from 'formik';

//Social Media Imports
import { GoogleLogin } from "react-google-login";

// import withRouter from '../../Components/Common/withRouter';
import withRouter from '../Components/Common/withRouter';


const SignIn = (props) => {

    const dispatch = useDispatch();
    const { user, errorMsg, loading, error } = useSelector(state => ({
        user: state.Account.user,
        errorMsg: state.Login.errorMsg,
        loading: state.Login.loading,
        error: state.Login.error,
    }));

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);

    useEffect(() => {
        if (user && user) {
            setUserLogin({
                email: user.user.email,
                password: user.user.confirm_password
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.router.navigate));
        }
    });

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

    document.title = "SignIn | E-Series";
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
                                <p className="p__text text-center">Don't have an account? <a href='/signup' className='text-success'>Get started</a></p>
                                <h2 className='text-success fw-semibold text-center my-5'>Sign In</h2>
                                {errorMsg && errorMsg ? (<Alert color="danger"> {errorMsg} </Alert>) : null}
                                <div className="mt-5">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                        action="#">

                                        <div className="mb-4 mt-5">
                                            <Label htmlFor="username" className="form-label text-muted fw-normal">Email Address or Username</Label>
                                            <Input
                                                name="email"
                                                className="text-muted rounded-0 px-0 border-start-0 border-top-0 border-end-0"
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

                                        <div className="mb-3">
                                            <Label className="form-label text-muted fw-normal" htmlFor="password-input">Password</Label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <Input
                                                    name="password"
                                                    value={validation.values.password || ""}
                                                    type={passwordShow ? "text" : "password"}
                                                    className="text-muted fs-3 rounded-0 px-0 border-start-0 border-top-0 border-end-0"
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
                                        <div className="mt-4">
                                            <Button disabled={error ? null : loading ? true : false} color="success" className="btn btn-success w-100" type="submit">
                                                {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                Sign In
                                            </Button>
                                        </div>

                                        <div className="text-center my-2">
                                            <Link to="/forgot-password" className='text-success'>Forgot password?</Link>
                                        </div>

                                        <div className="mt-5 text-center">
                                                <h5 className="fs-13 my-4 text-muted fw-normal">Sign In with your gmail</h5>
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

export default withRouter(SignIn);