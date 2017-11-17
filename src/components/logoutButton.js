import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {setCurrentUser} from '../ducks/reducer'
import {connect} from 'react-redux'

class LogoutButton extends Component  {
    constructor(){
        super()
        this.logout=this.logout.bind(this)
    }
    logout(){
        //set current user in store to null
        axios.post(`/api/auth/logout`)
        .then(this.props.setCurrentUser({}))
    }
    render(){
    return (
        <Link to='/'><button onClick={this.logout}className='button'>Logout</button></Link>
    )
}
}
function mapStateToProps(state){
    let {currentUser} = state
    return{
        currentUser
    }
}
export default connect(mapStateToProps, {setCurrentUser})(LogoutButton)