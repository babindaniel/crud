import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    voteData:[],    
    isVoteUpdated:null,
    msg: '',
    loading: null
};

export const newObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const getAllVoters = ( state, action ) => {
    return newObject( state, { voteData: action.userData, isVoteUpdated: false} );
};
const reducerVoter = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALLVOTES: return getAllVoters( state, action );
        
        default: return state;
    }
};

export default reducerVoter;