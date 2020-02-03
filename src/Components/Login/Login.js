import React, { Component } from 'react'
import './../Style/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import loginService from './../../Services/loginService'


class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            password:'',
            email:''
        }
        this.loginSubmit = this.loginSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

    }

    handlePasswordChange(e) {
        this.setState({password:e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email:e.target.value})
    }

    loginSubmit() {
        console.log(this.state)
    }

    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-4 col-md-offset-4 login-form-border login-form-position'>
                    <Form onSubmit={this.formSubmit}>
                        <div className='login-form-header'>
                            Login
                </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handlePasswordChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleEmailChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.loginSubmit}>
                            Submit
                </Button>

                    </Form>
                </div>
            </div>
        )
    }
}

export default Login