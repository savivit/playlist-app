import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import SongAccordion from '../comps/songAccordion';
import PlaylistAccordion from '../comps/playlistAccordion';
import { Redirect } from 'react-router-dom';
import '../css/songsPage.css'
//import NewRecipeModal from '../components/NewRecipeModal';
import Parse from 'parse';
import SongModel from '../models/songModel';

class PlaylistPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            showNewSongModal: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleNewSong = this.handleNewSong.bind(this);
    }

    async componentDidMount() {
        if (this.props.activeUser) {
            const Song = Parse.Object.extend('T_Songs');
            const query = new Parse.Query(Song);
            query.equalTo("owner", Parse.User.current());

            const parseSongs = await query.find();
            const songs = parseSongs.map(parseSong => new SongModel(parseSong));
            this.setState({ songs });
        }
    }


    handleClose() {
        this.setState({
            showNewSongModal: false
        })
    }

    handleNewSong(newSong) {
        const Song = Parse.Object.extend('T_Songs');
        const newParseSong = new Song();

        newParseSong.set('songTitle', newSong.songTitle);
        newParseSong.set('songAltName', newSong.songAltName);
        newParseSong.set('songYear', newSong.songYear);
        //newParseSong.set('image', new Parse.File(newSong.fileImg.file.name, newSong.fileImg.file));
        newParseSong.set('owner', Parse.User.current());

        newParseSong.save().then(theCreatedParseSong => {
            console.log('Song created', theCreatedParseSong);
            this.setState({
                songs: this.state.songs.concat(new SongModel(theCreatedParseSong))
            })
        }, error => {
            console.error('Error while creating Song: ', error);
        });
    }


    render() {
        const { showNewSongModal, songs } = this.state;
        const { activeUser, handleLogout } = this.props;


        if (!activeUser) {
            return <Redirect to="/" />
        }

        const songsView = songs.map(song =>
            <Col lg={3} md={6} key={song.id}>
                <SongAccordion song={song} />
            </Col>)

        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <h1> המוזיקה של {activeUser.fname}</h1>
                <Container>
                    <div className="songs-header">
                        <Button onClick={() => { this.setState({ showNewSongModal: true }) }}>New Song</Button>
                    </div>
                    <Row>
                        {songsView}
                    </Row>
                </Container>
                <hr />
                <PlaylistAccordion songs={songs} />

                {/*  <NewRecipeModal show={showNewRecipeModal} handleClose={this.handleClose} handleNewRecipe={this.handleNewRecipe} /> */}
            </div>
        );
    }

}

export default PlaylistPage; 
