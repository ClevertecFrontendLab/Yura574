import {useAppSelector} from '@redux/configure-store.ts';
import {Layout} from 'antd';
import {Loader} from '@utils/loader.tsx';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import {useEffect, useState} from 'react';

const tabs = {
    login: 'login',
    register: 'register'
}
export const LayoutLoginPage = () => {
    const isPending = useAppSelector(state => state.common.isPending)
    const navigate = useNavigate();
    const [tab, setTab] = useState(tabs.login)

    const tabHandler = (tab: string) => {
        setTab(tab)
    }
    useEffect(() => {
        // Проверьте условие для перехода
        if (window.location.pathname === '/login') {
            navigate('/login/singIn');
        }
    }, [navigate]);


    return (
        <div className={`login_page_image-light ${isPending && 'login_page_image-light_blur'}`}>
            <Layout className={'loginPage_layoutPageWrapper'}>

                <div className={'loginPage_loginFieldWrapper'}>
                    <img src={logo} className={'loginPage_logo'} alt={'logo'}/>

                    <div className={'loginPage_forms body_regular_16'}>

                        <div className={'loginPage_tabsWrapper'}>
                            <Link to={'singIn'}>
                            <div
                                className={`loginPage_tab ${tab === tabs.login && 'loginPage_activeTab'} `}
                                onClick={() => tabHandler(tabs.login)}>Вход
                            </div>
                            </Link>
                            <Link to={'singUp'}> <div
                                className={`loginPage_tab ${tab === tabs.register && 'loginPage_activeTab'}`}
                                onClick={() => tabHandler(tabs.register)}>Регестрация
                            </div>
                            </Link>
                        </div>
                        {isPending && <Loader/>}
                        <Outlet/>
                    </div>
                </div>
            </Layout>


        </div>
    )
}
