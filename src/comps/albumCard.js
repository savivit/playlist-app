import React, { Component } from 'react';
import '../css/albumCard.css'
import { Card, Button } from 'react-bootstrap';
import Parse from 'parse';
import ArtistModel from '../models/artistModel';
// eslint-disable-next-line
import { Redirect, Link } from 'react-router-dom';



class AlbumCard extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            artistsList: []
        }
    }

    async componentDidMount() {

        const { album } = this.props;
        const ArtistsArray = album.tsalbumArtists;
        let ArtistsList = this.state.artistsList;

        for (let i = 0; i < ArtistsArray.length; i++) {

            const Artists = Parse.Object.extend('TS_Artists');
            const query = new Parse.Query(Artists);
            query.equalTo("tsartistId", ArtistsArray[i]);

            const parseArtists = await query.find();
            let artistM = parseArtists.map(parseArtist => new ArtistModel(parseArtist));
            ArtistsList[i] = artistM;
            this.setState({ artistsList: ArtistsList });
        }



    }

    render() {
        const { album } = this.props;
        const TheArtistsList = this.state.artistsList;
        const ArtistsListView = TheArtistsList.map(artistList => 
            <span><a className="artistLink" href="/#">{artistList[0].tsartistName}</a>{' '}</span>)
        //let trimDesc = "";
        const picSRC = album.tsalbumPicLg ? album.tsalbumPicLg : require('../images/piano_light_rgb_fill.png');
        // const descStr = String(album.playlistDesc);
        // if (descStr !== "undefined") { 
        // trimDesc = descStr.length > 102 ? descStr.substring(0, 99) + " ..." : descStr;



        return (
            <div className="AlbumCard" >
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={picSRC} />
                        <Card.Title color="primary">{album.tsalbumName}</Card.Title>
                        <Card.Text>
                            {/*  {album.tsalbumArtists} */}
                            {ArtistsListView}
                        </Card.Text>
                        <Button variant="primary" size="sm" href={"#/album/" + album.tsalbumId} block>לשירים <i class="fas fa-chevron-left"></i></Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AlbumCard;