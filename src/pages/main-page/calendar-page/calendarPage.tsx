import {Calendar} from "antd";
import moment from "moment";
import ruRU from 'antd/es/calendar/locale/ru_RU';
import {PickerLocale} from 'antd/es/date-picker/generatePicker';


moment.locale('ru', {
    week: {
        dow: 1
    }
})

const locale: PickerLocale = {
    lang: {
        ...ruRU.lang,
        shortWeekDays: [ 'Вск','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',],


    },
    timePickerLocale: {
        ...ruRU.timePickerLocale
    },
};


export const CalendarPage = () => {


    return (
        <div className={'calendar-wrapper'}>
            <Calendar
                className={'calendar'}
                locale={locale}
            />
        </div>
    )
}
