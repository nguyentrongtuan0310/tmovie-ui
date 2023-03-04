import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const cx = classNames.bind(styles);
const Button = ({ to, href, onClick, className, size, type, children, disabled, ...pram }) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...pram,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [type]: type,
        [size]: size,
        [className]: className,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Button;
