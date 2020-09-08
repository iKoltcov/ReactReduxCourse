import React, { Component } from 'react';

import Spinner from '../spinner/spinner.js'
import ErrorBoundary from '../error-boundary/error-boundary.js';

import './details-panel.css';

export default class DetailsPanel extends Component {
    render() {
        const { renderData, data } = this.props;
        const content = !!data ? renderData(data) : <Spinner />;
        return(
            <div className='jumbotron character-panel'>
                <ErrorBoundary>{content}</ErrorBoundary>
            </div>
        );
    }
};