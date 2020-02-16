import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import '../css/newAlbumModalWindow.css';

class NewAlbumModalWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tsalbumId: "",
            tsalbumName: "",
            tsalbumReleaseDate: "",
            tsalbumArtists: "",
            tsalbumPicLg: ""
            /* fileImg: {
                file: undefined,
                URL: undefined
            } */
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createAlbum = this.createAlbum.bind(this);
        //this.handleFileChange = this.handleFileChange.bind(this);
    }

    /* handleFileChange(event) {
        let newFileImg;
        if (event.target.files[0]) {
            newFileImg = {
                file: event.target.files[0],
                URL: URL.createObjectURL(event.target.files[0])
            }
        } else {
            newFileImg = {
                file: undefined,
                URL: undefined
            }
        } 
        this.setState({fileImg: newFileImg});        
    }*/

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    createAlbum() {
        const { tsalbumId, tsalbumName, tsalbumReleaseDate, tsalbumArtists, tsalbumPicLg } = this.state;
        const newAlbum = { tsalbumId, tsalbumName, tsalbumReleaseDate, tsalbumArtists, tsalbumPicLg };
        this.props.handleNewAlbum(newAlbum);
        this.props.handleCloseAlbum();
        this.setState({
            tsalbumId: "",
            tsalbumName: "",
            tsalbumReleaseDate: "",
            tsalbumArtists: "",
            tsalbumPicLg: ""
        })
    }

    render() {
        const { show, handleCloseAlbum } = this.props;
        const { tsalbumId, tsalbumName, tsalbumReleaseDate, tsalbumArtists, tsalbumPicLg } = this.state;

        return (
            <Modal show={show} onHide={handleCloseAlbum}>
                <Modal.Header closeButton>
                    <Modal.Title>אלבום חדש</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>שם האלבום</Form.Label>
                            <Form.Control name="tsalbumName" value={tsalbumName}
                                type="text" placeholder="הכניסו את שם האלבום" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>תיאור</Form.Label>
                            <Form.Control name="tsalbumReleaseDate" value={tsalbumReleaseDate}
                                type="text" placeholder="הכניסו תאריך יציאת האלבום" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>שם האלבום</Form.Label>
                            <Form.Control name="tsalbumArtists" value={tsalbumArtists}
                                type="text" placeholder="הכניסו רשימת אמנים באלבום" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>תיאור</Form.Label>
                            <Form.Control name="tsalbumId" value={tsalbumId}
                                type="text" placeholder="הכניסו קוד ספוטיפיי לאלבום" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>קישור לתמונה</Form.Label>
                            <Row>
                                <Col>
                                    {/*  <Form.Control type="file" onChange={this.handleFileChange} /> */}
                                    <Form.Control name="tsalbumPicLg" value={tsalbumPicLg} type="text" placeholder="הכניסו קישור לתמונה" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Image src={tsalbumPicLg} fluid />
                                </Col>

                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="lightgray" onClick={handleCloseAlbum}>
                        ביטול
                </Button>
                    <Button variant="primary" onClick={this.createAlbum}>
                        יצירה
                </Button>
                </Modal.Footer>
            </Modal>);
    }
}

export default NewAlbumModalWindow;



