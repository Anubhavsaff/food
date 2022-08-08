import axios from "axios"
import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "./type"

export const Fetchshop=(food)=>async(dispatch)=>{
    dispatch({
        type:USER_LOGIN_REQUEST,
       
    })
    try{
        const res=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}=&beta=false&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`)
        console.log(res)
        dispatch({
            type: USER_LOGIN_SUCCESS, 
            playload: res , 
        })
    }
    catch(err){
        console.log(err)
        dispatch({
            type:USER_LOGIN_FAILED

        })    }
}

