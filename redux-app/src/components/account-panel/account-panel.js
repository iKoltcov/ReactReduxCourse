import React, { Component } from 'react'
import { Button, Label, Icon, Divider, Loader, Dimmer, Segment } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { updateUser } from "../../actions";

import './account-panel.css';
import withApiService from "../../utils/withApiService";
import {Link} from "react-router-dom";

class AccountPanel extends Component {
    componentDidMount = () => {
        const { apiService, updateUser } = this.props;
        apiService.getUser()
            .then((data) => updateUser(data));
    }

    render() {
        const user = this.props.user;
        if(!user){
            return (
                <Segment basic>
                    <div className='account-panel'>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                    </div>
                    <Divider />
                </Segment>
            )
        }

        const totalPurchased = user.purchased.reduce((a, b) => a + b.price * b.amount, 0)
        return (
            <Segment basic>
                <div className='account-panel'>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        <Link to='/cart'>
                            <Button as='div' labelPosition='left'>
                                <Label basic>${totalPurchased}</Label>
                                <Button icon><Icon name='shop'/></Button>
                            </Button>
                        </Link>
                    </div>
                </div>
                <Divider />
            </Segment>
        )
    }
}

export default withApiService()(connect(state => ({user: state.user}), { updateUser })(AccountPanel))