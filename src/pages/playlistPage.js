import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import { Container, Row, Col, Button, Image, Badge, Modal, Alert } from 'react-bootstrap'
//import SongAccordion from '../comps/songAccordion';
import PlaylistAccordion from '../comps/playlistAccordion';
import { Redirect } from 'react-router-dom';
import '../css/playlistPage.css'
import TheFooter from '../comps/playlistFooter';


import Parse from 'parse';
import SongModel from '../models/songModel';
import NewSongModalWindow from '../comps/newSongModalWindow';

class PlaylistPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            showAlert: false,
            showErrorAlert: false,
            showNewSongModal: false
        }

        this.paramID = window.location.href.split("/")[window.location.href.split("/").length - 1];
        this.playlistTitle = "";
        this.playlistDesc = "";
        this.playlistPic = "";

        this.handleCloseSong = this.handleCloseSong.bind(this);
        this.handleNewSong = this.handleNewSong.bind(this);
    }

    async componentDidMount() {
        if (this.props.activeUser) {

            //call playlists table to get the objects
            let playlists = Parse.Object.extend("T_Playlists")
            let query1 = new Parse.Query(playlists)
            let playlist = await query1.get(this.paramID)

            this.ourPlaylist = playlist;
            this.playlistTitle = playlist.get('playlistTitle');
            this.playlistDesc = playlist.get('playlistDesc');
            this.playlistPic = playlist.get('playlistPic');
            //call many to many table to find list of sons in playlist as objects
            let PlaylistsSongs = Parse.Object.extend("T_SongsInPlaylists")
            let query = new Parse.Query(PlaylistsSongs)
            query.equalTo('siplPlaylist', playlist)
            query.ascending('siplOrder')
            query.include('siplSong')
            //let result = await query.find()

            const parseSongsPlaylists = await query.find();
            const songs = parseSongsPlaylists.map(parseSongsPlaylist => new SongModel(parseSongsPlaylist.get('siplSong')));
            this.setState({ songs });


            //const parseSongs = await query.find();
            //const songs = parseSongs.map(parseSong => new SongModel(parseSong));
            //this.setState({ songs });
            /* old    const Song = Parse.Object.extend('T_Songs');
                const query = new Parse.Query(Song);
                query.equalTo("owner", Parse.User.current());
    
                const parseSongs = await query.find();
                const songs = parseSongs.map(parseSong => new SongModel(parseSong));
                this.setState({ songs }); */
        }
    }


    handleCloseSong() {
        this.setState({
            showNewSongModal: false
        })
    }

    handleNewSong(newSong) {
        const Song = Parse.Object.extend('T_Songs');
        const newParseSong = new Song();

        newParseSong.set('songTitle', newSong.title);
        newParseSong.set('songPerformer', newSong.performer);
        newParseSong.set('songPreviewSpotify', newSong.previewLink);
        newParseSong.set('songPicSmall', newSong.pic);
        //newParseSong.set('songAltName', newSong.songAltName);
        //newParseSong.set('songYear', newSong.songYear);
        //newParseSong.set('image', new Parse.File(newSong.fileImg.file.name, newSong.fileImg.file));
        newParseSong.set('owner', Parse.User.current());

        newParseSong.save().then(theCreatedParseSong => {
            console.log('Song created', theCreatedParseSong);
            this.setState({
                songs: this.state.songs.concat(new SongModel(theCreatedParseSong)),
                showAlert: true
            })
        }, error => {
            console.error('Error while creating Song: ', error);
            this.setState({
                showErrorAlert: true
            });
        });

        // insert to T_SongsInPlaylists table too
        const SongsInPlaylists = Parse.Object.extend('T_SongsInPlaylists');
        const newParseSongsInPlaylists = new SongsInPlaylists();

        newParseSongsInPlaylists.set('siplSongTitle', newSong.title)
        newParseSongsInPlaylists.set('siplOrder', Number(newSong.songOrder))
        newParseSongsInPlaylists.set('siplSong', newParseSong)
        newParseSongsInPlaylists.set('siplPlaylist', this.ourPlaylist)


        newParseSongsInPlaylists.save().then(theCreatedParse => {
            console.log('created', theCreatedParse);
        }, error => {
            console.error('Error while creating sipl: ', error);
        });
    }

    render() {
        const { showNewSongModal, songs, showAlert, showErrorAlert } = this.state;
        const { activeUser, handleLogout } = this.props;

        const picSRC = this.playlistPic ? this.playlistPic : require('../images/piano_light_rgb_fill.png');
        const successAlert = showAlert ? <Alert variant="success"> שיר נוסף בהצלחה</Alert> : null;
        const errorAlert = showErrorAlert ? <Alert variant="danger">לא נוצר שיר חדש</Alert> : null;

        if (!activeUser) {
            return <Redirect to="/" />
        }

        /* const songsView = songs.map(song =>
            <Col lg={3} md={6} key={song.id}>
                <SongAccordion song={song} />
            </Col>)
 */
        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <h1> רשימת ההשמעה {this.playlistTitle} {/* של {activeUser.fname} */}</h1>
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <Image className="playlistPic" variant="top" src={picSRC} />
                        </Col>
                        <Col className="playlistDesc" lg={8} md={12}>

                            <div>
                                <h5><Badge variant="primary">{this.playlistTitle}</Badge></h5>
                                {this.playlistDesc}
                            </div>
                        </Col>
                    </Row>
                    <div className="main-button">
                        <Button variant="outline-primary" onClick={() => { this.setState({ showNewSongModal: true }) }} block>הוספת שיר חדש לרשימה</Button>
                        {successAlert}
                        {errorAlert}
                    </div>
                    <Row>
                        <Col lg={12} md={12}>
                            <PlaylistAccordion songs={songs} />
                        </Col>
                    </Row>
                </Container>
                <TheFooter />
                <NewSongModalWindow show={showNewSongModal} handleCloseSong={this.handleCloseSong} handleNewSong={this.handleNewSong} />
            </div>
        );
    }
}

export default PlaylistPage; 
