import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {updateWizardProgress} from '../ducks/reducer'
import{connect} from 'react-redux'


class Wizard5 extends Component{
    componentDidMount(){
        this.props.updateWizardProgress(5)
    }
  render(){
      return(
        <div className='render-page'>
                        <p>Wizard Progress: {this.props.wizardProgress}/5</p>
            <Link to='/dashboard'><button>Complete</button></Link>
        </div>
      )
  }
}
function mapStateToProps(state) { console.log('state: ',state)
let {wizardProgress} = state
return {
    wizardProgress
}
}
export default connect(mapStateToProps, {updateWizardProgress})(Wizard5);