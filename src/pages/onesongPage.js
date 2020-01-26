import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';


class OneSongPage extends Component {
    render() {
        return (
            <div>
                <TheNavbar activeUser="true"/>
               <h1>One Song Page</h1> 
            </div>
        );
    }
}


export default OneSongPage; 
