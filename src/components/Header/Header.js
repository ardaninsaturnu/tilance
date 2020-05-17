import React, {Component} from 'react';
import './header.css';
import logo from "../../images/logo.png";

class Header extends Component {
    render() {

        return (
            <header className = "header">

                <img src = {logo} alt = "logo" className="logo"/>
                <nav>
                    <a href = "#" className="how-it-works"> How It Works ? </a>
                    <button className="subscribe"> Subscribe Now </button>
                </nav>

            </header>
        );
    }
}

export default Header;