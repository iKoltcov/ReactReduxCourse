import React from 'react'
import { Container, Header as SemanticHeader } from 'semantic-ui-react'

import AccountPanel from '../account-panel/account-panel.js'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Container className='header'>
            <Link to='/'><SemanticHeader as='h1'>ReStore</SemanticHeader></Link>
            <AccountPanel />
        </Container>
    );
}

export default Header;