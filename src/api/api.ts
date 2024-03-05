import axios from 'axios';
import {
    ChangePasswordType,
    ConfirmType,
    createFeedbackType,
    LoginType, RegisterType,
    TrainingType, UploadImageType
} from './apiTypes.ts';
import {accessToken} from '../selectors/selectors.ts';
import {store} from '@redux/configure-store.ts';
import {path} from '../routers/routers.tsx';


const baseURL  = 'https://marathon-api.clevertec.ru'
export const googleURL = `${baseURL}${path.google}`

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(
    (config) => {
        const token =localStorage?.getItem('accessToken') || accessToken(store.getState())
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
        return instance.post(`${path.registration}`, data)
    },
    loginUser(data: LoginType) {
        return instance.post('/auth/login', {email: data.email, password: data.password})
    },
    checkEmail(email: string) {
        return instance.post(`${path.checkEmail}`, {email})
    },
    confirmEmail(data: ConfirmType) {
        return instance.post(`${path.confirmEmail}`, data)
    },
    changePassword(data: ChangePasswordType) {
        return instance.post(`${path.changePassword}`, data)
    },
}

export const feedbackApi = {
    getAllFeedbacks() {
        return instance.get('/feedback', )
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



