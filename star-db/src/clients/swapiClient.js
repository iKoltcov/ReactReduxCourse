export default class SwapiClient {
    _baseUrl = `https://swapi.dev/api`;

    async getResource (url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${this._baseUrl}${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        return await this.getResource(`/people/`)
            .results;
    }
}