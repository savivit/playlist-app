import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import TheFooter from '../comps/playlistFooter';
// eslint-disable-next-line
import { Link, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import { Container, Row, Col, Button, Image, Badge, Modal } from 'react-bootstrap'
import '../css/homePage.css'


class HomePage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        return (
            <div>
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <div className="homepageArticle">
                    <Container>
                        <Row>
                            <Col lg={8} md={12} >
                                <div className="homepagePic">
                                    <img alt="" src={require('../images/homepagePic.jpg')} width="100%"></img>
                                </div>
                            </Col>
                            <Col className="homepageWelcome" lg={4} md={12} >
                                <h1>ברוכים הבאים</h1>
                                <h4>מוזמנים להצטרף ולארגן את רשימות ההשמעה שלכם</h4>
                                <Button variant="primary"><Link to="/signin">צרו חשבון חדש</Link></Button>
                                <br></br>
                                <h4>אם נרשמתם כבר עברו ל</h4>
                                <Button variant="primary" size="sm"><Link to="/login">כניסה לחשבון</Link></Button>
                                <br></br>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <TheFooter />
            </div>
        );
    }
}

export default HomePage; 
