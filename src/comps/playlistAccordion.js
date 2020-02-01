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
                    <Accordion.Toggle as={Button} variant="link" eventKey={song.id}>
                        {song.songTitle}
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey={song.id}>
                    <i class="fas fa-chevron-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={song.id}>
                    <Card.Body>
                    <Card.Img variant="top" src={song.songPicSmall} />
                        <br />
                        {song.songPerformer}
                        <br />
                        {song.songYear}
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


