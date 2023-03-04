import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import { forwardRef } from 'react';
const Input = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            type={props.type}
            onChange={props.onChange ? (e) => props.onChange(e) : ''}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
});

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
