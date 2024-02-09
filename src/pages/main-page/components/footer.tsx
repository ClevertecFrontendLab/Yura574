import {Col, Row} from 'antd';


export const Footer = () => {
    return (
        <Row>
            <Col>Смотреть отзывы</Col>
            <Col>
                <Row style={{flexDirection:'column'}}>
                    <Col>Скачать на телефон</Col>
                    <Col>Доступно в Pro-тарифе</Col>
                </Row>
                <Row>
                    <Col>Android OS</Col>
                    <Col>Apple iOS</Col>
                </Row>
            </Col>
        </Row>
    )
}
