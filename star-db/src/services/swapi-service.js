export default class SwapiService {
    _baseUrl = `https://swapi.py4e.com/api`;
    _imageBaseUrl = `https://starwars-visualguide.com/assets/img`;

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${this._baseUrl}${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getCharacters = async (page = 1) => {
        const response = await this.getResource(`/people/?page=${page}`); 
        return response.results.map(this._transormCharacter);
    }

    getCharacter = async (id) => {
        const response = await this.getResource(`/people/${id}/`); 
        return this._transormCharacter(response);
    }

    getPlanets = async (page = 1) => {
        const response = await this.getResource(`/planets/?page=${page}`); 
        return response.results.map(this._transormPlanet);
    }

    getPlanet = async (id) => {
        const response = await this.getResource(`/planets/${id}/`); 
        return this._transormPlanet(response);
    }

    getStarships = async (page = 1) => {
        const response = await this.getResource(`/starships/?page=${page}`); 
        return response.results.map(this._transormStarship);
    }

    getStarship = async (id) => {
        const response = await this.getResource(`/starships/${id}/`); 
        return this._transormStarship(response);
    }

    _parseId = (obj) => {
        return obj.url.match(/\/([0-9]*)\/$/)[1];
    }

    _transormCharacter = (obj) => {
        const id = this._parseId(obj);
        return {
            id,
            name: obj.name,
            gender: obj.gender,
            hairColor: obj.hair_color,
            birthYear: obj.birth_year,
            height: obj.height,
            mass: obj.mass,
            eyeColor: obj.eye_color,
            imageUrl: `${this._imageBaseUrl}/characters/${id}.jpg`,
        };
    };

    _transormPlanet = (obj) => {
        const id = this._parseId(obj);
        return {
            id,
            name: obj.name,
            population: obj.population,
            rotationPeriod: obj.rotation_period,
            diameter: obj.diameter,
            imageUrl: `${this._imageBaseUrl}/planets/${id}.jpg`,
        };
    };

    _transormStarship = (obj) => {
        const id = this._parseId(obj);
        return {
            id,
            name: obj.name,
            model: obj.model,
            manufacturer: obj.manufacturer,
            costInCredits: obj.cost_in_credits,
            length: obj.length,
            crew: obj.crew,
            passengers: obj.passengers,
            cargoCapacity: obj.cargo_capacity,
            imageUrl: `${this._imageBaseUrl}/starships/${id}.jpg`,
        };
    };
}