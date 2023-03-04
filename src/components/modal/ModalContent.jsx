import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './modal.module.scss';
const cx = classNames.bind(styles);
const ModalContent = ({ children, onClose }) => {
    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove(cx('active'));
        if (onClose) onClose();
    };
    return (
        <div ref={contentRef} className={cx('modal__content')}>
            {children}
            <div className={cx('modal__content__icon')} onClick={closeModal}>
                <AiOutlineClose />
            </div>
        </div>
    );
};

ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default ModalContent;
