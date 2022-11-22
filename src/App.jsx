import { useEffect, useState } from 'react';

import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { instance } from './services/api';

import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <main className='container'>
        <ProductsList
          data={products}
          setCurrentSale={setCurrentSale}
        />
        <Cart
          currentSale={currentSale}
        />
      </main>
    </div>
  );
}

export default App;
