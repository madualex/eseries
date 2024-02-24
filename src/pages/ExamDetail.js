import React, { useEffect, useState } from 'react';
import { Col, Container, Input, Row } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Examinations, Subjects, Years } from './data';

import { getSubjectData } from '../store/actions';

const ExamDetail = () => {

    const {examId} = useParams();
    // const singleExam = Examinations.find(item => item.id === examId);
    const singleExam = Examinations.find((item) => item.id === Number(examId));
    console.log('single', singleExam);
    

    // const {name, subject, year} = singleExam

    const dispatch = useDispatch();

    const { subjectData } = useSelector((state) => ({
        subjectData: state.Subject.subjectData
    }));

    console.log('subjects', subjectData);

    const [selectedExam, setSelectedExam] = useState({ exam: '', year: '' });
    const [isExam, setIsExam] = useState(false);
    const [isYear, setIsYear] = useState(false);
    const [subjects, setSubjects] = useState(null || []);

    const handleSelectedExam = (item) => {
        setSelectedExam(prev => ({ ...prev, exam: item }));
        setIsExam(true);
    };

    useEffect(() => {
        dispatch(getSubjectData())
    }, [dispatch]);

    useEffect(() => {
        setSubjects(subjectData)
    }, [subjectData]);

    const handleSelectedYear = (item) => {
        setSelectedExam(prev => ({ ...prev, year: item }));
        setIsYear(true);
    }

    const notDisabled = isExam && isYear === true;

    function activeYear() {
        const divElList = document.querySelectorAll('.active__year');

        divElList.forEach((divEl) => {
            divEl.addEventListener('click', () => {
                if (document.querySelector('.active-year')) {
                    divEl.classList.remove('active-year');
                } else {
                    divEl.classList.add('active-year');
                }
                handleSelectedYear(divEl.textContent);
            });
        })
    }

    function activeSubject() {
        const divElList = document.querySelectorAll('.active__subject');

        divElList.forEach((divEl) => {
            divEl.addEventListener('click', () => {
                if (document.querySelector('.active-subject')) {
                    divEl.classList.remove('active-subject');
                } else {
                    divEl.classList.add('active-subject');
                }
                handleSelectedExam(divEl.textContent);
            });
        })
    }


    //Search Exams
    const searchExams = () => {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("search-exam");
        filter = input.value.toUpperCase();

        var examList = document.getElementsByClassName("exams-list");
        Array.prototype.forEach.call(examList, function (el) {
            li = el.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                div = li[i].getElementsByTagName("div")[0];
                txtValue = div.textContent || div.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        });
    };

    document.title = "Exam | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='d-flex mt-3 align-items-center'>
                        <Link to='/exams'><i className='fs-2 fw-bold ri-arrow-left-line me-4 '></i></Link>
                        {/* <h4 className='mt-2'>UTME/JAMB</h4> */}
                        <h4 className='mt-2'>{singleExam.name}</h4>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mt-3'>
                        <h5 className='fw-bold'>Choose a Subject</h5>
                        <div className='position-relative btn btn-icon btn-topbar btn-soft-success rounded-circle'>
                            <i className='bx bx-bell fs-22 '></i>
                            <span
                                className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">2<span
                                    className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                    <div className="pt-3 col-lg-4">
                        <div className="search-box">
                            <input
                                onKeyUp={searchExams}
                                id="search-exam"
                                type="text"
                                className="form-control"
                                placeholder="Search an Exam"
                                style={{ background: '#F8F8F8' }}
                            />
                            <i className="ri-search-2-line search-icon"></i>
                        </div>
                    </div>
                    <ul className='row exams-list px-0 mt-4'>
                        {/* {subjects.map(subject => ( */}
                        {singleExam.subjects.map(subject => (
                            <li className='col-3' key={subject} style={{ listStyle: 'none' }}>
                                <div onClick={activeSubject} className='my-2 pt-3 pb-1 rounded border border-success text-center active__subject' role='button' style={{ background: '#F8F8F8' }}>
                                    <h5 className="fw-bold mb-3">{subject}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='mt-5 mb-4'>
                        <h5 className='fw-bold'>Select Year</h5>
                    </div>
                    <Row className="mb-5">
                        {singleExam.year.map(item => (
                            <Col key={item} lg={1} className='mx-2'>
                                <div onClick={activeYear} className='my-2 pt-1 rounded border border-success active__year' role='button' style={{ width: '80px', height: '30px', background: '#f8f8f8' }}>
                                    <h5 className="fw-bold mb-3 text-center">{item}</h5>
                                </div>
                            </Col>

                        ))}
                    </Row>

                    <Link to='/instruction' className={!notDisabled ? `w-lg btn btn-success disabled` : 'w-lg btn btn-success'}>Start</Link>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ExamDetail;
