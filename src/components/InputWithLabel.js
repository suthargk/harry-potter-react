import React from 'react';

const InputWithLabel = ({children, id, type="text", value, onHandleChange = f => f,  onHandleSubmit = f => f}) => {
    return (
        <form onSubmit={onHandleSubmit}>
            <label htmlFor={id}>{children}</label>
            <input id={id} type={type} value={value} onChange={onHandleChange} placeholder="Search..." />
            <button type="submit" disabled={!value}>Search</button>
        </form>
    );
};

export default InputWithLabel;