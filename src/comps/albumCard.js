import React, { Component } from 'react';
import '../css/albumCard.css'
import { Card, Button } from 'react-bootstrap';
// eslint-disable-next-line
import { Redirect, Link } from 'react-router-dom';



class AlbumCard extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { album } = this.props;
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
                            {album.tsalbumArtists}
                        </Card.Text>
                        <Button variant="primary" size="sm"  href={"#/album/" + album.tsalbumId} block>לשירים <i class="fas fa-chevron-left"></i></Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AlbumCard;