import {getDate} from '@utils/getDate.ts';
import user from '../../../../assets/svg/user.svg';
import {Rate} from 'antd';
import {StarFilled, StarTwoTone} from '@ant-design/icons';
import {useAppSelector} from '@redux/configure-store.ts';
import {ReviewType} from '@redux/reducers/feedback/feedback-reducer.ts';

type ReviewsType = {
    collapsedReviews: boolean
}
export const Reviews = (props: ReviewsType) => {
    const {collapsedReviews} = props
    let reviews = useAppSelector(state => state.feedback.reviews)
    if (collapsedReviews) {
        reviews = reviews.slice(0, 4)
    }

    return (
        <>
            {reviews.map((reviewItem: ReviewType) => {
                const date = getDate(reviewItem.createdAt)

                return (
                    <div key={reviewItem.id} className={'reviewWrapper'}>
                        <div className={'review_userNameWrapper'}>
                            <img src={reviewItem.imgSrc ? reviewItem.imgSrc : user} alt={'avatar'}/>
                            <div className={'review_userName'}>{reviewItem.fullName ? reviewItem.fullName : "Пользователь"}</div>
                        </div>
                        <div className={'review_messageWrapper'}>
                            <div className={'review_date'}>
                                <div><Rate
                                    disabled
                                    defaultValue={reviewItem.rating}

                                    character={({index}) => {
                                        return index! < reviewItem.rating
                                            ? <StarFilled key={reviewItem.id}
                                                          />
                                            : <StarTwoTone key={reviewItem.id}
                                                           value={reviewItem.rating}
                                                           twoToneColor='#faad14'
                                                           defaultValue={reviewItem.rating}/>
                                    }}


                                    style={{fontSize: '16px'}}
                                    value={reviewItem.rating}

                                />
                                </div>
                                <div className={'body_regular_12'}>{date}</div>
                            </div>
                            <div className={'modal_subtitle'}>{reviewItem.message}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
