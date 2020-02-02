import React, { Component } from 'react'
import './../Style/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


class Login extends Component {

    loginSubmit() {

    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-4 col-md-offset-4 login-form-border login-form-position'>
                    <Form>
                        <div className='login-form-header'>
                            Login
                </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Link to='/home'>
                            <Button variant="primary" type="submit" onClick={this.loginSubmit}>
                                Submit
                </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login