import axios from 'axios';
import {
    ChangePasswordType,
    ConfirmType,
    createFeedbackType,
    LoginType,
    TrainingType, UploadImageType
} from './apiTypes.ts';

const instance = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru',
    withCredentials: true,
})

export const authApi = {
    registrationUser(data: LoginType) {
        return instance.post('/auth/registration', data)
    },
    loginUser(data: LoginType) {
        return instance.post('/auth/login', data)
    },
    checkEmail(email: string) {
        return instance.post('/auth/check-email', {email})
    },
    confirmEmail(data: ConfirmType) {
        return instance.post('/auth/confirm-email', data)
    },
    changePassword(data: ChangePasswordType) {
        return instance.post('/auth/check-email', data)
    }
}

export const feedbackApi = {
    getAllFeedbacks() {
        return instance.get('/feedback')
    },
    createFeedback(data: createFeedbackType) {
        return instance.post('/feedback', data)
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
    uploadImage(data: UploadImageType){
        return instance.post('/upload-image', data)
    }
}

export const catalogsTraining = {
    getCatalogTraining(){
        return instance.get('/catalogs/training-list')
    }

}


