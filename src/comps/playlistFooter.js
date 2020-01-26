import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import '../css/playlistFooter.css'

class playlistFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* const { activeUser } = "false";//this.props;

        const playlistLink = activeUser ? <Nav.Link href="#/playlist">רשימת השירים</Nav.Link> : null;
        const onesongLink = activeUser ? <Nav.Link href="#/onesong">שיר אחד</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">כניסה</Nav.Link> : null;
        const signinLink = !activeUser ? <Nav.Link href="#/signin">הרשמה</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>יציאה</Nav.Link> : null; */
        return (
            <footer className="page-footer font-small teal pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
                              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                                  commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">Copyright:
                © 2020<a href="https://www.imndb.co.il/"> Avivit Apfelbaum</a>  
                </div>
            </footer>
        );
    }
}

export default playlistFooter;



/*
<Navbar expand="lg">
            <Navbar.Brand href="#/">IMNDB App</Navbar.Brand>
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
        </Navbar> */