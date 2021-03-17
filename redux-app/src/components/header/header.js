import React from 'react'
import { Container, Header as SemanticHeader } from 'semantic-ui-react'

import AccountPanel from '../account-panel/account-panel.js'

const Header = () => {
    return (
        <Container className='header'>
            <SemanticHeader as='h1'>ReStore</SemanticHeader>
            <AccountPanel />
        </Container>
    );
}

export default Header;