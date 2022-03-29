import React, { useEffect, useState, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/Firebasce/useAuth';
// import './MyOrder.css';





const MyOrder = () => {
    const { user } = useAuth();
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
            <h2 className='margin'>My <span className='text-warning'>orders</span> </h2>
            <Table striped bordered hover>

                <thead>
                    <tr>

                        <th>Laptop Name</th>
                        <th>Laptop brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr>

                                <td> {order.laptopTitle
                                }</td>
                                <td> {order.brand}</td>
                                <td>{order.price}</td>
                                <td>{order.payment ? 'paid' : <Link to={`/Dashboard/pay/${order._id}`}><button className="btn btn-primary">Purchase here</button></Link>} </td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>

    );
};

export default MyOrder;






