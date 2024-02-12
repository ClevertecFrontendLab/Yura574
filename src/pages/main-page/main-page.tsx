import React, {useEffect, useState} from 'react';
import './main-page.css';
import {Col, Layout, Row} from 'antd';
import {Sidebar} from '@pages/main-page/components/sidebar.tsx';
import {MainContent} from '@pages/main-page/components/mainContent.tsx';
import {AppHeader} from '@pages/main-page/components/header.tsx';
import {Footer} from '@pages/main-page/components/footer.tsx';
import collapsedImg from '../../assets/svg/collapsedSidebar.svg';


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dataTestId, setDataTestId] = useState('sider-switch')

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
    return (
        <Layout className={'mainPages_layoutPageWrapper'}>
            <Sidebar isNone={windowWidth <= 360 && collapsed}
                     collapsed={collapsed}
                     setCollapsed={setCollapsed}
                     windowWidth={windowWidth}
                     dataTestId={dataTestId}
            />
            {windowWidth <= 360 ?
                <div data-test-id='sider-switch-mobile'
                     className={`sidebar_button sidebar_button360 ${windowWidth <= 360 && !collapsed && 'hide'}`}
                     onClick={toggle}><img
                    src={collapsedImg} alt={'button'}/>
                </div>


                : ''}
            <Layout>
                <Col className={'mainPages_mainPageWrapper'}>
                    <Row style={{display: 'block'}}>
                        <Col>
                            <AppHeader windowWidth={windowWidth}/>
                        </Col>
                    </Row>

                    <Row className={'main_page_image-light mainPages_mainContentWrapper'}>
                        <Col><MainContent windowWidth={windowWidth}/></Col>
                        <Col className={'mainPages_footerWrapper'}><Footer/></Col>
                    </Row>


                </Col>
            </Layout>
        </Layout>


    );
};
