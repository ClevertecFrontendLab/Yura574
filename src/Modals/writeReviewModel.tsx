import {Button, Modal, Rate} from 'antd';
import {StarFilled, StarTwoTone} from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import {useEffect, useState} from 'react';
import {
    createFeedback,
    setIsOpenWriteReviewModal
} from '@redux/reducers/feedback/feedback-reducer.ts';
import {useAppDispatch} from '@redux/configure-store.ts';
import {useAppSelector} from '@hooks/typed-react-redux-hooks.ts';


export const WriteReviewModal = () => {
    const dispatch = useAppDispatch()

    const isOpenWriteReviewModal = useAppSelector(state => state.feedback.isOpenWriteReviewModal)

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    useEffect(() => {
        const rating = sessionStorage.getItem('rating')
        const review = sessionStorage.getItem('review')
        rating && setRating(Number(rating))
        review && setReview(review)
    }, []);

    const handleRating = (rating: number) => {
        setRating(rating)
        sessionStorage.setItem('rating', rating.toString())
    }

    const handleReview = (review: string) => {
        setReview(review)
        sessionStorage.setItem('review', review)
    }
    const publicReview = () => {
        setRating(0)
        setReview('')
        dispatch(setIsOpenWriteReviewModal(false))
        dispatch(createFeedback({rating, message: review}))

    }


    return (
        <Modal open={isOpenWriteReviewModal}
               title={'Ваш отзыв'}
               onCancel={() => dispatch(setIsOpenWriteReviewModal(false))}
               className={'review-model'}
               wrapClassName={'modal_wrapper'}
               footer={[
                   <Button
                       data-test-id='new-review-submit-button'
                       key={'button'}
                       size={'large'}
                       className={'loginPage_buttonPrimary'}
                       onClick={publicReview}
                   >Опубликовать</Button>
               ]}

        >

            <Rate
                // defaultValue={rating}
                value={rating}
                onChange={(e) => handleRating(e)}
                className={'review-rate'}
                character={({value, index}) => {

                    if (value && value > index!) {
                        return <StarFilled key={index} style={{color: '#faad14'}}/>
                    } else {
                        return <StarTwoTone key={index}
                                            twoToneColor={'#faad14'}
                        />
                    }


                }}/>
            <div className={'review_modal-input'}>
                <TextArea value={review}
                          onChange={(e) => handleReview(e.currentTarget.value)}/>
            </div>
        </Modal>
    )
}
