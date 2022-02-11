// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  //O conjunto abaixo faz aparecer a piada ao inves do link do site. 
    .then(response => response.json())
    .then(data => console.log((data).joke));
    // .then(response => console.log(response));
};

window.onload = () => fetchJoke();
