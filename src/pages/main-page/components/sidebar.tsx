import {Col, Image, Layout, Menu, Row} from 'antd';
import logo from '../../../assets/svg/logo.svg'
import './sidebar.css'
import { HeartFilled,  TrophyFilled} from '@ant-design/icons';
import calendar from '../../../assets/svg/calendar.svg'
import profile from '../../../assets/svg/profile.svg'

const {Sider} = Layout;


export const Sidebar = () => {
    return (
        <Sider className={'siderStyle'}  width={'208px'} theme="dark" style={{background: "inherit"}}>

            <Row style={{flexDirection: 'column'}}>
                <Col style={{margin: '30px 0 50px 0', padding: '14px 46px 17px 29px'}}>
                        <Image src={logo}
                               preview={false}
                               alt={'logo'}
                        />
                </Col>
                {/*<Col style={{marginTop:'16px'}}>*/}
                {/*    <CalendarTwoTone style={{color: 'red'}} twoToneColor={'#061178'}  />*/}
                {/*    Календарь*/}
                {/*</Col>*/}
                {/*<Col style={{marginTop:'16px'}}>Тренировки</Col>*/}
                {/*<Col style={{marginTop:'16px'}}>Достижения</Col>*/}
                {/*<Col style={{marginTop:'16px'}}>Профиль</Col>*/}
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: (
                               <img src={calendar}/>
                            ),
                            label: 'Календарь',
                        },
                        {
                            key: '2',
                            icon: (
                                <HeartFilled
                                    style={{
                                        fontSize: '14px',
                                        color: '#061178',
                                    }}
                                    twoToneColor='#061178'
                                />
                            ),
                            label: 'Тренировки',
                        },
                        {
                            key: '3',
                            icon: (
                                <TrophyFilled
                                    style={{
                                        fontSize: '14px',
                                        color: '#061178',
                                    }}
                                    twoToneColor='#061178'
                                />
                            ),
                            label: 'Достижения',
                        },
                        {
                            key: '4',
                            icon: (
                            <img src={profile}/>
                            ),
                            label: 'Профиль',
                        },
                    ]}
                />
            </Row>
            <Row>
                <Col className={'body_regular_14'}>
                    Выход
                </Col>
            </Row>
        </Sider>
    );
};
