/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import logo from '../../images/logo.png';
import TabEntry from '../TabEntry/TabEntry';






function App() {


    return (

        <div className = "container">

        <header className = "header">

        <img src = {logo} alt = "logo" className="logo"/>
        <nav>
        <a href = "#" className="how-it-works"> How It Works ? </a>
            <button className="subscribe"> Subscribe Now </button>
        </nav>

        </header>

        <TabEntry/>

        </div>

    );




}

export default App;