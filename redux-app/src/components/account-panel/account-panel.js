import React from 'react'
import { Button, Label, Icon, Divider } from 'semantic-ui-react'

import './account-panel.css';

const defaultValues = {
    total: 0,
}

const AccountPanel = ({ total = defaultValues.total }) => (
    <>
        <div className='account-panel'>
            <div>
                Patrick
            </div>
            <div>
                <Button as='div' labelPosition='left'>
                    <Label basic>${total}</Label>
                    <Button icon><Icon name='shop'/></Button>
                </Button>
            </div>
        </div>
        <Divider />
    </>
);

export default AccountPanel;