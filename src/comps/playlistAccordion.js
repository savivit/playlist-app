import React, { Component } from 'react';
import '../css/playlistAccordion.css'
import { Card, Accordion, Button } from 'react-bootstrap';
import SongLocalPlayer from '../comps/songLocalPlayer';


class PlaylistAccordion extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { songs } = this.props;

        const accordionview = songs.map(song =>
            <Card>
                <Card.Header className="cardHeader">
                <SongLocalPlayer song={song} />
                    <Accordion.Toggle className="toggle" as={Button} variant="link" eventKey={song.id}>
                        {song.songTitle} {song.songAltName !== "" ? <span className="altName"> ({song.songAltName})</span>:null}
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey={song.id}>
                    <i class="fas fa-chevron-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={song.id}>
                    <Card.Body className="cardBody">
                    
                    <Card.Img variant="top" src={song.songPicSmall ? song.songPicSmall : require('../images/piano_light_rgb_fill.png')} />
                        <div>
                        ביצוע: {song.songPerformer}
                        <br />
                        שנה: {song.songYear}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>)

        return (
            <div className="Accordion">
                <Accordion>
                    {accordionview}
                </Accordion>
            </div>


        );
    }
}

export default PlaylistAccordion;


