import { useEffect } from 'react';
import {history, useAppDispatch} from '@redux/configure-store.ts';
import {pathName} from '../routers/routers.tsx';
import {push} from 'redux-first-history';
import {setIsAuth} from '@redux/reducers/auth/auth-reducer.ts';
const GoogleAuth = () => {

const dispatch = useAppDispatch()
    useEffect(() => {
        const urlParams = new URLSearchParams(history.location.search);
        const accessToken = urlParams.get('accessToken');

        console.log(urlParams)
        console.log(accessToken)
        if(accessToken){
            localStorage.setItem('accessToken', accessToken)
            dispatch(setIsAuth(true))
        }
        dispatch(push(pathName.main))
    }, [dispatch])
    return null;
};

export default GoogleAuth;
