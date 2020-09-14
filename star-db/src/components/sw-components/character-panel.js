import React from 'react';

import withData from '../hoc-helpers/with-data.js'
import withSwapiService from '../hoc-helpers/with-swapi-service.js';

import DetailsPanel from '../details-panel/details-panel.js';
import DetailsView, { Detail } from '../details-view/details-view.js';

const CharacterPanel = ( { data } ) =>
{
    return (
        <DetailsPanel 
            data={data}
            renderData={
                (item) => 
                    <DetailsView item={item}>
                        <Detail field='gender' name='Gender' />
                        <Detail field='birthYear' name='Birth year' />
                        <Detail field='height' name='Height' />
                        <Detail field='mass' name='Mass' />
                        <Detail field='hairColor' name='Hair color' />
                        <Detail field='eyeColor' name='Eye color' />
                    </DetailsView>
                } 
        />    
    );
};

export default withSwapiService(withData(CharacterPanel))
    ((service) => { return { getData: service.getCharacter } } );