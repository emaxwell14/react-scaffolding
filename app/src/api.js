import 'whatwg-fetch';

const URL = 'http://localhost:8080/';
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

// TODO replace with restful.js middleware
const get = () => fetch(URL, options).then(response => response.json()).then(json => json.text);
const getTasks = () => fetch(`${URL}tasks`, options).then(response => response.json());
const getTask = taskId => fetch(`${URL}tasks/${taskId}`, options).then(response => response.json());

const api = { get, getTasks, getTask };

export default api;
