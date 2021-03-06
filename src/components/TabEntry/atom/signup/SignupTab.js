import React, { Component } from 'react'

import './signuptab.css'

import Github from '../../../../images/Github @2x.png'
import Facebook from '../../../../images/Facebook @2x.png'
import Google from '../../../../images/google @2x.png'

class SignupTab extends Component {

    render() {
        return (

            <div className = "signup-container" >

            <form>

            <input placeholder = "name" type = "text"/>
            <input placeholder = "lastname" type = "text"/>
            <input placeholder = "e-mail" type = "text" />
            <input placeholder = "phone" type = "text" />
            <input placeholder = "password" type = "password" />
            <input placeholder = "password" type = "password" />
            <input type = "button" value = "signup" />

            </form>

                <div className='text-log'>
                    <a href='#'>Create Account</a>
                    <a href='#'>Forget Password</a>
                </div>

                <p className = 'textlogin' > or Connect With </p>

            <div className = "connect-logos" >

            <img src = { Github }
            alt = 'githublogo' />
            <img src = { Facebook }
            alt = "facebooklogo" />
            <img src = { Google }
            alt = "googlelogo" />

            </div>

            </div>

        );
    }
}

export default SignupTab;