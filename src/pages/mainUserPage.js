//import { User } from "parse"

//playlists and songs for User

// link on one playlist -> playlist.page

// link on one song  -> onesongPage

// user can add playlists from a list (only admin can enter new lists to db)

// user can add songs from list and add them to playlists (only admin can enter new songs to db)


import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import SongAccordion from '../comps/songAccordion';
import PlaylistCard from '../comps/playlistCard';
import { Redirect } from 'react-router-dom';
import '../css/mainUserPage.css'
//import NewRecipeModal from '../components/NewRecipeModal';
import Parse from 'parse';
import SongModel from '../models/songModel';
import PlaylistModel from '../models/playlistModel';

class MainUserPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            playlists: [],
            songs: [],
            showNewSongModal: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleNewSong = this.handleNewSong.bind(this);
    }

    async componentDidMount() {
        if (this.props.activeUser) {
            const Playlist = Parse.Object.extend('T_Playlists');
            const query = new Parse.Query(Playlist);
            query.equalTo("playlistOwner", Parse.User.current());

            const parsePlaylists = await query.find();
            const playlists = parsePlaylists.map(parsePlaylist => new PlaylistModel(parsePlaylist));
            /*this.setState({ playlists });  */


            const Song = Parse.Object.extend('T_Songs');
            const query2 = new Parse.Query(Song);
            query2.equalTo("owner", Parse.User.current());

            const parseSongs = await query2.find();
            const songs = parseSongs.map(parseSong => new SongModel(parseSong));
            this.setState({ playlists, songs });

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
        const { showNewSongModal, songs, playlists } = this.state;
        const { activeUser, handleLogout } = this.props;

        if (!activeUser) {
            return <Redirect to="/" />
        }

        const playlistsView = playlists.map(playlist =>
            <Col lg={3} md={6} key={playlist.id}>
                <PlaylistCard playlist={playlist} />
            </Col>)

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
                        {playlistsView}
                    </Row>
                    <Row>
                        {songsView}
                    </Row>
                </Container>


                {/*  <NewRecipeModal show={showNewRecipeModal} handleClose={this.handleClose} handleNewRecipe={this.handleNewRecipe} /> */}
            </div>
        );
    }

}

export default MainUserPage; 
