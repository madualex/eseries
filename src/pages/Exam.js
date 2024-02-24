import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Examinations } from './data';

//import action
import { getExamData } from '../store/actions';

const Exam = () => {

    const dispatch = useDispatch();

    const { examData } = useSelector((state) => ({
        examData: state.Exam.examData
    }));

    console.log('data', examData);

    const [examination, setExamination] = useState([]);

    useEffect(() => {
        dispatch(getExamData())
    }, [dispatch]);

    useEffect(() => {
        setExamination(examData)
    }, [examData]);


    //Search Exams
    const searchExams = () => {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("search-exam");
        filter = input.value.toUpperCase();

        var examList = document.getElementsByClassName("exams-list");
        Array.prototype.forEach.call(examList, function (el) {
            li = el.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        });
    };

    document.title = "Home | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-5">
                <Container fluid>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className='fw-bold'>Choose an Exam</h5>
                        <div className='position-relative btn btn-icon btn-topbar btn-soft-success rounded-circle'>
                            <i className='bx bx-bell fs-22 '></i>
                            <span
                                className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">2<span
                                    className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                    <div className="pt-3 w-50">
                        <div className="search-box">
                            <input
                                onKeyUp={searchExams}
                                id="search-exam"
                                type="text"
                                className="form-control bg-soft-dark w-50 border-white"
                                placeholder="Search an Exam"
                            />
                            <i className="ri-search-2-line search-icon"></i>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <p className='fw-bold me-auto'>Take a Test</p>
                        <Link to='/all-exams' className='text-success text-decoration-underline'>View All</Link>
                    </div>

                    <ul className='row exams-list px-0'>
                        {Examinations.map(exam => (
                        // {examination.map(exam => (
                            <li className='col-4 px-3 py-2' key={exam.id} style={{listStyle: 'none'}}>
                                {/* <Link to='/exam'> */}
                                <Link to={`/exams/${exam.id}`}>
                                    <div className={`mt-2 rounded border border-${exam.color} bg-soft-${exam.color}`}>
                                        <div className="p-4 text-center">
                                            <div className="avatar-lg mb-4 mx-auto">
                                                <img src={exam.logo} alt={exam.name} className="img-fluid" />
                                            </div>
                                            <h5 className="fw-bold mb-3 text-uppercase">{exam.name}</h5>
                                            <p className="mb-0 text-success fw-semibold">Over 7,000 questions</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )).slice(0, 6)}
                    </ul>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Exam;
