import React, { Component } from 'react';
import TheNavbar from '../comps/playlistNavbar';
import TheFooter from '../comps/playlistFooter';
import { Link, Redirect } from 'react-router-dom';
import '../css/homePage.css'
import { Container, Row, Col, Button, Image, Badge, Modal } from 'react-bootstrap'


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
                        <Col className="" lg={8} xs={12} md={{ order: 2 }}>
                                <div className="homepagePic">
                                    <img alt="" src={require('../images/homepagePic.jpg')} width="100%"></img>
                                </div>
                            </Col>
                            <Col lg={4} xs={12} md={{ order: 1 }}>
                                <h1>ברוכים הבאים</h1>
                                <h3>מוזמנים להצטרף ולארגן את רשימות ההשמעה שלכם</h3>
                                <h3><p><Link id="create" to="/signin">צרו חשבון חדש</Link>
                                    או אם נרשמתם כבר עברו ל <Link id="create" to="/login">כניסה לחשבון</Link></p></h3>
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
