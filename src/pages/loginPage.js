import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Parse from 'parse'
import TheNavbar from '../comps/playlistNavbar';
import UserModel from '../models/userModel';
import '../css/loginPage.css'


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pwd: "",
            showInvalidLoginError: false,
            redirectToRecipesPage: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    login() {
        const { handleLogin } = this.props;
        const { email, pwd } = this.state;

        // Pass the username and password to logIn function
        Parse.User.logIn(email, pwd).then(parseUser => {
            // Do stuff after successful login
            const user = new UserModel(parseUser);
            console.log('Logged in user', user);

            // 1) Updating App component on the new active user
            handleLogin(user);

            // 2) navigate to recipes page
            this.setState({
                redirectToRecipesPage: true
            });

        }).catch(error => {
            console.error('Error while logging in user', error);
            this.setState({
                showInvalidLoginError: true
            });
        })
    }

    render() {
        const { email, pwd, showInvalidLoginError, redirectToRecipesPage } = this.state;

        if (redirectToRecipesPage) {
            return <Redirect to="/playlist" />
        }

        const errorAlert = showInvalidLoginError ? <Alert variant="danger">אימייל או סיסמה לא נכונים</Alert> : null;

        return (
            <div className="article">
                <TheNavbar activeUser="false" />
                <div className="p-login">
                    <div className="main">
                        <h1>כניסה לחשבון</h1>
                        <p>או  <Link id="create" to="/signin">יצירת חשבון חדש</Link></p> 
                        {errorAlert}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>אימייל</Form.Label>
                                <Form.Control name="email" value={email}
                                    type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>סיסמה</Form.Label>
                                <Form.Control name="pwd" value={pwd}
                                    type="password" placeholder="Password" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button type="button" block onClick={this.login}>
                                כניסה
                        </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
