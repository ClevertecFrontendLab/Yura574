/* eslint-disable */

export const handlePassword = (password: string) => {
    const error = []

    const isCapitalLetter = password === password.toLowerCase()
    if (isCapitalLetter) error.push('no capital letter')

    const figure = password.match(/[0-9]/)
    if (!figure) error.push('no figure')

    const length = password.length < 8
    if (length) error.push('min length < 8')

    if (error.length > 0) return error.join(', ')
}

export const handleLogin = (login: string) => {
    const error = []

    const latinLetter = login.match(/[а-яА-ЯёЁ]/)
    if (latinLetter) error.push('only latin')

    const figure = login.match(/[0-9]/)
    if (!figure) error.push('no figure')


    if (error.length > 0) return error.join(', ')

}

