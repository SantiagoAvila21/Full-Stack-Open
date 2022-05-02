import axios from 'axios';
const Url = 'http://localhost:3001/persons';

const getPersons = () => {
    const req = axios.get(Url);
    return req.then(response => response.data)
}

const createPerson = newPerson => {
    const req = axios.post(Url, newPerson);
    return req.then(response => response.data);
}

const deletePerson = id => {
    const req = axios.delete(`${Url}/${id}`);
    return req.then(response => response.data);
}

const updatePerson = (id, newObject) => {
    const req = axios.put(`${Url}/${id}`, newObject);
    return req.then(response => response.data);
}

const objToExport = { getPersons, createPerson, deletePerson, updatePerson }

export default objToExport;