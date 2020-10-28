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
        return fetch(`${this.url}`, {
            method: 'POST',
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(json => new this.Type(json))
    }

    getAll = () => {

    }

    getById = (id) => {

    }

    updateById = (ids) => {

    }

    deleteById = (id) => {

    }
}