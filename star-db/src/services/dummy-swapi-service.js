export default class SwapiService {
    getCharacters = async (page = 1) => {
        console.log('getCharacters');
        return this._characters;
    }

    getCharacter = async (id) => {
        console.log(`getCharacter ${id}`);
        return this._characters[id];
    }

    getPlanets = async (page = 1) => {
        console.log('getPlanets');
        return this._planets;
    }

    getPlanet = async (id) => {
        console.log(`getPlanet ${id}`);
        return this._planets[id];
    }

    getStarships = async (page = 1) => {
        console.log('getStarships');
        return this._starships;
    }

    getStarship = async (id) => {
        console.log(`getStarship ${id}`);
        return this._starships[id];
    }

    _characters = [
        {
            id: 0,
            name: 'Bilbo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown',
            imageUrl: 'https://placeimg.com/400/500/people'
        },
        {
            id: 1,
            name: 'Frodo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown',
            imageUrl: 'https://placeimg.com/400/500/people'
        }
    ];

    _planets = [
        {
            id: 0,
            name: 'Earth [TEST DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 seconds',
            diameter: '12.742 km',
            imageUrl: 'https://placeimg.com/400/400/nature'
        },
        {
            id: 1,
            name: 'Venus [TEST DATA]',
            population: 'not known',
            rotationPeriod: '243 days',
            diameter: '12.104 km',
            imageUrl: 'https://placeimg.com/400/400/nature'
        }
    ];

    _starships = [
        {
            id: 0,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'Northrop Grumman Shipbuilding',
            costInCredits: 'not known',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100,
            imageUrl: 'https://placeimg.com/600/400/tech'
        }
    ];
}