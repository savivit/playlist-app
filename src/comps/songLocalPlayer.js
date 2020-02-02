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

        this.myInterval = [];
        this.audio = new Audio(this.props.song.songPreviewSpotify)
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    handlePlay() {
        this.audio.play();
        this.myInterval = setInterval(() => {
            if (this.audio.ended) {
                this.setState({
                    showPause: false
                }); 
                clearInterval(this.myInterval);
            }
          }, 500)
        this.setState({
            showPause: true
        });
    }

    handlePause() {
        this.audio.pause();
        this.setState({
            showPause: false
        });
        clearInterval(this.myInterval);
    }


    render() {
        //const { song } = this.props;
        //let audio = new Audio(song.songPreviewSpotify)
        let showPause = this.state.showPause

        const playPauseview = showPause ? <Button onClick={() => this.handlePause()}><i class="fas fa-pause-circle"></i></Button> : <Button onClick={() => this.handlePlay()}><i class="fas fa-play-circle"></i></Button>;


        return (
            <div>
                {playPauseview}
            </div>
        );
    }
}

export default SongLocalPlayer;

