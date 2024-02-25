import {Navigate, Route, Routes} from 'react-router-dom';
// import {MainPage} from '@pages/main-page/main-page.tsx';
import {LayoutLoginPage} from '@pages/login-page/layoutLoginPage.tsx';
import React, {lazy, Suspense} from 'react';
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';
import {ResultPage} from '@pages/resultPage/resultPage.tsx';
import {ErrorResult} from '@pages/login-page/resultPages/errorResult.tsx';
import {SuccessResult} from '@pages/login-page/resultPages/successResult.tsx';
import {ErrorLogin} from '@pages/login-page/resultPages/errorLogin.tsx';
import {ErrorUserExist} from '@pages/login-page/resultPages/errorUserExist.tsx';
import {ConfirmEmail} from '@pages/login-page/resultPages/confirmEmail.tsx';
import {ErrorCheckEmailNoExist} from '@pages/login-page/resultPages/error-check-email-no-exist.tsx';
import {ErrorCheckEmail} from '@pages/login-page/resultPages/errorCheckEmail.tsx';
import {ChangePassword} from '@pages/login-page/resultPages/changePassword.tsx';
import {SuccessChangePassword} from '@pages/login-page/resultPages/successChangePassword.tsx';
import {ErrorChangePassword} from '@pages/login-page/resultPages/errorChangePassword.tsx';
import {Loader} from '@utils/loader.tsx';
const MainPage = lazy(() => import('@pages/main-page/main-page.tsx'))

type RouteType = {
    path: string;
    element: React.ReactNode;
    children?: RouteType[];
};

const renderRoutes = (routes: RouteType[]) => {
    return routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
};
export const pathName = {
    main: '/main',
    auth: '/auth',
    singIn: 'singIn',
    singUp: 'registration',
    result: '/result',
    error: 'error',
    errorLogin: 'error-login',
    errorUserExist: 'error-user-exist',
    success: 'success',
    confirmEmail: 'confirm-email',
    errorCheckEmailNoExist: 'error-check-email-no-exist',
    errorCheckEmail: 'error-check-email',
    changePassword: 'change-password',
    successChangePassword: 'success-change-password',
    errorChangePassword: 'error-change-password'

}

const routersPath: RouteType[] = [
    {
        path: '/',
        element: <Navigate to={pathName.main}/>
    },
    {
        path: pathName.main,
        element: <div data-test-id='loader'><Suspense fallback={<div data-test-id='loader'><Loader/></div>}>
            <MainPage/>
        </Suspense></div>,
    },
    {
        path: pathName.auth,
        element: <LayoutLoginPage/>,
        children: [
            {
                path: pathName.singIn,
                element: <LoginTab/>,
            },
            {
                path: pathName.singUp,
                element: <RegisterTab/>,
            },
            {
                path: pathName.confirmEmail,
                element: <ConfirmEmail/>
            },
            {
                path: pathName.changePassword,
                element: <ChangePassword/>
            }

        ],
    },
    {
        path: pathName.result,
        element: <ResultPage/>,
        children: [
            {
                path: pathName.errorLogin,
                element: <ErrorLogin/>
            },
            {
                path: pathName.errorUserExist,
                element: <ErrorUserExist/>
            },
            {
                path: pathName.error,
                element: <ErrorResult/>
            },
            {
                path: pathName.success,
                element: <SuccessResult/>
            },
            {
                path: pathName.errorCheckEmailNoExist,
                element: <ErrorCheckEmailNoExist/>
            },
            {
                path: pathName.errorCheckEmail,
                element: <ErrorCheckEmail/>
            },
            {
                path: pathName.successChangePassword,
                element: <SuccessChangePassword/>
            },
            {
                path: pathName.errorChangePassword,
                element: <ErrorChangePassword/>
            }
        ]
    }

];

export const routers = <Routes>{renderRoutes(routersPath)}</Routes>;
