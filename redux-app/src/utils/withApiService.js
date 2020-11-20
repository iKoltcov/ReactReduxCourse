import React from 'react'
import { ApiServiceConsumer } from '../components/api-service-context'

const withApiService = () => (Wrapped) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (apiService) => <Wrapped {...props} apiService={apiService} />
                }
            </ApiServiceConsumer>
        )
    }
}

export default withApiService;