import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';

class PlaylistPage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="true"/>
               <h1>Platlist Page</h1> 
            </div>
        );
    }
}


export default PlaylistPage; 
