import { AxiosInstance } from "axios";
import { MY_DETAILS } from "../../remote/apis/apiRoutes";
import { setAccessToken } from "../../remote/axios";
import { IEntityResponse, IUserResponse } from "../../remote/types/response";
import { IUser } from "../reducers/userReducer";

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export const login = (phone: number, otp: string): any => (dispatch: any, getState: any, { api } : any ): any => {

    // Call APIs here and get response
    // api.post('/login', {
    //     phone, otp
    // }).then(res => {

    // })

    const id = 12;
    const accessToken = 'xyz';
    const user : IUser = {
        id: 12,
        name: 'Sample User'
    }

    dispatch({
        type: USER_LOGGED_IN,
        payload: { id, accessToken, user },
    });;
}

export const loginWithToken = (token: string): any => (dispatch: any, getState: any, { api } : {api: AxiosInstance} ): any => {

    setAccessToken(api, token)

    api.get<IEntityResponse<IUserResponse>>(MY_DETAILS).then(res => {
        let data = res.data
        let user = data.data

        dispatch({
            type: USER_LOGGED_IN,
            payload: {...user, accessToken: token},
        });;

    }).catch(() => {
        dispatch({
            type: USER_LOG_OUT,
        });
    })
    // Call APIs here and get response
    // api.post('/login', {
    //     phone, otp
    // }).then(res => {

    // })

    
}

export const logout = (): any => (dispatch: any, getState: any, { api } : any ): any => {
    dispatch({
        type: USER_LOG_OUT,
    });
}