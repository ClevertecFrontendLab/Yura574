import {Col, Divider, Image, Layout, Menu, Row} from 'antd';
import logo from '../../../assets/svg/logo.svg'
import {CalendarTwoTone, HeartFilled, IdcardTwoTone, TrophyFilled} from '@ant-design/icons';
import exit from '../../../assets/svg/exit.svg'
import collapsedImg from '../../../assets/svg/collapsedSidebar.svg'
import logoCollapsed from '../../../assets/svg/logoCollapsed.svg'
import {useAppDispatch} from '@redux/configure-store.ts';
import {logout} from '@redux/reducers/auth/auth-reducer.ts';


const {Sider} = Layout;
type SidebarType = {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean) => void
    windowWidth: number
    isNone: boolean
    dataTestId: string
}


export const Sidebar = (props: SidebarType) => {
    const dispatch = useAppDispatch()
    const {collapsed, setCollapsed, isNone, windowWidth, dataTestId} = props

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <Sider width={collapsed ? '64px' : windowWidth <= 360 ? '106px' : '208px'}
               className={`sidebar_sider ${isNone ? 'sidebar_sider_none' : ''} `}>

            <div >
                <div className={'sidebar_wrapper'}>
                    <Row className={'sidebar_itemsWrapper'}>
                        <Col className={collapsed ? 'sidebar_logoCollapsed' : 'sidebar_logo'}>
                            <Image src={collapsed ? logoCollapsed : logo}
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
                                        windowWidth > 360 &&
                                        <CalendarTwoTone twoToneColor={['#061178', '#061178']}/>
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
                                        windowWidth > 360 && <HeartFilled
                                            style={{
                                                fontSize: '14px',
                                                color: '#061178',
                                            }}
                                            twoToneColor='#061178'
                                        />
                                    ),
                                    label: `${collapsed ? '' : 'Тренировки'}`,
                                },
                                {
                                    style: {
                                        marginBottom: '16px',
                                        paddingLeft: '16px'
                                    },
                                    key: '3',
                                    icon: (
                                        windowWidth > 360 && <TrophyFilled
                                            style={{
                                                fontSize: '14px',
                                                color: '#061178',
                                            }}
                                            twoToneColor='#061178'
                                        />
                                    ),
                                    label: `${collapsed ? '' : 'Достижения'}`,
                                },
                                {
                                    style: {
                                        marginBottom: '16px',
                                        paddingLeft: '16px'
                                    },
                                    key: '4',
                                    icon: (
                                        windowWidth > 360 &&
                                        <IdcardTwoTone twoToneColor={['#061178', '#fff',]}/>
                                    ),
                                    label: `${collapsed ? '' : 'Профиль'}`,
                                },
                            ]}
                        />
                    </Row>
                    <Row>
                        <Col className={`body_regular_14 sidebar_exitWrapper
                         ${collapsed && 'sidebar_exitWrapper_collapsed'}
                         `}>
                            <Divider style={{
                                margin: '0'
                            }}/>
                            <div className={`sidebar_exitButton
                             ${collapsed && 'sidebar_exitWrapper_collapsed'}`}
                                 onClick={logoutHandler}>
                                <div style={{display: 'flex'}}>
                                    {windowWidth > 360 && <img
                                        src={exit}
                                        alt={'exit'}
                                    />}
                                    <span
                                        className={'sidebar_exitButtonTitle'}> {collapsed ? '' : 'Выход'}</span>
                                </div>
                            </div>
                        </Col>
                        <div data-test-id={dataTestId}
                             className={`sidebar_button ${windowWidth <= 360 && 'sidebar_button360Uncollapsed'}`}
                             onClick={() => setCollapsed(!collapsed)}><img src={collapsedImg}
                                                                           alt={'button'}/>
                        </div>
                    </Row>

                </div>

            </div>

        </Sider>
    );
};
