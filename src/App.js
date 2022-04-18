import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [coins, setCoins] = useState([]);

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
          console.log(coins)
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();

    }, []);
    // let id = "bitcoin";  // this is the id of the coin that we want to get data for
    // console.log(coins[].id);
    // let coin = coins.find(coin => coin.id === id);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type="text" placeholder="Search a currency" className="coin-input" />
        </form>
      </div>

    </div>
  );
}

export default App;
