import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import TheNavbar from '../comps/playlistNavbar';
import TheFooter from '../comps/playlistFooter';
import '../css/homePage.css'


class HomePage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    state = {
        url: null,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }

    handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleToggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }

    handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    handleStop = () => {
        this.setState({ url: null, playing: false })
    }

    handlePlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }

    handlePause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <div className="article">
                    <h1>דף הבית</h1>
                </div>
                <div className='player-wrapper'>
                <ReactPlayer className='react-player'
                    ref={this.ref}
                    width='100%'
                    height='100%'
                    volume={volume}
                    muted={muted}
                    onReady={() => console.log('onReady')}
                    onStart={() => console.log('onStart')}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    url='https://www.youtube.com/watch?v=ix_llr8_018' playing />
                <h4>Controls</h4>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                <h4>Controls</h4>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>

                </div>

                <TheFooter />
            </div>
        );
    }
}

export default HomePage;

