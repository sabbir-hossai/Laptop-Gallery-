import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { Navbar } from 'react-bootstrap';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/login/Login';
import Register from './Pages/Login/Register/Register';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Pay from './Pages/Dashboard/Pay/Pay';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import UserReview from './Pages/Dashboard/UserReviesw/UserReview';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <Router>
          <Navbar></Navbar>
        </Router > */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/pay" element={<Pay></Pay>} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/Purchase/:laptopId" element={<Purchase />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/userreview" element={<UserReview />} /> */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route path="/dashboard" element={<MyOrder></MyOrder>} />
              <Route path="/dashboard/MakeAdmin" element={<PrivateRoute><MakeAdmin></MakeAdmin></PrivateRoute>} />

              {/* <Route path="/dashboard/manageAllOrder" element={<ManageAllOrder></ManageAllOrder>} /> */}
              <Route path="/dashboard/manageProduct" element={<PrivateRoute><manageProduct></manageProduct></PrivateRoute>} />
              <Route path="/dashboard/pay" element={<PrivateRoute><Pay></Pay></PrivateRoute>} />
              <Route path="/dashboard/MyOrder" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
              <Route path="/dashboard/userreview" element={<PrivateRoute><UserReview></UserReview></PrivateRoute>} />
              {/* <Route path=":id" element={<ProductDisplay />} />  */}
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
