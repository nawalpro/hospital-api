
import axios from 'axios';
import { Dispatch  } from "redux";
import * as types from '../actionsType';
import { Action } from '../action';
import {LoginStartAction, LoginSucessAction, LoginFailAction } from '..';

export const loginInitiate = (email: string, password: string) => {
    return function (dispatch : Dispatch<Action>) {
        dispatch(LoginStartAction());
        axios
        .post('http://localhost:8000/patient/auth',{
            email,
            password,
        })
        .then((response) => {
            console.log("response", response);
            dispatch(LoginSucessAction(response.data.acess_token))
        })
        .catch((error) => dispatch(LoginFailAction(error.response.data.message)));
    }
};
