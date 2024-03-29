import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";
// Pages > Team
import Team from "./team/reducer";

// E-SERIES
import Exam from "./exams/reducer";
import Subject from "./subjects/reducer";


const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Team,

    Exam,
    Subject
});

export default rootReducer;