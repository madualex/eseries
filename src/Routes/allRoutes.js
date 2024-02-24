import React from "react";
import { Navigate } from "react-router-dom";


//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
//pages
import Team from '../pages/Pages/Team/Team';


import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";


// User Profile
import UserProfile from "../pages/Authentication/user-profile";

//  ESERIES
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SignUpNext from "../pages/SignUpNext";
import SignUpOTP from "../pages/SignUpOTP";
import Homepage from "../pages/Homepage";
import AllExams from "../pages/AllExams";
import AllBlogs from "../pages/AllBlogs";
// import Study from "../pages/Study";
import ExamYear from "../pages/ExamYear";
import ExamDetail from "../pages/ExamDetail";
import PracticeTest from "../pages/PracticeTest";
import TestInstruction from "../pages/TestInstruction";
import Review from "../pages/Review";
import LearnerPreview from "../pages/LearnerPreview";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import Scoreboard from "../pages/Scoreboard";
import More from "../pages/More";
import EditProfile from "../pages/EditProfile";
import LearningPlans from "../pages/LearningPlans";
import Checkout from "../pages/Checkout";
import AllPlans from "../pages/AllPlans";
import Help from "../pages/Help";
import SavedCourses from "../pages/SavedCourses";
import ProfileSettings from "../pages/ProfileSettings";
import Exam from "../pages/Exam";

const authProtectedRoutes = [

  // ESERIES

  {path: "/home", component: <Homepage />},
  // {path: "/dashboard", component: <Homepage />},
  {path: "/exams", component: <Exam />},
  {path: "/all-exams", component: <AllExams />},
  {path: "/all-blogs", component: <AllBlogs />},
  {path: "/exam-year", component: <ExamYear />},
  // {path: "/exam", component: <ExamDetail />},
  {path: "/exams/:examId", component: <ExamDetail />},
  {path: "/practice-test", component: <PracticeTest />},
  {path: "/instruction", component: <TestInstruction />},
  {path: "/review", component: <Review />},
  { path: "/learner-preview", component: <LearnerPreview /> },
  { path: "/chat", component: <Chat /> },
  { path: "/profile", component: <Profile /> },
  { path: "/score-board", component: <Scoreboard /> },
  { path: "/more", component: <More /> },
  { path: "/edit-profile", component: <EditProfile /> },
  { path: "/learning-plans", component: <LearningPlans /> },
  { path: "/checkout", component: <Checkout /> },
  { path: "/all-plans", component: <AllPlans /> },
  { path: "/help", component: <Help /> },
  { path: "/saved-courses", component: <SavedCourses /> },
  { path: "/settings", component: <ProfileSettings /> },

  //Pages
  { path: "/pages-team", component: <Team /> },


  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
    // component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/home" /> },
  // { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  // { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  { path: "/login", component: <SignIn /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signup-next", component: <SignUpNext /> },
  { path: "/signup-otp", component: <SignUpOTP /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };