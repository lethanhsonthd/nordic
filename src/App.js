import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap4/bootstrap.min.css'
import Header from './components/header'
import './styles/main_styles.css'
import './styles/categories_responsive.css'
import './styles/categories_styles.css'
import './styles/responsive.css'
import './styles/single_responsive.css'
import './styles/single_styles.css'
import HomepageHeroBanner from './components/homepage-hero-banner'
import Arrivial from './components/arrivials'
class App extends Component {
  render() {
    return (
      <div className="container">
       <Header></Header>
       <HomepageHeroBanner></HomepageHeroBanner>
       <Arrivial></Arrivial>
      </div>
    );
  }
}

export default App;
