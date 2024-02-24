import React, { useCallback, useMemo, useState } from 'react';
import classnames from 'classnames';
import { Button, Container, Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { Questions } from './data';


let PageSize = 1; // the amount of question visible in a page

const PracticeTest = () => {

    document.title = "Test Instructions | Eseries";

    const [modal, setModal] = useState(false);

    const toggle = useCallback(() => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    }, [modal]);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return Questions.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = Questions.length;

    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-1'>
                        <Link to='/instruction'><i className='fs-2 fw-bold ri-arrow-left-line'></i></Link>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                                <p className='fs-6 fw-semibold text-success mb-1'>CBT Practice Test</p>
                                <h3>English Language</h3>
                                <p className='fs-6 text-muted fw-semibold'>UTME 2014</p>
                            </div>

                            <div className='d-flex align-items-center'>
                                <i className='fs-1 text-danger ri-alarm-fill ri-xl me-3'></i><span className='fs-5 text-danger fw-semibold'>00:30:19</span>
                                <button className='w-lg btn btn-success ms-5' onClick={() => { toggle()}}>Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className='me-5 ms-2 mb-5 mt-5 px-5 pb-5' style={{ maxWidth: '900px' }}>
                        {currentTableData.map((item, id) => {
                            return (
                                <div key={id}>
                                    <p className='fs-5 mx-5 px-5 fw-bold'>{item.ques}
                                        <span className='d-block fw-bold text-decoration-underline mt-3'>{item.underlined}</span>
                                    </p>

                                    <div className='fs-5 mx-5 px-5 fw-bold'>
                                        <input type="radio" name="eng" id={item.idA} className='radio__input' /><span className='ms-2'>a. <span>{item.optionA}</span></span>
                                    </div>
                                    <div className='fs-5 mx-5 px-5 fw-bold'>
                                        <input type="radio" name="eng" id={item.idB} className='radio__input' /><span className='ms-2'>b. <span>{item.optionB}</span></span>
                                    </div>
                                    <div className='fs-5 mx-5 px-5 fw-bold'>
                                        <input type="radio" name="eng" id={item.idC} className='radio__input' /><span className='ms-2'>c. <span>{item.optionC}</span></span>
                                    </div>
                                    <div className='fs-5 mx-5 px-5 fw-bold'>
                                        <input type="radio" name="eng" id={item.idD} className='radio__input' /><span className='ms-2'>d. <span>{item.optionD}</span></span>
                                    </div>
                                </div>
                            );
                        })}
                        <div className='mx-5 px-5 mt-5 d-flex justify-content-between'>
                            <Button to='/practice-test' className={classnames({ disabled: currentPage === 1 }, 'w-sm btn btn-success')} onClick={onPrevious}><i className='ri-arrow-left-s-line me-2 ri-xl align-middle'></i>Previous</Button>
                            <Button to='/practice-test' className={classnames({ disabled: currentPage === lastPage }, 'w-sm btn btn-success')} onClick={onNext}>Next<i className=' ri-arrow-right-s-line ri-xl align-middle ms-2'></i></Button>
                        </div>
                        <div className='ms-2 px-5 mt-5 pt-5'>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={Questions.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>

                    <Modal id='showModal' fade={true} isOpen={modal} toggle={toggle} centered={true}>
                        <ModalBody className="py-4">
                            <div className="mt-2 text-center">
                                <h2 className='mt-4'>Submit?</h2>
                                <p className="fs-15 mt-4 text-muted mb-5">
                                    Are you sure you want to end the exam and submit ?
                                </p>
                            </div>
                            <div className="text-center mt-2 mb-2">
                                <Link
                                    to='/review'
                                    className="btn w-lg btn-success"
                                >
                                    Submit
                                </Link>
                            </div>
                            <div className="text-center mt-1 mb-4">
                                <button
                                    type="button"
                                    className="w-lg btn btn-ghost-dark "
                                    onClick={() => {
                                        setModal(false);
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </ModalBody>
                    </Modal>

                </Container>
            </div >
        </React.Fragment >
    );
};

export default PracticeTest;
