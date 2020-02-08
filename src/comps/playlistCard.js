import React, { Component } from 'react';
import '../css/playlistCard.css'
import { Card, Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';



class PlaylistCard extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { playlist } = this.props;
        let trimDesc = "";
        const picSRC = playlist.playlistPic ? playlist.playlistPic : require('../images/piano_light_rgb_fill.png');
        const descStr = String(playlist.playlistDesc);
        if (descStr !== "undefined") { 
        trimDesc = descStr.length > 102 ? descStr.substring(0, 99) + " ..." : descStr;
    }


    return(
            <div className = "Card" >
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={picSRC} />
                    <Card.Title color="primary">{playlist.playlistTitle}</Card.Title>
                    <Card.Text>{trimDesc}</Card.Text>
                    <Button variant="primary" href={"#/playlist/" + playlist.id} block>לשירים <i class="fas fa-chevron-left"></i></Button>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default PlaylistCard;


//import Button from '@material-ui/core/Button';




