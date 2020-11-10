import React, { useState } from 'react';
import Row from '../row/row';
import { PlanetsList } from '../sw-components/sw-lists';
import PlanetPanel from '../sw-components/planet-panel';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({itemId, history}) => {
    const [page] = useState(1);

    return <Row
        left={<PlanetsList itemId={page} onChoseItem={(itemId) => history.push(`/planets/${itemId}`)} />}
        right={<PlanetPanel itemId={itemId} />}
    />
}

export default withRouter(PlanetsPage);