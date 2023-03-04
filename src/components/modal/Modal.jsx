import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './modal.module.scss';
const cx = classNames.bind(styles);
const Modal = (props) => {
    return (
        <div id={props.id} className={cx('modal')}>
            {props.children}
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Modal;
