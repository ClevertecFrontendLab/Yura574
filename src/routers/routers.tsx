import {Route, Routes} from 'react-router-dom';
import {MainPage} from '@pages/main-page/main-page.tsx';
import {LayoutLoginPage} from '@pages/login-page/layoutLoginPage.tsx';
import React from 'react';
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';
import {ResultPage} from '@pages/resultPage/resultPage.tsx';
import {ErrorResult} from '@pages/login-page/result/errorResult.tsx';
import {SuccessResult} from '@pages/login-page/result/successResult.tsx';


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

const routersPath: RouteType[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LayoutLoginPage />,
        children: [
            {
                path: 'singIn',
                element: <LoginTab />,
            },
            {
                path: 'singUp',
                element: <RegisterTab />,
            },

        ],
    },
    {
        path:'/result',
        element: <ResultPage/>,
        children:[
            {
                path: 'error',
                element: <ErrorResult/>
        },
            {
                path: 'success',
                element: <SuccessResult/>
            }
        ]
    }

];

export const publicRouters = <Routes>{renderRoutes(routersPath)}</Routes>;
