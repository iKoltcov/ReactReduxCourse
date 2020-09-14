import React from 'react';

import DetailsPanel from '../details-panel/details-panel.js';
import DetailsView, { Detail } from '../details-view/details-view.js';

import withData from '../hoc-helpers/with-data.js';
import withSwapiService from '../hoc-helpers/with-swapi-service.js';

const StarshipPanel = ({ data }) => {
    return (
        <DetailsPanel
            data={data}
            renderData={(item) =>
                <DetailsView item={item}>
                    <Detail field='model' name='Model' />
                    <Detail field='manufacturer' name='Manufacturer' />
                    <Detail field='costInCredits' name='Cost in credits' />
                    <Detail field='length' name='Length' />
                    <Detail field='crew' name='Crew' />
                    <Detail field='passengers' name='Passengers' />
                    <Detail field='cargoCapacity' name='Cargo capacity' />
                </DetailsView>}
        />
    );
};

export default withSwapiService(withData(StarshipPanel))
    ((service) => { return { getData: service.getStarship } });