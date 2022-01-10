import React, { Component } from 'react'
import { Button, Label, Icon, Divider, Loader } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { updateUser } from "../../actions";

import './account-panel.css';
import withApiService from "../../utils/withApiService";

class AccountPanel extends Component {
    componentDidMount = () => {
        const { apiService, updateUser } = this.props;
        const user = apiService.getUser();
        updateUser(user);
    }

    render() {
        const user = this.props.user;
        if(!user){
            return (
                <Loader />
            )
        }

        const totalPurchased = user.purchased.reduce((a, b) => a + b.price, 0)
        return (
            <>
                <div className='account-panel'>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        <Button as='div' labelPosition='left'>
                            <Label basic>${totalPurchased}</Label>
                            <Button icon><Icon name='shop'/></Button>
                        </Button>
                    </div>
                </div>
                <Divider />
            </>
        )
    }
}

export default withApiService()(connect(state => ({user: state.user}), { updateUser })(AccountPanel))