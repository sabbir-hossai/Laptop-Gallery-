import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import useAuth from '../../Hooks/Firebasce/useAuth';
import './Dashboard.css'


const Dashboard = () => {
    const { user, logout, admin } = useAuth()
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://guarded-journey-56459.herokuapp.com/confirmOrders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handeldelete = id => {

        console.log(id)
        const url = `https://guarded-journey-56459.herokuapp.com/confirmOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you want to delete')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
                console.log(data)
            })
    }


    return (
        <div>
            <div>
                <h1 className=' dashboardTitle p-3 bg-warning'>  Dashboard</h1>
            </div>

            <div className='container'>
                <div className="row  ">

                    <div className="col-sm-12 col-lg-3  DashItem ">
                        <Link className='icons' to="/home"><span><i class="fa-solid fa-house icon"></i></span><h5 className=' DashboardItem'>Home</h5> </Link>
                        {admin &&
                            <div>
                                <Link className='icons' to="/dashboard/makeAdmin"><span><i class="fa-solid fa-user-tie icon" ></i></span><h5>Make Admin</h5> </Link>
                                <Link className='icons' to='/dashboard/manageAllOrder'><i class="fa-solid fa-cart-shopping icon"></i><h5>Manage All Orders</h5></Link>
                                <Link className='icons' to='/Dashboard/manageProduct'><span><i class="fa-solid fa-shop-slash icon"></i></span><h5>Manage Product</h5></Link>
                            </div>
                        }
                        <Link className='icons' to="/Dashboard/pay"><i class="fa-solid fa-dollar-sign icon "></i><h5>Pay</h5></Link>
                        <Link className='icons' to="/Dashboard"><span><i class="fa-solid fa-cart-plus icon"></i></span><h5>My Order </h5> </Link>
                        <Link className='icons' to="/Dashboard/userReview" ><span><i class="fa-solid fa-house icon"></i></span><h5> Reviews</h5></Link>
                        <button className='btn btn-link icons' style={{ textDecoration: 'none', marginLeft: '-10px' }} onClick={logout}><span><i class="fa-solid fa-arrow-right-from-bracket icon"></i></span><h5>Logout</h5></button>
                    </div>
                    <div className=" col-lg-9  outletColor">
                        <Outlet />
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;