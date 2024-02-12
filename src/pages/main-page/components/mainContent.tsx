import {Col,  Row} from 'antd';
import like from '../../../assets/svg/like.svg'
import calendar from '../../../assets/svg/calendar1.svg'
import profile from '../../../assets/svg/profile1.svg'
import {Card} from '@pages/main-page/components/Card.tsx';

type MainContentType = {
    windowWidth: number
}
export const MainContent = (props: MainContentType) => {
    const {windowWidth} = props
    return (
        <div className={'mainContent'}>
            <Row>
                <Col className={'body_regular_16 mainContent_wrapper'}>
                    С CleverFit ты сможешь: <br/>
                    — планировать свои тренировки на календаре, выбирая тип
                    и уровень нагрузки;<br/>
                    — отслеживать свои достижения в разделе статистики,
                    сравнивая свои результаты {windowWidth <= 835? '': <br/>}с нормами и рекордами; <br/>
                    — создавать свой профиль, где ты можешь
                    загружать
                    свои фото, видео и отзывы {windowWidth <= 835? '': <br/>} о тренировках;
                    <br/>— выполнять расписанные тренировки
                    для
                    разных частей тела, следуя подробным инструкциям и советам профессиональных
                    тренеров.
                </Col>
            </Row>
            <Row>
                <Col className={'mainContent_wrapper'}><h4>CleverFit — это не просто приложение, а
                    твой личный помощник
                    <br/>в мире фитнеса.
                    Не откладывай на завтра — начни тренироваться уже сегодня!</h4>
                </Col>
            </Row>
            <div className={'body_regular_16 mainContent_cardsActionsWrapper'}>
                <Card
                    img={like}
                    title={'Расписать тренировки'}
                    titleButton={'Тренировки'}
                    altImg={'training'}
                />
                <Card
                    img={calendar}
                    title={'Назначить календарь'}
                    titleButton={'Календарь'}
                    altImg={'calendar'}
                />
                <Card
                    img={profile}
                    title={'Заполнить профиль'}
                    titleButton={'Профиль'}
                    altImg={'profile'}
                />
            </div>

        </div>
    )

}
