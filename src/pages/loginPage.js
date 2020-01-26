import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="false"/>
               <h1>Login Page</h1> 
            </div>
        );
    }
}


export default LoginPage; 
