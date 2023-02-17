import loader from '../../assets/svg/loader.svg';
import {useAppSelector} from '../../store/store';


export const Loader = () => {
    const isLoading = useAppSelector(state => state.app.isLoading)

    return (
        <div>
            {isLoading &&
                <div className='loader-container' data-test-id='loader'>
                    <img src={loader} className='loader' alt="loader"/>
                </div>}
        </div>

    )
}
