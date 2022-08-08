
import axios from "axios"
import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "../Task/type";

export const Fetchdata=(item)=>async (dispatch)=>{
    dispatch({
    type :USER_LOGIN_REQUEST
})
try{
    const res=await axios.get("https://fakestoreapi.com/products")
    // console.log(res)
    dispatch({
        type:USER_LOGIN_SUCCESS,
        playload:res
    })
}
catch(err){
    console.log(err)
    dispatch({
        type:USER_LOGIN_FAILED
    })
}

}
