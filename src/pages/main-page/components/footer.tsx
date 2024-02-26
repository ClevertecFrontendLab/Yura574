import {Col, Divider, Row} from 'antd';
import apple from '../../../assets/svg/apple.svg'
import android from '../../../assets/svg/android.svg'


export const Footer = () => {
    return (
        <Row className={'footerWrapper'}>
            <Col className={'reviews body_regular_16'}>Смотреть отзывы</Col>
            <Col className={'forAppWrapper'}>
                <Row className={'footer_downloadDescriptionWrapper'}>
                    <Col className={'body_regular_16 footer_downloadForPhone'} >Скачать на телефон</Col>
                    <Col className={'body_regular_16 footer_forPro'} >Доступно в Pro-тарифе</Col>
                </Row>
                <Divider style={{margin:"0"}}/>
                <Row className={'os'}>
                    <Col className={'osButtonWrapper '}><img src={apple} alt="apple"/><span className={'body_regular_14'}>Android OS</span></Col>
                    <Col className={'osButtonWrapper '}><img src={android} alt="android"/><span className={'body_regular_14'} >Apple iOS</span></Col>
                </Row>
            </Col>
        </Row>
    )
}
