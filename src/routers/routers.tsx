import {Route, Routes} from 'react-router-dom';
import {MainPage} from '@pages/main-page/main-page.tsx';
import {LayoutLoginPage} from '@pages/login-page/layoutLoginPage.tsx';
import React from 'react';
import {LoginTab} from '@pages/login-page/loginTab.tsx';
import {RegisterTab} from '@pages/login-page/registerTab.tsx';


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
        path: 'login',
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
];

export const publicRouters = <Routes>{renderRoutes(routersPath)}</Routes>;
