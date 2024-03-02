import {Button, Modal} from 'antd';
import somethingWasWrong from '../assets/svg/somethingWasWrong.svg';
import {useAppDispatch} from '@hooks/typed-react-redux-hooks.ts';
import {push} from 'redux-first-history';
import {path} from '../routers/routers.tsx';
import {setIsModalWrong} from '@redux/reducers/feedback/feedback-reducer.ts';


export const ModalWrong = () => {
    const dispatch = useAppDispatch()
    const onClickHandler = () => {

            dispatch(push(path.main))
        dispatch(setIsModalWrong(false))

    }
    return (
        <Modal
            open={true}
            wrapClassName={'modal_subtitle'}
            footer={false}
            closable={false}

        >
            < div className={'wrong_wrapper'}>
                <img src={somethingWasWrong} alt={'something was wrong'}/>
                <div>
                    <div className={'modal_title'}>Что-то пошло не так</div>
                    <div className={'modal_subtitle'}>Произошла ошибка, <br/> попробуйте еще раз</div>
                </div>
                <Button size={'large'} className={'loginPage_buttonPrimary'}
                        onClick={onClickHandler}>Назад</Button>
            </div>
        </Modal>
    )
}
