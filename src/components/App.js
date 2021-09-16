import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Account from './Account';
import { Footer } from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
