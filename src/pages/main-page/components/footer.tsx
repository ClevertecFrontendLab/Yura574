import {Col, Divider, Row} from 'antd';
import apple from '../../../assets/svg/apple.svg'
import android from '../../../assets/svg/android.svg'


export const Footer = () => {
    return (
        <Row className={'footerWrapper'}>
            <Col className={'reviews'}>Смотреть отзывы</Col>
            <Col className={'forAppWrapper'}>
                <Row style={{flexDirection:'column', padding:'12px 24px'}}>
                    <Col className={'body_regular_16'} style={{paddingBottom:'8px'}}>Скачать на телефон</Col>
                    <Col className={'body_regular_16'}>Доступно в Pro-тарифе</Col>
                </Row>
                <Divider style={{margin:"0"}}/>
                <Row className={'os'}>
                    <Col className={'osButtonWrapper '}><img src={apple} alt="apple"/><span className={'body_regular_14'} style={{paddingLeft: '8px'}}>Android OS</span></Col>
                    <Col className={'osButtonWrapper '}><img src={android} alt="android"/><span className={'body_regular_14'} style={{paddingLeft: '8px'}}>Apple iOS</span></Col>
                </Row>
            </Col>
        </Row>
    )
}
