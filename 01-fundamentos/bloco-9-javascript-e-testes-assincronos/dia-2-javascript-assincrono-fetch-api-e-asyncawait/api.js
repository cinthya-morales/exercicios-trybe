
const fetchCripto = async () => {
const url_API = `https://api.coincap.io/v2/assets`;
  
const coins = await fetch(url_API)
.then(response => response.json())
.then(data => (data.data))
.catch((error) => error.toString())
return coins;
};

const getCripto = async () => {
  const coins = await fetchCripto();

  const list = document.getElementById('list');
  
  coins.filter((_, index) => index < 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const price = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${price.toFixed(2)}`; 

    list.appendChild(newLi);
  })
}

window.onload = () => getCripto();