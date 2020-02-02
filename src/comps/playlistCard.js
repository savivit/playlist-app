import React, { Component } from 'react';
import '../css/playlistCard.css'
import { Card, Button } from 'react-bootstrap';



class PlaylistCard extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { playlist } = this.props;

        const picSRC = playlist.playlistPic ? playlist.playlistPic : require('../images/piano_light_rgb_fill.png') ;
        return (
            <div className="Card">
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src={picSRC} />
                        <Card.Title>{playlist.playlistTitle}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" block>לשירים <i class="fas fa-chevron-left"></i></Button>
                       
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default PlaylistCard;


