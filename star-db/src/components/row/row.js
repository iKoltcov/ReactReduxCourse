import React from 'react'

import './row.css';

const Row = ({left, right}) => {
    return (
        <div className='row'>
            <div className='col-5 col-minimal-padding'>
                {left}
            </div>
            <div className='col col-minimal-padding'>
                {right}
            </div>
        </div>
    );
};

export default Row;