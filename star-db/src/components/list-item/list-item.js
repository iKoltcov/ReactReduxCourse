import React, { Component } from 'react'

import './list-item.css';
import Spinner from '../spinner/spinner';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class ListItem extends Component {
    state = {
        itemList: null,
        isLoading: true,
    };

    componentDidMount() {
        this.updateList();
    }

    componentDidUpdate(props) {
        if(this.props.page !== props.page){
            this.setState({ itemList: null, isLoading: true });
            this.updateList();
        }
    }

    updateList = () => {
        this.props.getData(this.props.page)
            .then((results) => {
                const itemList = results.map( (item) => ({ id: item.id, name: item.name }));
                this.setState({ itemList, isLoading: false });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { itemList, isLoading } = this.state;
        let content = <Spinner />;

        if(!isLoading)
        {
            const items = itemList.map((item) => {
                    return (<button className='btn btn-outline-success item-button' 
                                    key={item.id} 
                                    onClick={() => this.props.onChoseItem(item.id)}>
                                        {item.name}
                            </button>);
                });
            content = !!itemList ? items : null;
        }

        return (
            <div className='list-panel jumbotron'>
                <ErrorBoundary>{content}</ErrorBoundary>
            </div>
        );
    }
}