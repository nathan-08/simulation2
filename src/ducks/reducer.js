const initialState={
    wizardProgress: 0,
    currentUser: {}
}
const UPDATE_WIZARD_PROGRESS = 'UPDATE_WIZARD_PROGRESS'
const SET_CURRENT_USER   = 'SET_CURRENT_USER'

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WIZARD_PROGRESS:
            return Object.assign({}, state, {wizardProgress: action.payload})
        case SET_CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.payload})
        default: 
            return state;
    }
}
export function setCurrentUser(name){
    return {
        type: SET_CURRENT_USER,
        payload: name
    }
}
export function updateWizardProgress(num){ // num 1-5 
    return {
        type: UPDATE_WIZARD_PROGRESS,
        payload: num
    }
}
export default reducer;