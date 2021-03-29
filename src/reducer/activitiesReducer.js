import uuid from 'uuid/dist/v4'

const initialState = [{
    id: 1,
    name: 'gym',
    duration: '2 hours'
}];

const activitiesReducer = ( state = initialState, action ) =>{
    const {type, payload} = action

    switch(type){
        case 'CREATE_ACTIVIY':
            return [...state, {
                id: uuid(),
                name: payload.name,
                duration: payload.duration
            }];
        case 'DELETE_ACTIVIRY':
            const copyState = [...state]
            //find id to remove it
            const i = copyState.findIndex(x => x.id === payload.id)
            copyState.splice(i, 1);
            return [...copyState]

            default:
            return state
    }
}

export default activitiesReducer