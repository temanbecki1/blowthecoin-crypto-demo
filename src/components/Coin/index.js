import React from 'react'

export const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {


  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin-col'>
          <img src={image} alt='coin' />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-market-cap'>{marketCap.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}


        </div>
      </div>
    </div>
  )
}


export default Coin
