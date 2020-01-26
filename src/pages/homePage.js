import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
                

class HomePage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="true"/>
                <h1>דף הבית</h1>
            </div>
        );
    }
}


export default HomePage; 
