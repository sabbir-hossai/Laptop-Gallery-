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
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/login/Login';
import Register from './Pages/Login/Register/Register';

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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allproducts">
              <AllProducts />
            </Route>
            <Route path="/Purchase/:laptopId">
              <Purchase />
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
