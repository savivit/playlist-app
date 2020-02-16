
import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
// eslint-disable-next-line
import { Container, Row, Col, Button, Modal, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Parse from 'parse';
import AlbumModel from '../models/albumModel';
import TheFooter from '../comps/playlistFooter';

import NewAlbumModalWindow from '../comps/newAlbumModalWindow';
import AlbumCard from '../comps/albumCard';
import '../css/albumsPage.css'


//import NewSongModalWindow from '../comps/newSongModalWindow';
//import PlaylistModel from '../models/playlistModel';


class AlbumsPage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            showAlert: false,
            showErrorAlert: false,
            showNewAlbumModal: false
        }

        this.handleCloseAlbum = this.handleCloseAlbum.bind(this);
        this.handleNewAlbum = this.handleNewAlbum.bind(this);

    }

    async componentDidMount() {
        if (this.props.activeUser) {
            const Album = Parse.Object.extend('TS_Albums');

            const query = new Parse.Query(Album);

            query.ascending('tsalbumName')
            query.limit(100)
            //query.skip(2)
            //query.equalTo("playlistOwner", Parse.User.current());

            const parseAlbums = await query.find();
            const albums = parseAlbums.map(parseAlbum => new AlbumModel(parseAlbum));
            this.setState({ albums });

            // get artists - get array of artist in track and insets into array... ????????
            /* const ArtistsArray = Parse.Object.extend('TS_Artists');
            const query2 = new Parse.Query(ArtistsArray);
            query2.equalTo("owner", Parse.User.current());

            const parseSongs = await query2.find();
            const songs = parseSongs.map(parseSong => new ArtistModel(parseSong));
            this.setState({ albums, songs });
            */
        }
    }

    handleCloseAlbum() {
        this.setState({
            showNewAlbumModal: false
        })
    }

    handleNewAlbum(newAlbum) {
        const Album = Parse.Object.extend('TS_Albums');
        const newParseAlbum = new Album();

        newParseAlbum.set('tsalbumId', newAlbum.tsalbumId);
        newParseAlbum.set('tsalbumName', newAlbum.tsalbumName);
        newParseAlbum.set('tsalbumReleaseDate', newAlbum.tsalbumReleaseDate);
        newParseAlbum.set('tsalbumPicLg', newAlbum.tsalbumPicLg);
        //newParseSong.set('image', new Parse.File(newSong.fileImg.file.name, newSong.fileImg.file));
        newParseAlbum.set('tsalbumArtists', newAlbum.tsalbumArtists);

        newParseAlbum.save().then(theCreatednewAlbum => {
            console.log('Album created', theCreatednewAlbum);
            this.setState({
                albums: this.state.albums.concat(new AlbumModel(theCreatednewAlbum)),
                showAlert: true
            })
        }, error => {
            console.error('Error while creating Album: ', error);
            this.setState({
                showErrorAlert: true
            });
        });
    }


    render() {
        const { showNewAlbumModal, albums, showAlert, showErrorAlert } = this.state;
        const { activeUser, handleLogout } = this.props;
        const successAlert = showAlert ? <Alert variant="success">אלבום נוסף בהצלחה</Alert> : null;
        const errorAlert = showErrorAlert ? <Alert variant="danger">לא נוצר אלבום</Alert> : null;


        if (!activeUser) {
            return <Redirect to="/" />
        }

        const albumsView = albums.map(album =>
            <Col lg={2} sm={4} xs={12} key={album.id}>
                <AlbumCard album={album} />
            </Col>)

        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <h1> המוזיקה של {activeUser.fname}</h1>
                <Container>
                    <div className="main-button">
                        <Button variant="outline-primary" onClick={() => { this.setState({ showNewAlbumModal: true }) }} block>יצירת אלבום חדש</Button>
                        {successAlert}
                        {errorAlert}
                    </div>
                    <Row>
                        {albumsView}
                    </Row>
                    {/* <div className="main-button">
                        <Button variant="outline-primary" onClick={() => { this.setState({ showNewSongModal: true }) }} block>הוספת שיר חדש</Button>
                    </div>
                    <Row>
                        <Col lg={12} md={12}>
                            <PlaylistAccordion songs={songs} />
                        </Col>
                    </Row> */}
                </Container>

                <TheFooter />
                <NewAlbumModalWindow show={showNewAlbumModal} handleCloseAlbum={this.handleCloseAlbum} handleNewAlbum={this.handleNewAlbum} />
                {/*  <NewSongModalWindow show={showNewSongModal} handleCloseSong={this.handleCloseSong} handleNewSong={this.handleNewSong} /> */}
            </div>
        );
    }

}

export default AlbumsPage; 
