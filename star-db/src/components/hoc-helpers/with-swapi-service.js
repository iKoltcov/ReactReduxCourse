import React, { Component } from 'react';
import { SwapiServiceConsumer } from '../../contexts/swapi-service-context.js';

const withSwapiService = (Wrapped, mapMethodToProps) => {
    return class extends Component {
        render() {
            return (
                <SwapiServiceConsumer>
                    {
                        (service) => {
                            return <Wrapped {...this.props} {...mapMethodToProps(service)} />
                        }
                    }
                </SwapiServiceConsumer>
            );
        }
    };
}

export default withSwapiService;