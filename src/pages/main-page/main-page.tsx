import React, {useState} from 'react';
import './main-page.css';
import {Col, Layout, Row} from 'antd';
import {Sidebar} from '@pages/main-page/components/sidebar.tsx';
import {MainContent} from '@pages/main-page/components/mainContent.tsx';
import {AppHeader} from '@pages/main-page/components/header.tsx';
import {Footer} from '@pages/main-page/components/footer.tsx';


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <Layout className={'mainPages_layoutPageWrapper'}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Layout >
                <Col className={'mainPages_mainPageWrapper'}>
                    <Row>
                        <Col>
                            <AppHeader/>
                        </Col>
                    </Row>

                    <Row className={'main_page_image-light mainPages_mainContentWrapper'}>
                        <Col><MainContent/></Col>
                        <Col><Footer/></Col>
                    </Row>


                </Col>
            </Layout>
        </Layout>


    );
};
