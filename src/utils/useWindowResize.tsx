import {useEffect} from 'react';
import {useAppDispatch} from '@redux/configure-store.ts';
import {setWindowWidth} from '@redux/reducers/common-reducer.ts';


export const useWindowResize = ()=> {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth))
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return useWindowResize
}
