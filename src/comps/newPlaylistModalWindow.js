import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';

class NewPlaylistModalWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            desc: "",
            pic:""
            /* fileImg: {
                file: undefined,
                URL: undefined
            } */
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
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

    createPlaylist() {
        const { title, desc, pic } = this.state;
        const newPlaylist = { title, desc, pic};
        this.props.handleNewPlaylist(newPlaylist);
        this.props.handleClosePlaylist();
        this.setState({
            title: "",
            desc: "",
            pic:""
        })
    }

    render() {
        const { show, handleClosePlaylist } = this.props;
        const { title, desc, pic } = this.state;

        return (
            <Modal show={show} onHide={handleClosePlaylist}>
                <Modal.Header closeButton>
                    <Modal.Title>New Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" value={title}
                                type="text" placeholder="Enter Playlist Title" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="desc" value={desc}
                                type="text" placeholder="Enter Description" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Row>
                                <Col>
                           {/*  <Form.Control type="file" onChange={this.handleFileChange} /> */}
                           <Form.Control name="pic" value={pic} type="text" placeholder="Enter pic URL" onChange={this.handleInputChange} />
                                </Col>
                                <Col>
                                    <Image src={pic} fluid/>
                                </Col>

                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePlaylist}>
                        Cancel
                </Button>
                    <Button variant="success" onClick={this.createPlaylist}>
                        Create
                </Button>
                </Modal.Footer>
            </Modal>);
    }
}

export default NewPlaylistModalWindow;