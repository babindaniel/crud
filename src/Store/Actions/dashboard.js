import axios from 'axios';
import * as actionTypes from './actionTypes';

export const update_user = (data,id) => {
    return dispatch => {
        axios.put(`https://6081567d73292b0017cdd50e.mockapi.io/user/adduser/${id}`, data)
            .then(response => {                                            
                dispatch(editSuccess(response.data));
            })
            .catch(error => {
                dispatch(editFailure(error));
            });
    }
};
export const fetch_user = (id) => {
    return dispatch => {
        axios.get(`https://6081567d73292b0017cdd50e.mockapi.io/user/adduser/${id}`)
            .then(response => {                
                let resArray = [];
                resArray.push(response.data);                            
                dispatch(fetchSuccess(resArray));
            })
            .catch(error => {
                dispatch(fetchFailure(error));
            });
    }
};
export const get_allData = () => {
    return dispatch => {
        axios.get('https://6081567d73292b0017cdd50e.mockapi.io/user/adduser')        
            .then(response => {
                dispatch(dataSuccess(response.data));
            })
            .catch(error => {
                dispatch(dataFailure(error));
            });        
    };
};

export const add_user = (data) => {
    return dispatch => {
       
        axios.post('https://6081567d73292b0017cdd50e.mockapi.io/user/adduser', data)
            .then(response => {
                console.log('adduser-->',response)
                dispatch(addSuccess(response));
            })
            .catch(error => {
                dispatch(addFailure(error));
            });        
    };
};

export const remove_user = (id) => {
    
    return dispatch => {        
        axios.delete(`https://6081567d73292b0017cdd50e.mockapi.io/user/adduser/${id}`)
            .then(response => {                
                if(response.status === 200) {
                    dispatch(removeSuccess(response.data.name));
                } else {
                    console.log("Some error occured!");
                }
               
            })
    };   

};


export const editSuccess = (data) => {
    
    return {
        type: actionTypes.EDIT_SUCCESS,
        userData: data,
        isUpdated : true,
        msg: `${data.name} updated successfully`
    };
};

export const editFailure = (error) => {
    console.log('edit error->',error)
};
export const fetchSuccess = (data) => {
    console.log('after success')
    return {
        type: actionTypes.FETCH_DATA,
        userData: data
    };
};

export const dataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA,
        userData: data
    };
};

export const dataFailure = (error) => {
    console.log(error)
};

export const fetchFailure = (error) => {
    console.log('fetch error->',error)
};

export const addSuccess = (data) => {

    if(data.status === 200 || data.status === 201) {        
        return {
            type: actionTypes.ADD_USER,
            isUpdated : true,
            msg: `${data.data.name} added successfully`
        }
    }   else {
       
    } 
};

export const addFailure = (error) => {
    console.log(error)
};

export const removeSuccess = (data) => {
    
    return {
        type: actionTypes.REMOVE_USER,
        Removed: true,
        msg: `${data} deleted successfully`
    };
    
};

export const removeFailure = (error) => {
    console.log(error)
};
