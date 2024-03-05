import {useAppDispatch} from '@hooks/typed-react-redux-hooks.ts';
import {getFeedback, setIsModalSuccess} from '@redux/reducers/feedback/feedback-reducer.ts';
import {Button, Modal, Result} from 'antd';
import {useAppSelector} from '@redux/configure-store.ts';

export const SuccessModal = () => {
    const dispatch = useAppDispatch()
    const isSuccess = useAppSelector(state => state.feedback.isSuccess)

    const closeSuccessModal = () => {
        dispatch(getFeedback())
        dispatch(setIsModalSuccess(false))
    }


    return (
        <Modal open={isSuccess} wrapClassName={'modal_wrapper'} className={'success-model'} footer={false} closable={false}>
            <Result
                status={'success'}
                title='Отзыв опубуликован успешно'
                className={'success_wrapper'}
                extra={[
                    <Button
                        key={1}
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
