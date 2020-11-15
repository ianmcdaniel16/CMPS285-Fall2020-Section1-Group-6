import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Admin from './Admin';
import './Loginn'
import Loginn from './Loginn';

class AccountInfo extends React.Component{
    logOut(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type:'Log_out'})
    }
    render() {
        var {username} = this.props;
        var xhtml = username === null? <Loginn/> : <AccountInfo/>
        return(
            <Link to = '/admin'>
                <a href="admin" className = "Admin"> </a>
            </Link>
        )
        
        }
}

module.export = connect(function (state){
    return {username: state.username};
}) (AccountInfo); 