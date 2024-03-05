import {useEffect, useState} from 'react';
import {useAppDispatch} from '@redux/configure-store.ts';
import {getFeedback, setIsOpenWriteReviewModal} from '@redux/reducers/feedback/feedback-reducer.ts';
import {useAppSelector} from '@hooks/typed-react-redux-hooks.ts';
import {ModalWrong} from '../../../Modals/Wrong.tsx';
import {CreateFirstComment} from '@pages/main-page/feedback-page/components/createFirstComment.tsx';
import {Button} from 'antd';
import {SuccessModal} from '../../../Modals/successModal.tsx';
import {ErrorModal} from '../../../Modals/errorModal.tsx';
import {WriteReviewModal} from '../../../Modals/writeReviewModel.tsx';
import {Reviews} from '@pages/main-page/feedback-page/components/reviews.tsx';

export const FeedbackPage = () => {
    const dispatch = useAppDispatch()

    const [collapsedReviews, setCollapsedReviews] = useState(true)


    let reviews = useAppSelector(state => state.feedback.reviews)

    const isWrong = useAppSelector(state => state.feedback.isWrong)

    if (collapsedReviews) {
        reviews = reviews.slice(0, 4)
    }


    useEffect(() => {
        dispatch(getFeedback())

    }, [dispatch]);


    const writeReview = () => {
        dispatch(setIsOpenWriteReviewModal(true))
    }

    if (isWrong) return <ModalWrong/>

    return (
        <div className={'feedback_wrapper'}>

            {!reviews
                ? <div className={' feedback_firstComment-wrapper'}><CreateFirstComment/></div>

                : <div className={'feedback_contentWrapper'}>
                    <div className={'feedback_content'}>
                        <Reviews collapsedReviews={collapsedReviews}/>
                    </div>

                    <div className={'feedback_footer'}>
                        <Button data-test-id='write-review' size={'large'}
                                className={'loginPage_buttonPrimary'}
                                onClick={writeReview}>Написать
                            отзыв</Button>
                        <Button data-test-id='all-reviews-button' size={'large'}
                                className={'loginPage_buttonGhost'}
                                onClick={() => setCollapsedReviews(!collapsedReviews)}>
                            {collapsedReviews ? 'Развернуть все отзывы' : 'Свернуть все отзывы'}
                        </Button>
                    </div>

                </div>
            }

            <WriteReviewModal/>

            <ErrorModal/>

            <SuccessModal/>


        </div>
    )
}
