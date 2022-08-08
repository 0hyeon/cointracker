
const Base_URL ="https://api.coinpaprika.com/v1" 
  
export function fetchCoins() {
  return fetch(`${Base_URL}/coins`).then((response) =>
    response.json()
  );
}
export function fetchCoinInfo() {
  return fetch(`${Base_URL}/coins`).then((response) =>
    response.json()
  );
}