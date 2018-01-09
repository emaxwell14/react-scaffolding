const URL = 'http://localhost:8080/';

const get = () =>
  fetch(URL + path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
     'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .then(json => json.text)
    .catch(e => console.error(e));

const getTasks = () =>
  fetch(URL + 'tasks', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
     'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .catch(e => console.error(e));

const api = { get, getTasks }; 

export default api;
