import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {Layout} from 'antd';
import {Loader} from '@utils/loader.tsx';
import {NavLink, Outlet,  useNavigate} from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import {useEffect} from 'react';
import {push} from 'redux-first-history';

export const LayoutLoginPage = () => {
    const dispatch = useAppDispatch()
    const isPending = useAppSelector(state => state.common.isPending)
    const navigate = useNavigate();
    const router = useAppSelector(state => state.router.location)
    useEffect(() => {
        if (router?.pathname === '/login') {
            dispatch(push('/login/singIn'));
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
                            <NavLink to={'singIn'}
                                     className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'}>
                                Вход

                            </NavLink>
                            <NavLink to={'singUp'}
                                     className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'
                                     }>

                                Регестрация
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
