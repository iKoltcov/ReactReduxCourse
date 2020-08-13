export default class SwapiService {
    _baseUrl = `https://swapi.dev/api`;

    async getResource (url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${this._baseUrl}${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getCharacters(page = 1) {
        const response = await this.getResource(`/people/?page=${page}`); 
        return response.results.map(this.transormCharacter);
    }

    async getCharacter(id) {
        const response = await this.getResource(`/people/${id}/`); 
        return this.transormCharacter(response);
    }

    transormCharacter = (obj) => {
        const id = obj.url.match(/\/([0-9]*)\/$/)[1];
        return {
            id,
            name: obj.name,
            gender: obj.gender,
            hairColor: obj.hair_color,
            birthYear: obj.birth_year,
            height: obj.height,
            mass: obj.mass,
            eyeColor: obj.eye_color,
        };
    };
}