import {Button} from 'antd';


export const CreateFirstComment = () => {
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
            <Button size={'large'} className={'loginPage_buttonPrimary'}>Написать отзыв</Button>
        </div>
    )
}
