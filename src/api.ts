import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru/swagger/json',
    withCredentials: true,
    headers: {
        "API-KEY": '95828b39-ca1b-43bb-b89e-db3b0c2ce183'
    }
})

export const authApi = {
    registrationUser(email: string, password: string) {
        return instance.post('/auth/registration', {email, password})
    },
    loginUser(email: string, password: string) {
        return instance.post('/auth/login', {email, password})
    },
    checkEmail(email: string) {
        return instance.post('/auth/check-email', {email})
    },
    confirmEmail(email: string, code: string) {
        return instance.post('/auth/confirm-email', {email, code})
    },
    changePassword(password: string, confirmPassword: string) {
        return instance.post('/auth/check-email', {password, confirmPassword})
    }
}

export const feedbackApi = {
    getAllFeedbacks() {
        return instance.get('/feedback')
    },
    createFeedback(rating: number, message?: string) {
        return instance.post('/feedback', {rating, message})
    }
}

export const trainingApi = {
    getAllTrainings() {
        return instance.get('/training')
    },
    createTraining(trainingData: TrainingType) {
        return instance.post('/training', {...trainingData})
    },
    changeTraining(id: string, trainingData: TrainingType) {
        return instance.put(`/training/${id}`, {...trainingData})
    }
}

export const uploadImage = {
    uploadImage(name: string, url: string){
        return instance.post('/upload-image', {name, url})
    }
}

export const catalogsTraining = {
    getCatalogTraining(){
        return instance.get('/catalogs/training-list')
    }

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
