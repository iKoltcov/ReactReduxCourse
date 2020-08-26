import React, { Component } from 'react';

import Error from '../error/error.js'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({ hasError: true });
        console.log(error, errorInfo);
    }
    
    render() {
        if(this.state.hasError)
        {
            return <Error>Something went wrong</Error>;
        }

        return this.props.children;
    }
}