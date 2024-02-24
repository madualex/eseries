import React from 'react';
import { Container} from 'reactstrap';
import chatBg from '../assets/images/eseries/chat-bg.png'


const Chat = () => {

    document.title = "Chat | Eseries";


    return (
        <React.Fragment>
            <div className="page-content pt-4">
                <Container fluid>
                    <div className='mt-3'>
                        <p className='mt-2 text-success fw-semibold'>Chat</p>
                        <h4 className='mt-2 text-success'>Coming Soon...</h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={chatBg} alt=""  />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Chat;
