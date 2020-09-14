import React, { useContext } from 'react';
import SwapiServiceContext from '../../contexts/swapi-service-context.js';

const withSwapiService = Wrapped => mapMethodToProps => props => {
    const service = useContext(SwapiServiceContext);

    return <Wrapped {...props} {...mapMethodToProps(service)} />
}

export default withSwapiService;