import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "./type";
const initialState={
    recipes:{}
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
                    recipes:playload,
                    loading:false
                };
                case USER_LOGIN_FAILED:
                    return{
                        ...state,
                        recipe:[],
                        loading:false
                    };
                default:
                    return state;
    }
    
}