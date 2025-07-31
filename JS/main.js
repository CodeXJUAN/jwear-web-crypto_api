const url = "https://api.coingecko.com/api/v3/simple/price";
const params = new URLSearchParams({
  ids: "bitcoin,ethereum,solana,dogecoin,tron,polkadot,okb,litecoin,chainlink,sui,maker,gala",
  vs_currencies: "usd",
});

function PreciosCrypto() {
  fetch(`${url}?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([coin, details]) => {
        const container = document.getElementById("prices-container");
        const coinElement = document.getElementById(`${coin}-price`);

        if (!coinElement) {
          const newElement = document.createElement("div");
          newElement.id = `${coin}-price`;
          newElement.textContent = `${coin.toUpperCase()}: $${details.usd}`;
          container.appendChild(newElement);
        } else {
          coinElement.textContent = `${coin.toUpperCase()}: $${details.usd}`;
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching prices:", error);
    });
}

PreciosCrypto();
setInterval(PreciosCrypto, 60000);
