import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { Navbar } from 'react-bootstrap';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import UserReview from './Pages/Dashboard/UserReviesw/UserReview';

import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';


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
            <PrivateRoute path="/Purchase/:laptopId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/userreview">
              <UserReview></UserReview>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
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
