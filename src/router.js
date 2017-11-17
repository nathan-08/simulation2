import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './components/loginPage'
import Dashboard from './components/dashboard'
import Wizard1 from './components/wizard1'
import Wizard2 from './components/wizard2'
import Wizard3 from './components/wizard3'
import Wizard4 from './components/wizard4'
import Wizard5 from './components/wizard5'

export default 
<HashRouter>
<Switch>
    <Route exact path='/' component={LoginPage} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/wizard/1' component={Wizard1} />
    <Route path='/wizard/2' component={Wizard2} />
    <Route path='/wizard/3' component={Wizard3} />
    <Route path='/wizard/4' component={Wizard4} />
    <Route path='/wizard/5' component={Wizard5} />
</Switch>
</HashRouter>
