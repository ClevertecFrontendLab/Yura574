import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css'
import './styles/index.scss'
// import {MainPage} from '@pages/main-page/main-page.tsx';
import {LoginPage} from '@pages/login-page/login-page.tsx';
import {MainPage} from '@pages/main-page/main-page.tsx';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
