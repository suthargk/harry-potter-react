import React from 'react';

const CountStatus = ({searchTerm ,wordCounter}) => {
    return (
        <div className='count-status'>
            Total Number of Words for <strong>{searchTerm}</strong>: {wordCounter}
        </div>
    );
};

export default CountStatus;