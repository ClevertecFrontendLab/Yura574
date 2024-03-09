import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from '@redux/configure-store';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css'
import './styles/index.scss'
import {App} from './app.tsx';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
    </React.StrictMode>,
);
