const URL = 'http://localhost:8080/';

const get = () =>
  fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
     'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .then(json => json.text)
    .catch(e => console.error(e));

const api = { get }; 

export default api;
