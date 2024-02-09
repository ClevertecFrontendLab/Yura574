import React from 'react';
import './main-page.css';
import {Col, Row} from 'antd';
import {Sidebar} from '@pages/main-page/components/sidebar.tsx';
import {MainContent} from '@pages/main-page/components/mainContent.tsx';
import {AppHeader} from '@pages/main-page/components/header.tsx';
import {Footer} from '@pages/main-page/components/footer.tsx';

// const layoutStyle = {
//     borderRadius: 8,
//     overflow: 'hidden',
//     width: 'calc(50% - 8px)',
//     maxWidth: 'calc(50% - 8px)',
// };
export const MainPage: React.FC = () => {

    return (

        <Row style={{height: "100vh", display: 'flex', flexDirection:'column'}}>
            <Col  className={'sidebar'} style={{background: "white"}}>
                <Sidebar/>
            </Col>
            <Col  style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <Row>
                    <Col>
                        <AppHeader/>
                    </Col>
                </Row>

                <Row className={'main_page_image-light'}
                     style={{display: 'flex', flexDirection: 'column', flex: '1', justifyContent: "space-between"}}>
                    <Col style={{}}><MainContent/></Col>
                    <Col> <Footer/></Col>
                </Row>


            </Col>
        </Row>

    );
};
