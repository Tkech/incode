import React from 'react'
import './Crypto.css'

const Crypto = ({image, cryptoName, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className='crypto-container'>
            <div className="crypto-row">
                <div className="crypto">
                    <img src={image} alt="coin" />
                    <h1>{cryptoName}</h1>
                    <p className="crypto-symbol">{symbol}</p>
                </div>
                <div className="crypto-data">
                    <p className="crypto-price">${price}</p>
                    <p className="crypto-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                    <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
                    )
                       : (
                        <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>  
                       ) 
                    }
<p className="crypto-marketcap">
    Mkt Cap: ${marketcap.toLocaleString()}
</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto
