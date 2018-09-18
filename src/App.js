import React, { Component } from 'react';
import HomepageHeroBanner from './components/homepage-hero-banner'
import Arrivial from './components/arrivials'
import Header from './components/header'
import QuickCategoryBar from './components/home-page-quick-category-bar'
import DealWeek from './components/deals-of-the-week';
import Benefits from './components/benefits';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div className="">
       <Header></Header>
       <HomepageHeroBanner></HomepageHeroBanner>
       <QuickCategoryBar></QuickCategoryBar>
       <Arrivial></Arrivial>
       <DealWeek></DealWeek>
       <Benefits></Benefits>
       <Footer></Footer>
      </div>
    );
  }
}
export default App;
