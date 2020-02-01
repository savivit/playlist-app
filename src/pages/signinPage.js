import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Parse from 'parse'
import TheNavbar from '../comps/playlistNavbar';
import UserModel from '../models/userModel';
import '../css/signinPage.css'

class SigninPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            email: "",
            pwd: "",
            showMovetoLogin: true,
            showInvalidLoginError: false,
            showRegistrationSucsses: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.register = this.register.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    register() {

        var user = new Parse.User();
        user.set("fname", this.state.fname);
        user.set("lname", this.state.lname);
        user.set("password", this.state.pwd);
        user.set("email", this.state.email);
        user.set("username", this.state.email);

        user.signUp().then(user => {
            const newuser = new UserModel(user);
            console.log('User created successful with name: ' + newuser.fname + ' ' + newuser.lname + ' and email: ' + newuser.email);
            this.setState({
                showRegistrationSucsses: true,
                showMovetoLogin : false
            });
        }).catch(error => {
            console.log("Error: " + error.code + " " + error.message);
            this.setState({
                showInvalidLoginError: true
            });
        });
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        const { fname, lname, email, pwd, showMovetoLogin, showInvalidLoginError, showRegistrationSucsses } = this.state;
        const movetoLogin = showMovetoLogin ? <p>אם נרשמתם כבר עברו ל  <Link id="create" to="/login">כניסה לחשבון</Link></p>: null;
        const errorAlert = showInvalidLoginError ? <Alert variant="danger">ההרשמה לא הצליחה, נסו שוב</Alert> : null;
        const sucssesAlert = showRegistrationSucsses ? <Alert variant="success"> הרשמה עברה בהצלחה! אפשר <Link id="create" to="/login">להכנס לחשבון</Link></Alert> : null;
        return (
            <div className="article">
                <TheNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <div className="p-login">
                    <div className="main">
                        <h1>יצירת חשבון חדש</h1>
                        {movetoLogin}
                        {errorAlert}
                        {sucssesAlert}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>שם פרטי</Form.Label>
                                <Form.Control name="fname" value={fname}
                                    placeholder="הכניסו את השם הפרטי" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>שם משפחה</Form.Label>
                                <Form.Control name="lname" value={lname}
                                    placeholder="הכניסו את שם המשפחה" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>אימייל</Form.Label>
                                <Form.Control name="email" value={email}
                                    type="email" placeholder="הכניסו אימייל" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>סיסמה</Form.Label>
                                <Form.Control name="pwd" value={pwd}
                                    type="password" placeholder="הכניסו סיסמה" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button type="button" block onClick={this.register}>
                                הרשמה
                        </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}


export default SigninPage; 
