import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import SongAccordion from '../comps/songAccordion';

class PlaylistPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        }
      
        render() {
        const { activeUser, handleLogout } = this.props;
        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
               <h1>Platlist Page</h1> 
               <SongAccordion />
            </div>
        );
    }
}


export default PlaylistPage; 
