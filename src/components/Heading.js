import React from 'react';

const Heading = ({heading}) => {
    return (
        <div className='heading'>
            <h2 className='secondary-heading'>{heading}</h2>
        </div>
    );
};

export default Heading;