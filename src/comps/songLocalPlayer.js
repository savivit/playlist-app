import React, { Component } from 'react';
import '../css/songLocalPlayer.css'
import { Button } from 'react-bootstrap';


class SongLocalPlayer extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { song } = this.props;
        let audio = new Audio(song.songPreviewSpotify)

        return (
            <div>
                <Button onClick={() => audio.play()}>play</Button>
            </div>
        );
    }
}

export default SongLocalPlayer;
