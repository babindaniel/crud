import axios from 'axios';
import * as actionTypes from './actionTypes';

export const get_all_voteList = () => {
    return dispatch => {
        axios.get('https://6081567d73292b0017cdd50e.mockapi.io/user/vote')        
            .then(response => {
                console.log('vote data-->,',response);
                dispatch(voteSuccess(response.data));
            })
            .catch(error => {
                dispatch(voteFailure(error));
            });        
    };
};

export const voteSuccess = (data) => {
    return {
        type: actionTypes.GET_ALLVOTES,
        userData: data
    };
};
export const voteFailure = (data) => {
    console.log('vote api failed')
}