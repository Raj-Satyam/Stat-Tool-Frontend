import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CustomersService{
	
	constructor(){}

	getCustomized() {
        console.log("get customized");
		const url = `http://172.30.47.135:8000/createmodel`;
		return axios.get(url).then(response => response.data);
	}
 
	getCustomers() {
        console.log("get customers");
		const url = `${API_URL}/api/customers/`;
		return axios.get(url).then(response => response.data);
	}

	getCustomersByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}

	getCustomer(pk) {
		const url = `${API_URL}/api/customers/${pk}`;
		return axios.get(url).then(response => response.data);
	}

	deleteCustomer(customer){
		const url = `${API_URL}/api/customers/${customer.pk}`;
		return axios.delete(url);
	}

	createCustomer(customer){
		const url = `${API_URL}/api/customers/`;
		return axios.post(url,customer);
	}

	updateCustomer(customer){
		const url = `${API_URL}/api/customers/${customer.pk}`;
		return axios.put(url,customer);
	}
}