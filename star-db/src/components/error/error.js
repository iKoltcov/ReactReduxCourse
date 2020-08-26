import React from 'react'

const Error = ({children}) => {
    return (
        <div class="card text-white bg-danger mb-3" style={{'max-width': '20rem'}}>
            <div class="card-body">
                <h4 class="card-title">Error</h4>
                <p class="card-text">{children}</p>
            </div>
        </div>
    );
};

export default Error;