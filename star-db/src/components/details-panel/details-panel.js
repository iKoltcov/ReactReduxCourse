import React  from 'react';
import Spinner from '../spinner/spinner.js'
import ErrorBoundary from '../error-boundary/error-boundary.js';

import './details-panel.css';

const DetailsPanel = ({ renderData, data }) => {
    const content = !!data ? renderData(data) : <Spinner />;
    return(
        <div className='jumbotron character-panel'>
            <ErrorBoundary>{content}</ErrorBoundary>
        </div>
    );
};

export default DetailsPanel;