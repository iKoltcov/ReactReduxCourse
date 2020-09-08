import React from 'react';

import DetailsPanel from '../details-panel/details-panel.js';
import DetailsView, { Detail } from '../details-view/details-view.js';
import withData from '../hoc-helpers/with-data.js'
import SwapiService from '../../service/swapi-service.js';

const swapiService = new SwapiService();
const { getPlanet } = swapiService;

const PlanetPanel = ( {data} ) => {
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
}

export default withData(PlanetPanel, getPlanet);