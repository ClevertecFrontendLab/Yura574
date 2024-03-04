import {useAppDispatch} from '@hooks/typed-react-redux-hooks.ts';
import {getFeedback, setIsModalSuccess} from '@redux/reducers/feedback/feedback-reducer.ts';
import {Button, Modal, Result} from 'antd';
import {useAppSelector} from '@redux/configure-store.ts';
import {useEffect, useState} from 'react';

export const SuccessModal = () => {
    const dispatch = useAppDispatch()
    const isSuccess = useAppSelector(state => state.feedback.isSuccess)

    const closeSuccessModal = () => {
        dispatch(getFeedback(true))
        dispatch(setIsModalSuccess(false))
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        // <Modal
        //     open={isSuccess}
        //     wrapClassName={'modal_subtitle'}
        //     footer={false}
        //     closable={false}
        //
        // >
        //     <Result
        //         status={'success'}
        //         title="Отзыв успешно опубликован"
        //         className={'result_errorChangePassword__wrapper'}
        //         extra={[
        //             <Button
        //                 type="primary"
        //                 size={'large'}
        //                 className={'loginPage_buttonPrimary loginPage_button100'}
        //                 onClick={closeSuccessModal}
        //                 data-test-id='change-retry-button'>
        //                Отлично
        //             </Button>,
        //         ]}
        //     />
        // </Modal>
        <Modal open={isSuccess} footer={false} onCancel={null}>
            <Result
                status={'success'}
                title='Отзыв опубуликован успешно'
                extra={[
                    <Button
                        size={'large'}
                        type="primary"
                        className={'loginPage_buttonPrimary'}
                        onClick={closeSuccessModal}
                        data-test-id='registration-enter-button'>
                        Отлично
                    </Button>,
                ]}
            />
        </Modal>

    )
}
