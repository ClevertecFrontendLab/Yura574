import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authReducer} from '@redux/reducers/auth-reducer.ts';
import {commonReducer} from '@redux/reducers/common-reducer.ts';
import {createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';



const {routerMiddleware, routerReducer,createReduxHistory} = createReduxHistoryContext({history: createBrowserHistory()})

const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    router: routerReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(routerMiddleware)
});

export const history = createReduxHistory(store)

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch

