import {useEffect, useState} from 'react';
import {useAppDispatch} from '@redux/configure-store.ts';
import {
    createFeedback,
    getFeedback, setIsModalError} from '@redux/reducers/feedback/feedback-reducer.ts';
import {useAppSelector} from '@hooks/typed-react-redux-hooks.ts';
import {ModalWrong} from '../../../Modals/Wrong.tsx';
import {CreateFirstComment} from '@pages/main-page/feedback-page/createFirstComment.tsx';
import {getDate} from '@utils/getDate.ts';
import {Button, Modal, Rate} from 'antd';
import user from '../../../assets/svg/user.svg'
import {StarFilled, StarTwoTone} from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import {SuccessModal} from '../../../Modals/successModal.tsx';

export const FeedbackPage = () => {
    const dispatch = useAppDispatch()

    const isError = useAppSelector(state => state.feedback.isError)
    const [collapsedReviews, setCollapsedReviews] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')

    let reviews = useAppSelector(state => state.feedback.reviews)

    const isWrong = useAppSelector(state => state.feedback.isWrong)

    if (collapsedReviews) {
        reviews = reviews.slice(0, 4)
    }


    useEffect(() => {
        dispatch(getFeedback(true))

    }, [dispatch]);
    const handleRating = (rating: number) => {
        setRating(rating)
        sessionStorage.setItem('rating', rating.toString())
    }

    const handleReview = (review: string) => {
        setReview(review)
        sessionStorage.setItem('review', review)
    }

    const writeReview = () => {
        setOpenModal(true)
    }
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
    const publicReview = () => {
        setOpenModal(false)
        dispatch(createFeedback({rating, message: review}))

    }


    console.log(rating)
    return (
        <div className={'feedback_wrapper'}>
            {isWrong
                ? <ModalWrong/>
                : !reviews
                    ? <CreateFirstComment/>
                    : <div className={'feedback_contentWrapper'}>
                        <div className={'feedback_content'}>

                            {reviews.map(r => {
                                const date = getDate(r.createdAt)

                                return (
                                    <div key={r.id} className={'reviewWrapper'}>
                                        <div className={'review_userNameWrapper'}>
                                            <img src={r.imgSrc ? r.imgSrc : user} alt={'avatar'}/>
                                            <div>{r.fullName ? r.fullName : "Пользователь"}</div>
                                        </div>
                                        <div className={'review_messageWrapper'}>
                                            <div className={'review_date'}>
                                                <div><Rate
                                                    disabled
                                                    defaultValue={r.rating}

                                                    character={({index}) => {
                                                        return index! > r.rating
                                                            ? <StarTwoTone key={index}
                                                                           value={r.rating}
                                                                           twoToneColor={'#faad14'}
                                                                           defaultValue={r.rating}/>
                                                            :
                                                            <StarFilled key={index}
                                                                        style={{color: '#faad14'}}/>
                                                    }}


                                                    style={{fontSize: '12px'}}
                                                    value={r.rating}

                                                />
                                                </div>
                                                <div className={'body_regular_12'}>{date}</div>
                                            </div>
                                            <div className={'modal_subtitle'}>{r.message}</div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>

                        <div className={'feedback_footer'}>
                            <Button data-test-id='write-review' size={'large'} className={'loginPage_buttonPrimary'}
                                    onClick={writeReview}>Написать
                                отзыв</Button>
                            <Button data-test-id='all-reviews-button' size={'large'} type={'link'} ghost
                                    onClick={() => setCollapsedReviews(!collapsedReviews)}>
                                {collapsedReviews? 'Развернуть все отзывы' : 'Свернуть все отзывы'}
                            </Button>
                        </div>

                    </div>
            }

            <Modal open={openModal}
                   title={'Ваш отзыв'}
                   onCancel={() => setOpenModal(false)}
                   footer={[
                       <Button
                           data-test-id='new-review-submit-button'
                           key={'button'}
                           size={'large'}
                           disabled={rating === 0}
                           className={'loginPage_buttonPrimary'}
                           onClick={publicReview}
                       >Опубликовать</Button>
                   ]}

            >

                <Rate
                    defaultValue={rating}
                    onChange={(e) => handleRating(e)}
                    character={({value, index}) => {

                        if(value && value>= index!) {
                            return <StarFilled key={index} style={{color: '#faad14'}}/>
                        } else {
                            return <StarTwoTone key={index} value={value}
                                                twoToneColor={'#faad14'}
                                                defaultValue={value}/>
                        }


                    }}/>
                <div className={'modal_public'}>
                    <TextArea value={review}
                              onChange={(e) => handleReview(e.currentTarget.value)}/>
                </div>
            </Modal>

             <Modal open={isError} footer={[
                <div key={'unique1'}>
                    <Button  data-test-id='write-review-not-saved-modal' onClick={writeReviewAgain} >Написать отзыв</Button>
                    <Button onClick={closeErrorModal}>Закрыть</Button>
                </div>
            ]}>Error</Modal>

            <SuccessModal/>


        </div>
    )
}
