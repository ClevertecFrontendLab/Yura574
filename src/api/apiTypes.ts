


export type LoginType = {
    email: string,
    password: string
}

export type ConfirmType ={
    email: string,
    code: string
}
export type ChangePasswordType ={
    password: string,
    confirmPassword: string
}

export type createFeedbackType = {
    rating: number,
    message?: string
}
export type TrainingType = {
    name: string,
    date: string,
    isImplementation: boolean,
    exercises: ExerciseType[]

}
export type ExerciseType = {
    name: string,
    replays: number,
    weight: number,
    approaches: number

}

export type UploadImageType = {
    name: string,
    url: string
}
