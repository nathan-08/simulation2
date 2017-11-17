import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'


//current user will be stored in this.props.currentUser
class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            allProps:[{name: 'nice property', price: 100000},{name: 'poor property', price: 32}],
            filteredProps: []
        }
    }
    deleteThisProp(){
        alert('not sure how to program this... try the Q')
    }
    componentWillMount(){
        //get properties for current user
        axios.get(`http://localhost:3001/api/properties`)
        .then(res=>{this.setState({
            currentUserProperties : res.data
        })})
    }
    
    render(){
        
      return(
        <div className='Dashboard'>
            <h3>current user: {this.props.currentUser.name}</h3>
            <Link to='/wizard/1'><button>Add new property</button></Link>
            <p>List properties with "desired rent" greater than: $</p><input placeholder='0'/>
            <button>Filter</button><button>Reset</button>
            <h3>Home Listings</h3>
            {/*HOME LISTING OBJECTS DISPLaY HERE*/}
            
            
        </div>
      )
  }
}
function mapStateToProps(state){
    let {currentUser} = state;
    return {
        currentUser
    }
}
export default connect(mapStateToProps)(Dashboard)