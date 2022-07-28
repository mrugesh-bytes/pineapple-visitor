import React from 'react';
import Modal from 'react-modal';

const Popup = (props: any) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function closeModal() {
        props.setOpen(false);
    }

    return (
        <Modal
            isOpen={props.open}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            // shouldCloseOnOverlayClick={false}
        >
            {props.bodyData}
        </Modal>
    );
};

export default Popup;
