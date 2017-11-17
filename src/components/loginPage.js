import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {setCurrentUser} from '../ducks/reducer'
import {connect} from 'react-redux'



class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            unInput: '',
            password: '',
            pwInput: ''
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleUsernameInput = this.handleUsernameInput.bind(this)
    }
    handleUsernameInput(e) {
        this.setState({
            unInput: e.target.value
        })
    }
    handlePasswordInput(e) {
        this.setState({
            pwInput: e.target.value
        })
    }
    handleLoginClick() {
        this.setState({
            username: this.state.unInput,
            password: this.state.pwInput
        })
        axios.post(`http://localhost:3001/api/auth/login`, {name: this.state.unInput, password: this.state.pwInput})
        .then(res=>{
            //set current user in store, move on to dashboard, or throw alert
            if(!res){
                alert('Wrong username or password')
            } else {
                //set current user in store, link to dashboard
                this.props.setCurrentUser(res.data);
                console.log('res', res)
                this.props.history.push('/dashboard');
                
            }
        })
    }
    handleRegisterClick() {
        this.setState({
            username: this.state.unInput,
            password: this.state.pwInput
        })
        console.log('un, pw', this.state.unInput, this.state.pwInput)
        axios.post(`http://localhost:3001/api/auth/register`, {name: this.state.unInput, password: this.state.pwInput})
        .then(res=>{

                this.props.setCurrentUser(res.data);
                console.log('res:', res)
                this.props.history.push('/dashboard');
            }
        )
    }
    registerUser(){
        
    }
    render() {
        return (
            <div className='LoginPage'>
                {/*HOUSE PIC*/}
                <h3>Username</h3>
                <input onChange={e=>this.handleUsernameInput(e)} value={this.state.unInput} />
                <h3>Password</h3>
                <input onChange={e=>this.handlePasswordInput(e)} type='password' value={this.state.pwInput} />
                {/*login button; register button */}
                <button onClick={this.handleLoginClick}>Login</button><button onClick={this.handleRegisterClick}>Register</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    let {currentUser} = state
    return {
        currentUser
    }
}
export default connect(mapStateToProps, {setCurrentUser})(LoginPage)