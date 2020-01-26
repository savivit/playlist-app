import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import TheFooter from '../comps/playlistFooter';
import '../css/homePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="true" />
                <div className="article">
                    <h1>דף הבית</h1>
                </div>
                <TheFooter />
            </div>
        );
    }
}

export default HomePage; 
