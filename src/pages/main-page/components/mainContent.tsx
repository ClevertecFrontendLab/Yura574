import {Col, Divider, Row} from 'antd';
import React from 'react';


export const MainContent: React.FC = () => {
    return (
        <div className={''} >
            <Row>
                <Col className={'body_regular_16'} style={{
                    maxWidth: "752px",
                    background: "white",
                    padding: "24px",
                    color: "#061178",
                    marginLeft: "24px",
                    marginTop: "24px"
                }}>

                    С CleverFit ты сможешь: <br/>
                    — планировать свои тренировки на календаре, выбирая тип
                    и
                    уровень нагрузки;<br/>
                    — отслеживать свои достижения в разделе статистики,
                    сравнивая
                    свои
                    результаты с нормами и рекордами; <br/>
                    — создавать свой профиль, где ты можешь
                    загружать
                    свои фото, видео и отзывы о тренировках;
                    <br/>— выполнять расписанные тренировки
                    для
                    разных частей тела, следуя подробным инструкциям и советам профессиональных
                    тренеров.
                </Col>
            </Row>
            <Row>
                <Col  className={'body_regular_20'} style={{
                    maxWidth: "752px",
                    background: "white",
                    padding: "24px",
                    color: "#262626",
                    marginLeft: "24px",
                    marginTop: "24px"
                }}>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Col>
            </Row>
            <Row  className={'body_regular_16'} style={{
             margin:"16px 0 0 24px"
            }}>
                <Col >
                    <Row className={'body_regular_16'} style={{flexDirection: 'column', background: "white", marginRight: "16px"}}>
                        <Col className={'body_regular_16'} style={{padding: "12px 24px"}}>Расписать тренировки</Col>
                        <Divider style={{
                            margin: '0'
                        }}/>
                        <Col style={{margin: "12px", textAlign: "center"}}>Тренировки</Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{flexDirection: 'column', background: "white", marginRight: "16px"}}>
                        <Col style={{padding: "12px 24px"}}>Назначить календарь</Col>
                        <Divider style={{
                            margin: '0'
                        }}/>
                        <Col style={{margin: "12px", textAlign: "center"}}>Календарь</Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{flexDirection: 'column', background: "white", marginRight: "16px"}}>
                        <Col style={{padding: "12px 24px", }}>Заполнить профиль</Col>
                        <Divider style={{
                            margin: '0'
                        }}/>
                        <Col style={{margin: "12px", textAlign: "center"}}>Профиль</Col>
                    </Row>
                </Col>

            </Row>
        </div>
    )

}
