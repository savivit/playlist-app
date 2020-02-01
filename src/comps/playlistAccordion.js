import React, { Component } from 'react';
import '../css/songAccordion.css'
import { Card, Accordion } from 'react-bootstrap';
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
                <Accordion.Toggle as={Card.Header} eventKey={song.id}>
                    {song.songTitle}
                    <SongLocalPlayer song={song}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={song.id}>
                    <Card.Body>
                        {song.songPerformer}
                        {song.songYear}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>)

        return (
            <div>
                <Accordion>
                    {accordionview}
                </Accordion>
            </div>


        );
    }
}

export default PlaylistAccordion;


