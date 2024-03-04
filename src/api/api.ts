import axios from 'axios';
import {
    ChangePasswordType,
    ConfirmType,
    createFeedbackType,
    LoginType, RegisterType,
    TrainingType, UploadImageType
} from './apiTypes.ts';


const instance = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(
    (config) => {
        const token =localStorage?.getItem('accessToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const authApi = {
    registrationUser(data: RegisterType) {
        return instance.post('/auth/registration', data)
    },
    loginUser(data: LoginType) {
        return instance.post('/auth/login', {email: data.email, password: data.password})
    },
    checkEmail(email: string) {
        return instance.post('/auth/check-email', {email})
    },
    confirmEmail(data: ConfirmType) {
        return instance.post('/auth/confirm-email', data)
    },
    changePassword(data: ChangePasswordType) {
        return instance.post('/auth/change-password', data)
    },
    loginGoogle() {

        window.location.href = `https://marathon-api.clevertec.ru/auth/google`;


    }
}

export const feedbackApi = {
    getAllFeedbacks() {
        return instance.get('/feedback', {
            headers: {
                Authorization: `Bearer SUPERUSER`,
            },
        })
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
    uploadImage(data: UploadImageType) {
        return instance.post('/upload-image', data)
    }
}

export const catalogsTraining = {
    getCatalogTraining() {
        return instance.get('/catalogs/training-list')
    }

}



