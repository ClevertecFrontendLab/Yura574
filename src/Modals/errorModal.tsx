import {useAppDispatch} from '@hooks/typed-react-redux-hooks.ts';
import {
    setIsModalError, setIsOpenWriteReviewModal,
} from '@redux/reducers/feedback/feedback-reducer.ts';
import {Button, Modal, Result} from 'antd';
import {useAppSelector} from '@redux/configure-store.ts';

export const ErrorModal = () => {
    const dispatch = useAppDispatch()
    const isError = useAppSelector(state => state.feedback.isError)

    const writeReviewAgain = () => {
        dispatch(setIsModalError(false))
        dispatch(setIsOpenWriteReviewModal(true))
    }
    const closeErrorModal = () => dispatch(setIsModalError(false))

    return (
        <Modal open={isError} wrapClassName={'modal_wrapper'} className={'error-model'}
               footer={false} closable={false}>
            <Result
                status={'error'}
                title='Данные не сохранились'
                subTitle={'Что-то пошло не так. Попробуйте еще раз'}
                className={'error_wrapper'}
                extra={[
                    <Button
                        key={1}
                        data-test-id='write-review-not-saved-modal'
                        size={'large'}
                        type="primary"
                        className={'loginPage_buttonPrimary'}
                        onClick={writeReviewAgain}
                    >
                        Написать отзыв
                    </Button>,
                    <Button
                        key={2}
                        size={'large'}
                        type="ghost"
                        onClick={closeErrorModal}
                    >
                        Закрыть
                    </Button>,
                ]}
            />
        </Modal>

    )
}

