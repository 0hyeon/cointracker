import React from 'react'
import { useQuery } from 'react-query';
import { fetchCoinTickers } from '../api';


interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
      USD : {
          ath_date: string;
          ath_price: number;
          market_cap: number;
          market_cap_change_24h: number;
          percent_change_1h: number;
          percent_change_1y: number;
          percent_change_6h: number;
          percent_change_7d: number;
          percent_change_12h: number;
          percent_change_15m: number;
          percent_change_24h: number;
          percent_change_30d: number;
          percent_change_30m: number;
          percent_from_price_ath: number;
          price: number;
          volume_24h: number;
          volume_24h_change_24h: number;
      }
  };
  
}

interface ChartProps {
  coinId: string;
}

export const Price = ({coinId}:ChartProps) => {
  const {isLoading , data} = useQuery<PriceData>(["tickers",coinId], ()=> fetchCoinTickers(coinId))
  console.log(isLoading);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <div style={{ lineHeight: 1.6}}>
          <div><span style={{fontWeight:'bold'}}>price</span>: ${data?.quotes.USD.price.toFixed(3)}</div>
          <div><span style={{fontWeight:'bold'}}>ath_date</span>: ${data?.quotes.USD.ath_date}</div>
          <div><span style={{fontWeight:'bold'}}>ath_price</span>: ${data?.quotes.USD.ath_price}</div>
          <div><span style={{fontWeight:'bold'}}>market_cap</span>: ${data?.quotes.USD.market_cap}</div>
          <div><span style={{fontWeight:'bold'}}>market_cap_change_24h</span>: ${data?.quotes.USD.market_cap_change_24h}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_1h</span>: ${data?.quotes.USD.percent_change_1h}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_1y</span>: ${data?.quotes.USD.percent_change_1y}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_6h</span>: ${data?.quotes.USD.percent_change_6h}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_7d</span>: ${data?.quotes.USD.percent_change_7d}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_12h</span>: ${data?.quotes.USD.percent_change_12h}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_15m</span>: ${data?.quotes.USD.percent_change_15m}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_24h</span>: ${data?.quotes.USD.percent_change_24h}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_30d</span>: ${data?.quotes.USD.percent_change_30d}</div>
          <div><span style={{fontWeight:'bold'}}>percent_change_30m</span>: ${data?.quotes.USD.percent_change_30m}</div>
          <div><span style={{fontWeight:'bold'}}>percent_from_price_ath</span>: ${data?.quotes.USD.percent_from_price_ath}</div>
          <div><span style={{fontWeight:'bold'}}>price</span>: ${data?.quotes.USD.price}</div>
          <div><span style={{fontWeight:'bold'}}>volume_24h</span>: ${data?.quotes.USD.volume_24h}</div>
          <div><span style={{fontWeight:'bold'}}>volume_24h_change_24h</span>: ${data?.quotes.USD.volume_24h_change_24h}</div>
        </div>
      )}
    </div>
  )
}
