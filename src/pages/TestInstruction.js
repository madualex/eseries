import React from 'react';
import { Container} from 'reactstrap';
import { Link } from 'react-router-dom';


const TestInstruction = () => {

    document.title = "Test Instructions | Eseries";

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1'>
                        <Link to={`/exams`}><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                    </div>
                    <div className='mt-4'>
                        <p className='fs-6 fw-semibold text-success mb-1'>CBT Practice Test</p>
                        <h3>English Language</h3>
                        <p className='fs-6 text-muted fw-semibold'>UTME 2014</p>
                    </div>

                    <div className='d-flex align-items-center mt-5'>
                        <p className='text-success me-5 mb-0'>Questions</p>
                        <p className='text-success ms-5 mb-0'>Duration</p>
                    </div>
                    <div className='d-flex align-items-center mb-5'>
                        <div className='d-flex align-items-center me-5 mt-0'>
                            <i className='ri-question-fill ri-xl text-success me-2'></i>
                            <span className='fs-1 fw-semibold'>100</span>
                        </div>
                        <div className='d-flex align-items-center ms-4 mt-0'>
                            <i className='ri-timer-fill ri-xl text-success me-2'></i>
                            <span className='fs-1 fw-semibold'>60 <span>mins</span></span>
                        </div>
                    </div>
                    <p className='fs-6 fw-semibold text-success'>Instructions</p>
                    <ul className='mx-2'>
                        <li className='mb-2'>1.0 mark is awarded for correct attempts and 0.0 marks for incorrect attempts</li>
                        <li className='mb-2'>Click on options A-D to select the correct answer</li>
                        <li className='mb-2'>Ensure you have answerd all question before you submit</li>
                        <li className='mb-2'>Click Next to move to the next question or previous for previously answered questions</li>
                        <li className='mb-2'>In case you skipped any questions you can jump back to your desired question by clicking on the question number</li>
                        <li className='mb-2'>Highlighted question numbers are answerd while the ordinary ones are skipped questions</li>
                    </ul>

                    <Link to='/practice-test' className='w-lg btn btn-success mt-5'>Continue</Link>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TestInstruction;
