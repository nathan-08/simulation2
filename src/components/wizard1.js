import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateWizardProgress } from '../ducks/reducer'
import { connect } from 'react-redux'


class Wizard1 extends Component {
    componentDidMount() {
        this.props.updateWizardProgress(1)
    }

    render() {


        return (
            <div className='render-page'>

                <div className='add-new-listing-text'>Add new listing <button>Cancel</button>
                    <div>Step 1</div>
                    <div> Progress Circles </div>
                </div>
                <div>Property name
            <input />
                </div>
                <div>Property Description
            <input />
                </div>
                <div>
                    <Link to='/wizard/2'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('state: ', state)
    let { wizardProgress } = state
    return {
        wizardProgress
    }
}
export default connect(mapStateToProps, { updateWizardProgress })(Wizard1);