import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {Layout} from 'antd';
import {NavLink, Outlet} from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {path, pathName} from '../../routers/routers.tsx';

export const LayoutLoginPage = () => {
    const dispatch = useAppDispatch()
    const isPending = useAppSelector(state => state.common.isPending)
    const router = useAppSelector(state => state.router.location)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        if (isAuth || accessToken) {
            dispatch(push(path.main))
        }
    }, [dispatch, isAuth, accessToken]);

    useEffect(() => {
        if (router?.pathname === pathName.auth) {
            dispatch(push(`${path.login}`));
        }
    }, [router, dispatch]);

    return (
        <div className={`login_page_image-light ${isPending && 'login_page_image-light_blur'}`}>

            <Layout className={'loginPage_layoutPageWrapper'}>
                {router?.pathname === `${path.login}` || router?.pathname === `${path.registration}`
                    ? <div className={'loginPage_loginFieldWrapper'}>
                        <img src={logo} className={'loginPage_logo'} alt={'logo'}/>

                        <div className={'loginPage_forms body_regular_16'}>

                            <div className={'loginPage_tabsWrapper'}>
                                <NavLink to={pathName.singIn}
                                         className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'}>
                                    Вход
                                </NavLink>
                                <NavLink to={pathName.singUp}
                                         className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'
                                         }>
                                    Регистрация
                                </NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                    : <Outlet/>


                }
            </Layout>


        </div>
    )
}
