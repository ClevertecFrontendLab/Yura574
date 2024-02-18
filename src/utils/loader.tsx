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
        <div style={{position:'absolute', zIndex: '3'}}> <Lottie options={defaultOptions} height={200} width={200} /></div>
    )
}
