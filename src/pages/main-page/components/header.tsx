import {SettingOutlined} from '@ant-design/icons';
import {Breadcrumb, Col, Layout, Row} from 'antd';
import setting from '../../../assets/svg/setting.svg'
import {useSelector} from 'react-redux';
import {getWindowWidth} from '../../../selectors/selectors.ts';
import {NavLink, useLocation} from 'react-router-dom';
import {path, pathName} from '../../../routers/routers.tsx';

const {Header} = Layout;


export const AppHeader = () => {
    const windowWidth = useSelector(getWindowWidth)
    const location = useLocation()
    const navigation: Record<string, string> = {
        feedbacks: 'Отзывы пользователей'
    }

    const pathArr = location.pathname.split('/')

    const currentPath = pathArr.map((path, index) => {
        if (path in navigation) {
            return {pathName: navigation[path], link: path, index}
        }
    }).filter(Boolean)

    return (
        <Header className={'header_wrapper'}>
            <Row>
                <Col className={'body_regular_14 header_main'}>
                    <Breadcrumb>
                        <Breadcrumb.Item> <NavLink
                            to={path.main}>Главная</NavLink></Breadcrumb.Item>
                        {currentPath.map(path => {
                            if (path) {
                                return (
                                    <Breadcrumb.Item
                                        key={path.index}> {path.pathName}</Breadcrumb.Item>
                                )
                            }
                        })}
                    </Breadcrumb>
                </Col>
            </Row>
            {location.pathname === `${pathName.main}` &&
                <Row className={'header_position'}>
                    <Col>
                        <h1>Приветствуем тебя в CleverFit — приложении,{windowWidth <= 835 ?
                            <br/> : ''} которое
                            поможет тебе добиться
                            своей
                            мечты!</h1>
                    </Col>
                    <Col>
                        <div className={'settings'}>
                            {windowWidth <= 835 ? '' : <SettingOutlined className={'img'}/>}
                            <div
                                className={windowWidth <= 835 ? 'body_regular_14' : 'body_regular_16'}>
                                {windowWidth <= 360 ?
                                    <div className={'settingsIcon'}><img src={setting} alt=""/>
                                    </div> : 'Настройки'}
                            </div>
                        </div>
                    </Col>
                </Row>
            }
        </Header>
    );
};
