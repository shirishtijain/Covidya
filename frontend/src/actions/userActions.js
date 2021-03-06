import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERROR
} from "../constants/userConstants";
import axios from "axios";


//LoginUser

export const login = (email, password) => async (dispatch) => {
    try {
        console.log(email, password)
        dispatch({ type: LOGIN_REQUEST })
        
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:4000/api/v1/login', { email, password }, config);
        console.log(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload:data.user
        })
    }
    catch (error) {
        dispatch({
            type: LOGIN_FAIL,
           payload:error.response.data.message 
        })
    }


}


//register user

// Register user
export const register = (name,email, password) => async (dispatch) => {
    try {
        console.log(name, email, password);
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:4000/api/v1/register', {name, email, password}, config)
        console.log(data);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
        console.log(error);
    }
}


//logoutUser
export const logout = () => async (dispatch) => {
    try {

        await axios.get('http://localhost:4000/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}


//clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:CLEAR_ERROR
    })
}