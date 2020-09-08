import React, { Component } from 'react';

const withData = (Wrapped, getData) => {
    return class extends Component {
        state = {
            data: null
        }

        componentDidMount() {
            this.updateData();
        }
    
        componentDidUpdate(prevProps) {
            if(this.props.itemId !== prevProps.itemId){
                this.updateData();
            }
        }
    
        updateData() {
            getData(this.props.itemId)
                .then((result) => {
                    this.setState({ data: result });
                });
        }

        render() 
        {
            return <Wrapped {...this.props} data={this.state.data} />;
        }
    }
};

export default withData;