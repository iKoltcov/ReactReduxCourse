import React  from 'react';

import './list-item.css';
import ErrorBoundary from '../error-boundary/error-boundary';
import Spinner from '../spinner/spinner';

const ListItem = ({ data, onChoseItem }) => {
    let content = <Spinner />;

    if (!!data) {
        content = data.map((item) => {
            return <button className='btn btn-outline-success item-button'
                           key={item.id}
                           onClick={() => onChoseItem(item.id)}>
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

export default ListItem;