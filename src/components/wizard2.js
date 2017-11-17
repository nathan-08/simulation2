import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateWizardProgress } from '../ducks/reducer'
import { connect } from 'react-redux'


class Wizard2 extends Component {
    componentDidMount() {
        this.props.updateWizardProgress(2)
    }
    render() {
        return (
            <div className='render-page'>
                <div className='add-new-listing-text'>Add new listing <button className='cancel-button'>Cancel</button>
                    <div className='step-text'>Step 2</div>
                    <div> Progress Circles </div>
                </div>
                <div className='Address-Containter'>
                    <div>Address
                            <input />
                    </div>
                    <div className='City'> City
                            <input />
                    </div>
                    <div className='state'> State
                            <input />
                    </div>
                    <div className='zip'> Zip
                            <input />
                    </div>
                    <div className='step-button-container'>
                        <div>
                            <button className='previous-step-button' >Previous Step</button>
                        </div>
                        <div>
                            <Link to='/wizard/3'><button className='next-step-button' >Next Step</button></Link>
                        </div>
                    </div>
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
export default connect(mapStateToProps, { updateWizardProgress })(Wizard2);