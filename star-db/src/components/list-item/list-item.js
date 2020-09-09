import React, { Component } from 'react';

import './list-item.css';
import ErrorBoundary from '../error-boundary/error-boundary';
import Spinner from '../spinner/spinner';

export default class ListItem extends Component {
    render() {
        const { data } = this.props;
        let content = <Spinner />;

        if (!!data) {
            content = data.map((item) => {
                return <button className='btn btn-outline-success item-button'
                               key={item.id}
                               onClick={() => this.props.onChoseItem(item.id)}>
                    {item.name}
                </button>;
            });
        }

        return (
            <div className='list-panel jumbotron'>
                <ErrorBoundary>{content}</ErrorBoundary>
            </div>
        );
    }
}