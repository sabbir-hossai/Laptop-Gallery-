import React from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import PopularLaptops from '../PopularLaptops/PopularLaptops';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <PopularLaptops></PopularLaptops>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;