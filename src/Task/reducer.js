import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "../Task/type";
const initialState={
    products:{}
}
export const userReducer=(state=initialState,action)=>{
    const{type,playload}=action;
    
    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            };
            case USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    products:playload
                };
                default:
                    return state;
    }
}
