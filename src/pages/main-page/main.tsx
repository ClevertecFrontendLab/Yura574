import React, {useEffect, useState} from 'react';
import {Col, Layout, Row} from 'antd';
import {Sidebar} from '@pages/main-page/components/sidebar.tsx';
import {AppHeader} from '@pages/main-page/components/header.tsx';
import collapsedImg from '../../assets/svg/collapsedSidebar.svg';
import {Navigate, Outlet} from 'react-router-dom';
import {useAppSelector} from '@redux/configure-store.ts';
import {pathName} from '../../routers/routers.tsx';


const Main: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dataTestId, setDataTestId] = useState('sider-switch')
    const isPending = useAppSelector(state => state.common.isPending)

    const auth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    const toggle = () => {
        if (windowWidth <= 360 && collapsed) {
            setCollapsed(!collapsed)
        }
    }

    useEffect(() => {
        if (windowWidth < 360 && dataTestId !== 'sider-switch-mobile') {
            setDataTestId('sider-switch-mobile')
        }
        if (windowWidth > 360 && dataTestId !== 'sider-switch') {
            setDataTestId('sider-switch')
        }
    }, [windowWidth, dataTestId]);

    if (!auth) {
        return <Navigate to={pathName.auth}/>
    }

    return (
        <Layout
            className={`mainPages_layoutPageWrapper ${isPending && 'mainPages_layoutPageWrapper_blur'}`}>
            <Sidebar isNone={windowWidth <= 360 && collapsed}
                     collapsed={collapsed}
                     setCollapsed={setCollapsed}
                     windowWidth={windowWidth}
                     dataTestId={dataTestId}
            />
            {windowWidth <= 360
                ? <div data-test-id='sider-switch-mobile'
                       className={`sidebar_button sidebar_button360 ${windowWidth <= 360 && !collapsed && 'hide'}`}
                       onClick={toggle}><img
                    src={collapsedImg} alt={'button'}/>
                </div>
                : ''}
            <Layout>
                <Col className={'mainPages_mainPageWrapper'}>
                    <Row style={{display: 'block'}}>
                        <Col>
                            <AppHeader/>
                        </Col>
                    </Row>

                    <Row className={'main_page_image-light mainPages_mainContentWrapper'}>
                        <Outlet/>
                    </Row>
                </Col>
            </Layout>
        </Layout>
    );
};
export default Main
