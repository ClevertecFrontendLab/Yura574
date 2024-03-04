import {useAppDispatch} from '@hooks/typed-react-redux-hooks.ts';
import {
    setIsModalError,
} from '@redux/reducers/feedback/feedback-reducer.ts';
import {Button, Modal, Result} from 'antd';
import {useAppSelector} from '@redux/configure-store.ts';


type ErrorModalType = {
    setRating: (value: number)=> void
    setReview: (value: string)=> void
    setOpenModal: (value: boolean)=> void
}
export const ErrorModal = (props: ErrorModalType) => {
    const{setRating,setReview, setOpenModal}= props
    const dispatch = useAppDispatch()
    const isError = useAppSelector(state => state.feedback.isError)


    const writeReviewAgain = () => {
        dispatch(setIsModalError(false))
        const rating = sessionStorage.getItem('rating')
        const review = sessionStorage.getItem('review')
        rating && setRating(+rating)
        review && setReview(review)
        setOpenModal(true)
    }
    const closeErrorModal = ()=> {
        dispatch(setIsModalError(false))
    }


    return (

        <Modal open={isError} className={'error-model'} footer={false} closable={false}>
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

