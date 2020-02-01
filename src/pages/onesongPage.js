import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';


class OneSongPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        }
      
        render() {
        const { activeUser, handleLogout } = this.props;
        return (
            <div>
              <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
               <h1>One Song Page</h1> 
            </div>
        );
    }
}


export default OneSongPage; 
