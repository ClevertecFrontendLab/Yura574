import {history, useAppSelector} from '@redux/configure-store.ts';
import {pathName} from './routers/routers.tsx';
import {HistoryRouter} from 'redux-first-history/rr6';
import {Loader} from '@utils/loader.tsx';
import {Navigate, Route, Routes} from 'react-router-dom';
// import MainPage from '@pages/main-page/main-page.tsx';
import {LayoutLoginPage} from '@pages/login-page/layoutLoginPage.tsx';
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';
import {ConfirmEmail} from '@pages/login-page/resultPages/confirmEmail.tsx';
import {ChangePassword} from '@pages/login-page/resultPages/changePassword.tsx';
import {ResultPage} from '@pages/resultPage/resultPage.tsx';
import {ErrorLogin} from '@pages/login-page/resultPages/errorLogin.tsx';
import {ErrorUserExist} from '@pages/login-page/resultPages/errorUserExist.tsx';
import {ErrorResult} from '@pages/login-page/resultPages/errorResult.tsx';
import {SuccessResult} from '@pages/login-page/resultPages/successResult.tsx';
import {ErrorCheckEmail} from '@pages/login-page/resultPages/errorCheckEmail.tsx';
import {SuccessChangePassword} from '@pages/login-page/resultPages/successChangePassword.tsx';
import {ErrorChangePassword} from '@pages/login-page/resultPages/errorChangePassword.tsx';
import {lazy, Suspense} from 'react';
import {ErrorCheckEmailNoExist} from '@pages/login-page/resultPages/error-check-email-no-exist.tsx';

const MainPage = lazy(() => import('@pages/main-page/main-page.tsx'))

export const App = () => {
    const isPending = useAppSelector(state => state.common.isPending)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (

        <HistoryRouter history={history}>
            {isPending && <Loader/>}
            <Routes>
                <Route path={'/'} element={<Navigate to={isAuth ? '/main' : 'auth'}/>}> </Route>

                <Route path={pathName.main} element={
                    <div data-test-id='loader'>
                        <Suspense fallback={<Loader/>}><MainPage/></Suspense>
                    </div>
                }> </Route>

                <Route path={pathName.auth} element={<LayoutLoginPage/>}>
                    <Route path={pathName.singIn} element={<LoginTab/>}></Route>
                    <Route path={pathName.singUp} element={<RegisterTab/>}> </Route>
                    <Route path={pathName.confirmEmail} element={<ConfirmEmail/>}> </Route>
                    <Route path={pathName.changePassword} element={<ChangePassword/>}> </Route>
                </Route>

                <Route path={pathName.result} element={<ResultPage/>}>
                    <Route path={pathName.errorLogin} element={<ErrorLogin/>}></Route>
                    <Route path={pathName.errorUserExist} element={<ErrorUserExist/>}> </Route>
                    <Route path={pathName.error} element={<ErrorResult/>}> </Route>
                    <Route path={pathName.success} element={<SuccessResult/>}> </Route>
                    <Route path={pathName.errorCheckEmail} element={<ErrorCheckEmail/>}> </Route>
                    <Route path={pathName.errorCheckEmailNoExist}
                           element={<ErrorCheckEmailNoExist/>}> </Route>
                    <Route path={pathName.successChangePassword}
                           element={<SuccessChangePassword/>}> </Route>
                    <Route path={pathName.errorChangePassword}
                           element={<ErrorChangePassword/>}> </Route>
                </Route>

            </Routes>
        </HistoryRouter>


    )
}
