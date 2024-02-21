import {Navigate, Route, Routes} from 'react-router-dom';
import {MainPage} from '@pages/main-page/main-page.tsx';
import {LayoutLoginPage} from '@pages/login-page/layoutLoginPage.tsx';
import React from 'react';
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';
import {ResultPage} from '@pages/resultPage/resultPage.tsx';
import {ErrorResult} from '@pages/login-page/result/errorResult.tsx';
import {SuccessResult} from '@pages/login-page/result/successResult.tsx';
import {ErrorLogin} from '@pages/login-page/result/errorLogin.tsx';
import {ErrorUserExist} from '@pages/login-page/result/errorUserExist.tsx';


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
    auth:'/auth',
    singIn:'singIn',
    singUp:'registration',
    result: '/result',
    error: 'error',
    errorLogin: 'error-login',
    errorUserExist:'error-user-exist',
    success: 'success'
}

const routersPath: RouteType[] = [
    {
        path: '/',
        element: <Navigate to={pathName.main}/>
    },
    {
        path: pathName.main,
        element: <MainPage/>,
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
            }
        ]
    }

];

export const publicRouters = <Routes>{renderRoutes(routersPath)}</Routes>;
