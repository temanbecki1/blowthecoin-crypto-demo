import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';




function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
      // axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      // .then(res => {
      //   console.log(res.data);
      // })
      // .catch(err => {
      //   console.log(err);
      // })

    const fetchData = async () => {
      try {
        const result = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        setCoins(result.data);
        // console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type="text" placeholder="Search a currency" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} marketCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} />
        )
      })}
    </div>
  );
}

export default App;
