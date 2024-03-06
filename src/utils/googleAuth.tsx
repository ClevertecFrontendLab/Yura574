import {useEffect} from 'react';
import {history, useAppDispatch} from '@redux/configure-store.ts';
import {path} from '../routers/routers.tsx';
import {push} from 'redux-first-history';
import {setIsAuth} from '@redux/reducers/auth/auth-reducer.ts';

const GoogleAuth = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const urlParams = new URLSearchParams(history.location.search);
        const accessToken = urlParams.get('accessToken');
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken)
            dispatch(setIsAuth(true))
            dispatch(push(path.main))
        }
        dispatch(push(path.auth))
    }, [dispatch])
    return null;
};

export default GoogleAuth;
