import {history, useAppSelector} from '@redux/configure-store.ts';
import {publicRouters} from './routers/routers.tsx';
import {HistoryRouter} from 'redux-first-history/rr6';
import {Loader} from '@utils/loader.tsx';


export const App = () => {
    const isPending = useAppSelector(state => state.common.isPending)
    return (
        <div>
            <HistoryRouter history={history}>
                {isPending &&<Loader/>}
                {publicRouters}
            </HistoryRouter>

        </div>
    )
}
