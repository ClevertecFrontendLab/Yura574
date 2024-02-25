import {history, useAppSelector} from '@redux/configure-store.ts';
import { routers} from './routers/routers.tsx';
import {HistoryRouter} from 'redux-first-history/rr6';
import {Loader} from '@utils/loader.tsx';


export const App = () => {
    const isPending = useAppSelector(state => state.common.isPending)
    return (

            <HistoryRouter history={history}>
                {isPending &&<Loader/>}
                {routers}
            </HistoryRouter>


    )
}
