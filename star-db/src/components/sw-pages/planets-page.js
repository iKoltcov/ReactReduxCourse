import React, { useState } from 'react'
import Row from '../row/row';
import { PlanetsList } from '../sw-components/sw-lists';
import PlanetPanel from '../sw-components/planet-panel';

const PlanetsPage = () => {
    const [ item, setItem ] = useState(null);
    const [ page ] = useState(1);

    return <Row
        left={<PlanetsList itemId={page} onChoseItem={setItem} />}
        right={<PlanetPanel itemId={item} />} />
}

export default PlanetsPage;