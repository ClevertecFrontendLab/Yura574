import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import {history, store} from '@redux/configure-store';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css'
import './styles/index.scss'
import {HistoryRouter} from 'redux-first-history/rr6';
import { publicRouters} from './routers/routers.tsx';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                {publicRouters}
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
