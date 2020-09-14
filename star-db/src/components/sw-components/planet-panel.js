import React from 'react';

import DetailsPanel from '../details-panel/details-panel.js';
import DetailsView, { Detail } from '../details-view/details-view.js';

import withData from '../hoc-helpers/with-data.js';
import withSwapiService from '../hoc-helpers/with-swapi-service.js';

const PlanetPanel = ({ data }) => {
    return (
        <DetailsPanel
            data={data}
            renderData={(item) =>
                <DetailsView item={item}>
                    <Detail field='population' name='Population' />
                    <Detail field='rotationPeriod' name='Rotation period' />
                    <Detail field='diameter' name='Diameter' />
                </DetailsView>}
        />
    );
};

export default withSwapiService(withData(PlanetPanel))
    ((service) => { return { getData: service.getPlanet } });