import React, { useEffect, useState } from 'react';
import PopularLptop from '../PopularLaptop/PopularLptop';

const PopularLaptops = () => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <PopularLptop></PopularLptop>
        </div>
    );
};

export default PopularLaptops;