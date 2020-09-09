import React from 'react';

import DetailsPanel from '../details-panel/details-panel.js';
import DetailsView, { Detail } from '../details-view/details-view.js';
import withData from '../hoc-helpers/with-data.js'
import SwapiService from '../../services/swapi-service.js';

const swapiService = new SwapiService();
const { getCharacter } = swapiService;

const CharacterPanel = ({data}) => 
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

export default withData(CharacterPanel, getCharacter);