import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import '../css/newSongModalWindow.css';

class NewSongModalWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            performer: "",
            songOrder: "",
            previewLink: "",
            pic: ""
            /* fileImg: {
                file: undefined,
                URL: undefined
            } */
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createSong = this.createSong.bind(this);
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

    createSong() {
        const { title, performer, songOrder, previewLink, pic } = this.state;
        const newSong = { title, performer, songOrder, previewLink, pic };
        this.props.handleNewSong(newSong);
        this.props.handleCloseSong();
        this.setState({
            title: "",
            performer: "",
            songOrder: "",
            previewLink: "",
            pic: ""
        })
    }

    render() {
        const { show, handleCloseSong } = this.props;
        const { title, performer, songOrder , previewLink, pic } = this.state;

        return (
            <Modal show={show} onHide={handleCloseSong}>
                <Modal.Header closeButton>
                    <Modal.Title>שיר חדש לרשימה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>שם השיר</Form.Label>
                            <Form.Control name="title" value={title}
                                type="text" placeholder="הכניסו את שם השיר" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>ביצוע</Form.Label>
                            <Form.Control name="performer" value={performer}
                                type="text" placeholder="הכניסו את שמות המבצעים" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>מספר השיר ברשימה</Form.Label>
                            <Form.Control name="songOrder" value={songOrder}
                                type="text" placeholder="1, 2, 3, ..." onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>לינק להשמעה</Form.Label>
                            <Form.Control name="previewLink" value={previewLink}
                                type="text" placeholder="הכניסו קישור להשמעה" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>קישור לתמונה</Form.Label>
                            <Row>
                                <Col>
                                    {/*  <Form.Control type="file" onChange={this.handleFileChange} /> */}
                                    <Form.Control name="pic" value={pic} type="text" placeholder="הכניסו קישור לתמונה" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Image src={pic} fluid />
                                </Col>

                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="lightgray" onClick={handleCloseSong}>
                        ביטול
                </Button>
                    <Button variant="primary" onClick={this.createSong}>
                        יצירה
                </Button>
                </Modal.Footer>
            </Modal>);
    }
}

export default NewSongModalWindow;