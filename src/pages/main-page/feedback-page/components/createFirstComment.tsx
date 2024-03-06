import {Button} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {setIsOpenWriteReviewModal} from '@redux/reducers/feedback/feedback-reducer.ts';


export const CreateFirstComment = () => {
    const dispatch = useAppDispatch()
    const onclickHandler = () => {
        dispatch(setIsOpenWriteReviewModal(true))
    }
    return (
        <div className={'first_commentWrapper'}>
            <div className={'first_comment '}>
                <div className={'modal_title feedback_title'}> Оставьте свой отзыв первым</div>
                <div className={'modal_subtitle feedback_subtitle'}> Вы можете быть первым, кто
                    оставит отзыв об этом фитнесс приложении.
                    Поделитесь своим мнением и опытом с другими пользователями, и помогите
                    им сделать правильный выбор.
                </div>
            </div>
            <Button
                data-test-id='write-review'
                size={'large'}
                className={'loginPage_buttonPrimary'}
                onClick={onclickHandler}
            >Написать отзыв</Button>
        </div>
    )
}
