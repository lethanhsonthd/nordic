import React, { Component } from 'react';
import HomepageHeroBanner from './components/homepage-hero-banner'
import Arrivial from './components/arrivials'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="">
       <Header></Header>
       <HomepageHeroBanner></HomepageHeroBanner>
       <Arrivial></Arrivial>
      </div>
    );
  }
}

export default App;
