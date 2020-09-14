import React from 'react';

import withData from '../hoc-helpers/with-data.js';
import withSwapiService from '../hoc-helpers/with-swapi-service.js';
import ListItem from '../list-item/list-item';

const List = ({ data, itemId, onChoseItem }) => {
    return <ListItem data={data} page={itemId} onChoseItem={onChoseItem} />;
};

const CharactersList = withSwapiService(withData(List))
    (    (service) => { return { getData: service.getCharacters }; });

const PlanetsList = withSwapiService(withData(List))
    (    (service) => { return { getData: service.getPlanets }; });

const StarshipsList = withSwapiService(withData(List))
    (    (service) => { return { getData: service.getStarships }; });

export {
    CharactersList,
    PlanetsList,
    StarshipsList
};