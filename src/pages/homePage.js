import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import TheFooter from '../comps/playlistFooter';
import '../css/homePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <div className="article">
                    <h1>דף הבית</h1>
                </div>
                <TheFooter />
            </div>
        );
    }
}

export default HomePage; 
