import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {Layout} from 'antd';
import {Loader} from '@utils/loader.tsx';
import {NavLink, Outlet,  useNavigate} from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {pathName} from '../../routers/routers.tsx';

export const LayoutLoginPage = () => {
    const dispatch = useAppDispatch()
    const isPending = useAppSelector(state => state.common.isPending)
    const navigate = useNavigate();
    const router = useAppSelector(state => state.router.location)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    useEffect(() => {
        if(isAuth){
            dispatch(push(pathName.main))
        }
    }, [dispatch, isAuth]);
    useEffect(() => {
        if (router?.pathname === pathName.auth) {
            dispatch(push(`${pathName.auth}/${pathName.singIn}`));
        }
    }, [navigate, router]);


    return (
        <div className={`login_page_image-light ${isPending && 'login_page_image-light_blur'}`}>
            {isPending &&<Loader/>}
            <Layout className={'loginPage_layoutPageWrapper'}>

                <div className={'loginPage_loginFieldWrapper'}>
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
                        {/*{!isPending &&<Loader/>}*/}
                        <Outlet/>
                    </div>
                </div>
            </Layout>


        </div>
    )
}
