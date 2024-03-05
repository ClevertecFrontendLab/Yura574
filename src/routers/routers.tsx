export const pathName = {

    main: '/main',
    feedback: '/feedbacks',

    auth: '/auth',
    singIn: 'login',
    singUp: 'registration',
    google: 'google',

    result: '/result',
    error: 'error',
    errorLogin: 'error-login',
    errorUserExist: 'error-user-exist',
    success: 'success',
    confirmEmail: 'confirm-email',
    checkEmail: 'check-email',
    errorCheckEmailNoExist: 'error-check-email-no-exist',
    errorCheckEmail: 'error-check-email',
    changePassword: 'change-password',
    successChangePassword: 'success-change-password',
    errorChangePassword: 'error-change-password',

}
export const path = {
    main: `${pathName.main}`,

    feedback: `${pathName.feedback}`,

    auth: `${pathName.auth}`,
    registration: `${pathName.auth}/${pathName.singUp}`,
    login: `${pathName.auth}/${pathName.singIn}`,
    google: `${pathName.auth}/${pathName.google}`,
    checkEmail: `${pathName.auth}/${pathName.checkEmail}`,
    confirmEmail: `${pathName.auth}/${pathName.confirmEmail}`,
    changePassword: `${pathName.auth}/${pathName.changePassword}`,

    errorChangePassword: `${pathName.result}/${pathName.errorChangePassword}`,
    error: `${pathName.result}/${pathName.error}`,
}

