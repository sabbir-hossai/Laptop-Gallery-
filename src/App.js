import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { Navbar } from 'react-bootstrap';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allproducts">
              <AllProducts />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router >
      </AuthProvider>

    </div >
  );
}

export default App;
