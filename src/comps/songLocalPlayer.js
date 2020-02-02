import React, { Component } from 'react';
import '../css/songLocalPlayer.css'
import { Button } from 'react-bootstrap';


class SongLocalPlayer extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            showPause: false
        }

        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    handlePlay() {
        this.setState({
            showPause: true
        });
    }

    handlePause() {
        this.setState({
            showPause: false
        });
    }


    render() {
        const { song } = this.props;
        let audio = new Audio(song.songPreviewSpotify)
        let showPause = this.state.showPause

        const playPauseview = showPause ? <Button onClick={() => audio.pause()}><i class="fas fa-pause-circle"></i></Button> : <Button onClick={() => audio.play()}><i class="fas fa-play-circle"></i></Button>;


        return (
            <div>
                {playPauseview}
            </div>
        );
    }
}

export default SongLocalPlayer;

