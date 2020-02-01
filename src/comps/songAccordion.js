import React, { Component } from 'react';
import '../css/songAccordion.css'
import { Card, Accordion, Button } from 'react-bootstrap';


class SongAccordion extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        const { song } = this.props;
        let audio = new Audio(song.songPreviewSpotify)

        return (
            <div className="Accordion">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            {song.songTitle}
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                            <Button onClick={() => audio.play()}>play</Button>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            {/* <Card.Img variant="top" src={song.img} /> */}
                            <Card.Body>
                                {song.songAltName} <br></br>
                                {song.songYear}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            {/* <Card.Img variant="top" src={song.img} /> */}
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default SongAccordion;
