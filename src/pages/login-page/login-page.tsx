import React, {useState} from 'react';
import {Layout} from 'antd';
import logo from '../../assets/svg/logo.svg'
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';

const tabs = {
    login: 'login',
    register: 'register'
}
export const LoginPage: React.FC = () => {
    const [tab, setTab] = useState(tabs.login)
    const tabHandler = (tab: string) => {
        setTab(tab)
    }
    return (
        <div className={' login_page_image-light'}>
            <Layout className={'loginPage_layoutPageWrapper'}>

                <div className={'loginPage_loginFieldWrapper'}>
                    <img src={logo} className={'loginPage_logo'} alt={'logo'}/>

                    <div className={'loginPage_forms body_regular_16'}>

                        <div className={'loginPage_tabsWrapper'}>
                            <div
                                className={`loginPage_tab ${tab === tabs.login && 'loginPage_activeTab'} `}
                                onClick={() => tabHandler(tabs.login)}>Вход
                            </div>
                            <div className={`loginPage_tab ${tab === tabs.register && 'loginPage_activeTab'}`}
                                 onClick={() => tabHandler(tabs.register)}>Регестрация
                            </div>
                        </div>
                        {tab === tabs.login && <LoginTab/>}
                        {tab === tabs.register && <RegisterTab/>}


                    </div>

                </div>
            </Layout>
        </div>
    )
}
