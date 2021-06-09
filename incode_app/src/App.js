
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Crypto from './Crypto'



function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('')
useEffect(() => {
  axios
  .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res =>{
  setCrypto(res.data);
 
}).catch(error => console.log(error))
}, []);

const userChange = e  => {
  setSearch(e.target.value)
}
const filteredCrypto = crypto.filter(crypto =>
  crypto.name.toLowerCase().includes(search.toLowerCase()))
  return(
    <div className="crypto-app">
    <div className="crypto-search">
     <h1 className="crypto-text">Search</h1> 
       <form>
         <input type="text" placeholder="Search" className="crypto-input" onChange={userChange}/>
       </form>
    </div>
{filteredCrypto.map(crypto =>{
  return(
    <Crypto 
    key={crypto.id} 
    cryptoName={crypto.name}
     image={crypto.image}
     symbol={crypto.symbol}
     marketcap={crypto.market_cap}
     price={crypto.current_price}
     priceChange={crypto.price_change_percentage_24h}
     volume={crypto.total_volume}
     
     />
  )
})}
    </div>
    );
}export default App;