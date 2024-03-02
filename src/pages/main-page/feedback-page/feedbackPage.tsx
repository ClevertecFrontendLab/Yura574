import {useEffect, useState} from 'react';
import {useAppDispatch} from '@redux/configure-store.ts';
import {getFeedback} from '@redux/reducers/feedback/feedback-reducer.ts';
import {useAppSelector} from '@hooks/typed-react-redux-hooks.ts';
import {ModalWrong} from '../../../Modals/Wrong.tsx';
import {CreateFirstComment} from '@pages/main-page/feedback-page/createFirstComment.tsx';
import user from '../../../assets/svg/user.svg'
import {Rate} from 'antd';
import {getDate} from '@utils/getDate.ts';


export const FeedbackPage = () => {
    const dispatch = useAppDispatch()

    const [collapsedReviews, setCollapsedReviews] = useState(true)

    let reviews = useAppSelector(state => state.feedback.reviews)

    const isWrong = useAppSelector(state => state.feedback.isWrong)
    if (!collapsedReviews) {
        reviews = reviews.slice(0, 4)
    }
    console.log(reviews.slice(0, 4))

    useEffect(() => {
        console.log('feedback 12')
        dispatch(getFeedback(true))

    }, [dispatch]);
    return (
        <div className={'feedback_wrapper'}>
            {isWrong
                ? <ModalWrong/>
                : !reviews
                    ? <CreateFirstComment/>
                    : <div>
                        {reviews.map(r => {
                       const date = getDate(r.createdAt)

                            return (
                                <div key={r.id} className={'reviewWrapper'}>
                                    <div>
                                        <img src={r.imgSrc? r.imgSrc : user} alt={'avatar'}/>
                                        <div>{r.fullName ? r.fullName : "Пользователь"}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div><Rate value={r.rating}/></div>
                                            <div>{date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }

        </div>
    )
}
