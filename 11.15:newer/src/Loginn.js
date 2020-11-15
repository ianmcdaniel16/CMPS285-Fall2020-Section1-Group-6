import React, { Component } from "react";
import './Login.css'; 
import './AccountInfo'; 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs
        if(username === 'Ayanna' && password === '123456'){
            dispatch({type: 'Log_in', username: username})
        }
        console.log('Submit');
    }

    render() {
        return (
            <div className="back">
            <Form onSubmit={this.handleSubmit.bind(this)} className="Login">
                <h1 className="cool">
                    <span>Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <input type="username" placeholder="Username" className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password" className = "textboxes"/>
                </FormGroup>
                <button type="submit" className="LoginButton">
                    Log in
                    </button>
                <div className="text-center">
                    <Link to='/signup'>
                    <a href="sign-up" className = "SignUp">Sign up</a>
                    </Link>
                    
                    <a href="forgot-password" className = "ForgotPass">Forgot password</a>
                </div>
            </Form>
            </div>
        )
    }
}

export default connect()(Login);