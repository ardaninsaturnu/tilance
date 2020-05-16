import React, { Component } from 'react'

import './logintab.css'

import Github from '../../../../images/Github @2x.png'
import Facebook from '../../../../images/Facebook @2x.png'
import Google from '../../../../images/google @2x.png'

class LoginTab extends Component {

    render() {

        return ( <
            div className = "container" >

            <
            form >

            <
            input placeholder = "e-mail"
            type = "text" / >
            <
            input placeholder = "password"
            type = "password" / >
            <
            input type = "button"
            value = "Login" / >

            <
            /form>

            <
            p className = 'textlogin' > or Connect With < /p>

            <
            div className = "connect-logos" >

            <
            img src = { Github }
            alt = 'githublogo' / >
            <
            img src = { Facebook }
            alt = "facebooklogo" / >
            <
            img src = { Google }
            alt = "googlelogo" / >

            <
            /div>

            <
            /div>
        )
    }
}


export default LoginTab;