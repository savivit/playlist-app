import React, { Component } from 'react';
import { Navbar, Nav , Image } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import '../css/playlistNavbar.css'

class playlistNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeUser } = "false";//this.props;

        const playlistLink = activeUser ? <Nav.Link href="#/playlist">רשימת השירים</Nav.Link> : null;
        const onesongLink = activeUser ? <Nav.Link href="#/onesong">שיר אחד</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">כניסה</Nav.Link> : null;
        const signinLink = !activeUser ? <Nav.Link href="#/signin">הרשמה</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>יציאה</Nav.Link> : null;
      
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#/">
                <img alt="" src={require('../images/piano_light_rgb.png')} width="30" height="30" className="d-inline-block align-top" />
                {' '}IMNDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {playlistLink}
                        {onesongLink}
                    </Nav>
                    <Nav className="mr-auto">
                        {signinLink}
                        {loginLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default playlistNavbar;