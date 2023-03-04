import React, { useRef } from 'react';
import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';
import PropTypes from 'prop-types';

const TraninerModal = ({ item }) => {
    const iframeRef = useRef(null);
    const onClose = () => {
        iframeRef.current.setAttribute('src', '');
    };
    return (
        <Modal id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} height="500px" width="100%" title="trainer"></iframe>
            </ModalContent>
        </Modal>
    );
};
TraninerModal.propTypes = {
    item: PropTypes.object.isRequired,
};
export default TraninerModal;
