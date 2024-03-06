import {Col, Row} from 'antd';
import {MainContent} from '@pages/main-page/components/mainContent.tsx';
import {Footer} from '@pages/main-page/components/footer.tsx';


export const MainPage = () => {

    return (
        <Row >
            <Col><MainContent /></Col>
            <Col className={'mainPages_footerWrapper'}><Footer/></Col>

        </Row>
    )
}
