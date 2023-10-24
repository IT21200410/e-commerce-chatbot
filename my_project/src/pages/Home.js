import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Products from '../components/Products';
import FeturedProduct from '../components/FeturedProduct';
import Categories from '../components/Categories';
import TrendingProducts from '../components/TrendingProducts';


function HomePage() {
  return (
    <div className="home-page">
      <Navbar/>
     <Slider/>
     <FeturedProduct/>
     <Categories/>
     <TrendingProducts/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default HomePage;
