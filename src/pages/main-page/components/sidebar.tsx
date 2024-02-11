import {Col, Divider, Image, Layout, Menu, Row} from 'antd';
import logo from '../../../assets/svg/logo.svg'
import {HeartFilled, TrophyFilled} from '@ant-design/icons';
import calendar from '../../../assets/svg/calendar.svg'
import profile from '../../../assets/svg/profile.svg'
import exit from '../../../assets/svg/exit.svg'
import collapsedImg from '../../../assets/svg/collapsedSidebar.svg'
import logoCollapsed from '../../../assets/svg/logoCollapsed.svg'


const {Sider} = Layout;
type SidebarType = {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean) => void
}


export const Sidebar = (props: SidebarType) => {
    const {collapsed, setCollapsed} = props
    if (collapsed) {
    }
    return (
        <Sider width={collapsed ? '64px' : '208px'} style={{background: "inherit"}}>

            <div className={'sidebar_wrapper'}>
                <Row className={'sidebar_itemsWrapper'}>
                    <Col className={collapsed? 'sidebar_logoCollapsed':'sidebar_logo'}>
                        <Image src={collapsed? logoCollapsed :logo}
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
                                label: `${collapsed ? '' : 'Календарь'}`,
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
                                label:  `${collapsed ? '' : 'Тренировки'}`,
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
                                label: `${collapsed ? '' : 'Достижения'}` ,
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
                                label: `${collapsed ? '' : 'Профиль'}` ,
                            },
                        ]}
                    />
                </Row>
                <Row>
                    <Col className={'body_regular_14'} style={{width: '100%'}}>
                        <Divider style={{
                            margin: '0'
                        }}/>
                        <div style={{marginLeft: '16px', padding: '12px 0', display: 'flex'}}>
                            <div style={{display: 'flex'}}><img
                                src={exit}
                                alt={'exit'}
                                style={{}}/>
                                <span style={{padding: '4px 15px', marginLeft: '10px'}}> {collapsed? '': 'Выход'}</span>
                            </div>
                        </div>
                    </Col>
                </Row></div>
            <div data-test-id='sider-switch' className={'sidebar_button'} onClick={()=> setCollapsed(!collapsed)}><img src={collapsedImg} alt={'button'}/></div>
        </Sider>
    );
};
