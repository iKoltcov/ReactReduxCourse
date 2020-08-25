import React, { Component } from 'react'

import './list-item.css';
import Spinner from '../spinner/spinner';

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

        if( !isLoading && !!itemList)
        {
            content = itemList.map((item) => {
                return (<button className='btn btn-outline-success item-button' 
                                key={item.id} 
                                onClick={() => this.props.onChoseItem(item.id)}>
                                    {item.name}
                        </button>);
            });
        }
        
        return (
            <div className='col-5 list-panel jumbotron'>
                {content}
            </div>
        );
    }
}