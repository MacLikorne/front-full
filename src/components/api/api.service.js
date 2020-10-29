export class ApiService {
    Type
    url
    constructor(port, endpoint, Type) {
        if (this.constructor === ApiService) {
            throw new TypeError('Can\'t be instantiated')
        } else {
            this.Type = Type
            this.url = `${window.location.protocol}//${window.location.hostname}:${port}/api/${endpoint}`
        }
    }

    create = (obj) => {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(json => new this.Type(json))
    }

    getAll = () => {
        return fetch(this.url).then(resp => resp.json()).then(json => json.map(elem => new this.Type(elem)))
    }

    getById = (id) => {
        return fetch(`${this.url}/${id}`).then(resp => resp.json()).then(json => elem => new this.Type(json))
    }

    updateById = (obj) => {
        return fetch(`${this.url}/${obj.id}`, {
            method: 'PUT',
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(json => new this.Type(json))
    }

    deleteById = (id) => {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }
}