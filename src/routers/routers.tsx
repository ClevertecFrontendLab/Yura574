

export const pathName = {
    app: '/app',
    main: 'main',
    feedback: 'feedback',

    auth: '/auth',
    singIn: 'singIn',
    singUp: 'registration',

    result: '/result',
    error: 'error',
    errorLogin: 'error-login',
    errorUserExist: 'error-user-exist',
    success: 'success',
    confirmEmail: 'confirm-email',
    errorCheckEmailNoExist: 'error-check-email-no-exist',
    errorCheckEmail: 'error-check-email',
    changePassword: 'change-password',
    successChangePassword: 'success-change-password',
    errorChangePassword: 'error-change-password',

}
export const path = {
    main: `${pathName.app}/${pathName.main}`,
    login: `${pathName.auth}/${pathName.singIn}`
}

