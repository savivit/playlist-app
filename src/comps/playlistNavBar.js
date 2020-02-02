import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import '../css/playlistNavbar.css'

class playlistNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectToHome: false
        }

        this.logout = this.logout.bind(this);
    }

    logout() {
        // This eventually calls the handleLogout method of the App component
        this.props.handleLogout();

        this.setState({
            redirectToHome: true
        })
    }

    componentDidUpdate() {
        if (this.state.redirectToHome) {
            this.setState({
                redirectToHome: false
            })
        }
    }

    render() {
        const { redirectToHome } = this.state;
        const { activeUser } = this.props;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        const mainLink = activeUser ? <Nav.Link href="#/main"> עמוד ראשי  | </Nav.Link>: null;
        const playlistLink = activeUser ? <Nav.Link href="#/playlist"> רשימת השירים  | </Nav.Link>: null;
        const onesongLink = activeUser ? <Nav.Link href="#/onesong">שיר אחד</Nav.Link> : null;
        const helloLink = activeUser ? <Nav.Link href="#/login"> שלום  {activeUser.fname} | </Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login"> כניסה | </Nav.Link> : null;
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
                        {mainLink}
                        {playlistLink}
                        {onesongLink}
                    </Nav>
                    <Nav className="mr-auto">
                        {helloLink} 
                        {loginLink}
                        {signinLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default playlistNavbar;