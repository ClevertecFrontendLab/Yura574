import logo from '../../assets/svg/logo.svg'
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {pathName} from '../../routers/routers.tsx';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {useEffect} from 'react';
import {push} from 'redux-first-history';


export const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const router = useAppSelector(state => state.router.location)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    useEffect(() => {
        if(isAuth){
            dispatch(push(pathName.main))
        }
    }, [dispatch, isAuth]);
    useEffect(() => {
        if (router?.pathname === pathName.auth) {
            dispatch(push(`${pathName.auth}/${pathName.singIn}`));
        }
    }, [navigate, router]);

    return (

        <div className={'loginPage_loginFieldWrapper'}>
            <img src={logo} className={'loginPage_logo'} alt={'logo'}/>

            <div className={'loginPage_forms body_regular_16'}>

                <div className={'loginPage_tabsWrapper'}>
                    <NavLink to={pathName.singIn}
                             className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'}>
                        Вход

                    </NavLink>
                    <NavLink to={pathName.singUp}
                             className={({isActive}) => isActive ? 'loginPage_tab loginPage_activeTab' : 'loginPage_tab'
                             }>

                        Регистрация
                    </NavLink>
                </div>
                {/*{!isPending &&<Loader/>}*/}
                <Outlet/>
            </div>
        </div>
    )
}
