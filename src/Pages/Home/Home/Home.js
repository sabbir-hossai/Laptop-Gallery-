import React from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import PopularLaptops from '../PopularLaptops/PopularLaptops';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <PopularLaptops></PopularLaptops>
        </div>
    );
};

export default Home;