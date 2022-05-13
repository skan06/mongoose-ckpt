import { FAIL_CONTACT, GET_CONTACT, GET_ONE_CONTACT, LOAD_CONTACT } from "../actionstypes/contact";


const initialState={
    contactlist:[],
    contactToGet:{},
    load:false,
    error:null
}
export const contactReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_CONTACT:
            return {...state,load:true};
        case GET_CONTACT:
            return {...state,contactlist:payload.contactlist,load:false};
        case GET_ONE_CONTACT:
            return {...state,contactToGet:payload.contactToGet,load:false};
        case FAIL_CONTACT:
            return {...state,load:false,error:payload};
    
        default:
            return state;
    }
}