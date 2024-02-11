import {Col, Divider, Image, Layout, Menu, Row} from 'antd';
import logo from '../../../assets/svg/logo.svg'
import {HeartFilled, TrophyFilled} from '@ant-design/icons';
import calendar from '../../../assets/svg/calendar.svg'
import profile from '../../../assets/svg/profile.svg'
import exit from '../../../assets/svg/exit.svg'
import collapsedImg from '../../../assets/svg/collapsedSidebar.svg'


const {Sider} = Layout;
type SidebarType = {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean)=> void
}


export const Sidebar = (props: SidebarType) => {
    const {collapsed} = props
   if(collapsed){}
    return (
        <Sider width={'208px'} style={{background: "inherit"}}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between'
            }}><Row style={{flexDirection: 'column'}}>
                <Col style={{margin: '30px 0 50px 0', padding: '14px 46px 17px 29px'}}>
                    <Image src={logo}
                           preview={false}
                           alt={'logo'}
                    />
                </Col>
                <Menu

                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            style: {
                                marginBottom: '16px',
                                paddingLeft: '16px'
                            },
                            key: '1',
                            icon: (
                                <img src={calendar}/>
                            ),
                            label: 'Календарь',
                        },
                        {
                            style: {
                                marginBottom: '16px',
                                paddingLeft: '16px'
                            },
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
                            style: {
                                marginBottom: '16px',
                                paddingLeft: '16px'
                            },
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
                            style: {
                                marginBottom: '16px',
                                paddingLeft: '16px'
                            },
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
                    <Col className={'body_regular_14'} style={{width: '100%'}}>
                        <Divider style={{
                            margin: '0'
                        }}/>
                        <div style={{marginLeft:'16px',padding: '12px 0', display: 'flex'}}>
                            <div style={{ display: 'flex'}}><img
                                src={exit}
                                alt={'exit'}
                                style={{}}/>
                                <span style={{padding: '4px 15px', marginLeft: '10px'}}>Выход</span>
                            </div>
                        </div>
                    </Col>
                </Row></div>
            <div className={'button'}  style={{ }}> <img src={collapsedImg} alt={''}/></div>
        </Sider>
    );
};
