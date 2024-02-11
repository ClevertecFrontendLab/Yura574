import {SettingOutlined} from '@ant-design/icons';
import {Col, Layout, Row} from 'antd';

const {Header} = Layout;

type HeaderType = {
    windowWidth: number
}
export const AppHeader = (props: HeaderType) => {
    const {windowWidth} = props
    return (
        <Header className={'header_wrapper'}>

            <Row >
                <Col className={'body_regular_14 header_main'}>
                    Главная
                </Col>
            </Row>
            <Row className={'header_position'}>
                <Col>
                    <h1>Приветствуем тебя в CleverFit — приложении,{windowWidth <= 835 ? <br/> : ''} которое
                        поможет тебе добиться
                        своей
                        мечты!</h1>
                </Col>
                <Col>
                    <div className={'settings'}>
                        {windowWidth <= 835 ? '' : <SettingOutlined className={'img'} />}
                        <div className={windowWidth <= 835 ?'body_regular_14':'body_regular_16'}>Настройки</div>
                    </div>
                </Col>
            </Row>
        </Header>
    );
};
