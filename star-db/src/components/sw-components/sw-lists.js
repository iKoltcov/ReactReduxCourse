import React from 'react';

import withData from '../hoc-helpers/with-data.js';
import ListItem from '../list-item/list-item';
import SwapiService from '../../services/swapi-service.js';

const swapiService = new SwapiService();
const { getCharacters, getPlanets, getStarships } = swapiService;

const List = ({ data, itemId, onChoseItem }) => {
    return <ListItem data={data} page={itemId} onChoseItem={onChoseItem} />;
};

const CharactersList = withData(List, getCharacters);
const PlanetsList = withData(List, getPlanets);
const StarshipsList = withData(List, getStarships);

export {
    CharactersList,
    PlanetsList,
    StarshipsList
};