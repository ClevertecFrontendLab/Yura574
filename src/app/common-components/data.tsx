/* eslint-disable */


export const Data = (props: { data: string }) => {
    const arr = props.data.split('-')
    const year = arr[0]
    let month = arr[1]
    const day = arr[2].slice(0, 2)

    const months = [
    'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
         'октябрь',
         'ноябрь',
         'декабрь',
    ]

    return (
        <div> {day} {months[+month]} {year}</div>

    )
}
