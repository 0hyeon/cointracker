const BASE_URL ="https://api.coinpaprika.com/v1" 
const BASE_URL_2 ="https://ohlcv-api.nomadcoders.workers.dev" 
  
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) =>
    response.json()
  );
}
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinHistory(coinId:string){
  // const endData= Math.floor(Date.now()/1000)
  // const startDate = endData - 60 * 60 * 23 * 7 * 1
  return fetch(`${BASE_URL_2}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}