import {SettingOutlined} from '@ant-design/icons';
import {Col, Layout, Row} from 'antd';

const {Header} = Layout;

export const AppHeader = () => {
    return (
        <Header className={'header'}>
            <Row>
                <Col className={'body_regular_14 header_main'}>
                    Главная
                </Col>
            </Row>
            <Row className={'header_position'}>
                <Col style={{}}>
                    <h1>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей
                        мечты!</h1>
                </Col>
                <Col>
                    <div className={'settings'}>
                        <SettingOutlined className={'img'}/>
                        <div className={'body_regular_16'}>Настройки</div>
                    </div>
                </Col>
            </Row>
        </Header>
    );
};
