import Lottie from 'react-lottie';
import animationData from '../assets/loader.json';


export const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={'loader'} data-test-id='loader'> <Lottie options={defaultOptions} height={200} width={200} /></div>
    )
}
