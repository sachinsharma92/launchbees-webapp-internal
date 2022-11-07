import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { loginWithToken } from '../../../redux/actions/userActions';

function LoginSuccess() {

    let [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    

    useEffect(() => {
        //load user details
        const token = searchParams.get("token")
        console.log(token)
        if(token) dispatch(loginWithToken(token));
        return () => {
            //nothing
        }
    }, [])


    return (
        <Spin spinning={true}>
            <div>Logging you in</div>
        </Spin>
    )
}

export default LoginSuccess