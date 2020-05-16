/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import logo from '../../images/TILANCE.png';
import TabEntry from '../TabEntry/TabEntry';






function App() {


    return (

        <
        div className = "container" >

        <
        header className = "header" >

        <
        img src = { logo }
        alt = "logo" / >
        <
        nav >
        <
        a href = "#" > How It Works ? < /a> <
        button > Subscribe Now < /button> <
        /nav>

        <
        /header>

        <
        TabEntry / >

        <
        /div>

    );




}

export default App;