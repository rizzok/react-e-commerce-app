import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dataProducts from '../data/products.json';
import Header from './Header';
import PageHome from './PageHome';
import PageContact from './PageContact';
import PageAccount from './PageAccount';
import { Footer } from './Footer';
import ShoppingCart from './ShoppingCart';

function App() {
  let [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleCartClick() {
    setShowCart((showCart = !showCart));
  }

  function handleAddToCart(product) {
    const currentItem = cartItems.find((item) => item.id === product.id);
    if (currentItem) {
      const filteredCartItems = cartItems.filter(
        (item) => item.id !== product.id
      );
      setCartItems([
        ...filteredCartItems,
        { ...product, quantity: currentItem.quantity + 1 },
      ]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  }

  return (
    <Router>
      <div className="relative">
        <Header handleCartClick={handleCartClick} />
        {showCart && <ShoppingCart cartItems={cartItems} />}
      </div>
      <Switch>
        <Route exact path="/">
          <PageHome products={dataProducts} handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/contact">
          <PageContact />
        </Route>
        <Route path="/account">
          <PageAccount />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
