import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import './TabEntry.css'
import LoginTab from './atom/login/LoginTab'
import SignupTab from './atom/signup/SignupTab'




class TabEntry extends Component {
    render() {
        return (

            <
            div className = "tab-header" >
            <
            div className = "tab-entry" >
            <
            Tabs defaultActiveKey = "profile"
            id = "uncontrolled-tab-example" >

            <
            Tab eventKey = "login"
            title = "Login" >
            <
            LoginTab / >
            <
            /Tab>

            <
            Tab eventKey = "signup"
            title = "Signup" >
            <
            SignupTab / >
            <
            /Tab>

            <
            /Tabs> <
            /div> <
            /div>
        );
    }
}

export default TabEntry;