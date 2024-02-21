import { Layout} from 'antd';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts'
import {Outlet, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {pathName} from '../../routers/routers.tsx';
// import {useEffect} from 'react';

export const ResultPage = () => {
    const dispatch = useAppDispatch()

    const location = useLocation()
    const isPending = useAppSelector(state => state.common.isPending)

    useEffect(() => {
        if (!location.state) {
            console.log(location)
            dispatch(push(pathName.auth))
        }
    }, [location, dispatch]);
    return (
        <div className={`login_page_image-light ${isPending && 'login_page_image-light_blur'}`}>
            <Layout className={'loginPage_layoutPageWrapper'}>
                <Outlet/>
            </Layout>


        </div>
    )
}
