import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';

class SigninPage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="false"/>
               <h1>Signin Page</h1> 
            </div>
        );
    }
}


export default SigninPage; 
