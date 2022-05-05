import React from 'react';

const Heading = ({heading, totalNumber}) => {
    console.log(totalNumber)
    return (
        <div className='heading'>
            <h2 className='secondary-heading'><span>{heading} </span><span style={{fontSize: "16px", fontStyle: "italic"}}>({totalNumber})</span></h2>
        </div>
    );
};

export default Heading;