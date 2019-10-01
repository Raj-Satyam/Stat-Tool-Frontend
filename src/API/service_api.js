import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class BackendService{

    constructor(){}


    getDiabetes_Feedback() {
        const url = `${API_URL}/api/backend/`;
        return axios.get(url,{auth:{username:'admin',password:'admin'}}).then(response => response.data);
    }  
    getDiabetes_FeedbackByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getDiabetes_FeedbackByID(pk) {
        const url = `${API_URL}/api/backend/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteDiabetes_Feedback(customer){
        const url = `${API_URL}/api/backend/${customer.pk}`;
        return axios.delete(url);
    }
    createDiabetes_Feedback(customer){
        const url = `${API_URL}/api/backend/`;
        return axios.post(url,customer,{auth:{username:'admin',password:'admin'}});
    }
    updateDiabetes_Feedbackr(customer){
        const url = `${API_URL}/api/backend/${customer.pk}`;
        return axios.put(url,customer);
    }
}