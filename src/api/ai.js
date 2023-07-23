import axios from 'axios'

const service = axios.create({
	baseURL: import.meta.env.APP_BASE_API_URL,
	timeout: 60000,
	headers: {
		'X-Custom-Header': 'foobar'
	}
});

export const completion = (params) => {
	return service.request({
		url: 'completion',
		method: 'post',
		data: params
	})
};

export const chatcompletion = (params) => {
	return service.request({
		url: 'chat/completions',
		method: 'post',
		data: params
	})
};

export const history = () => {
	return service.request({
		url: 'history',
		method: 'get'
	})
};

export const historyById = (id) => {
	return service.request({
		url: 'historyById?id=' + id,
		method: 'get'
	})
};

export const createImage = (params) => {
	return service.request({
		url: 'createImage',
		method: 'post',
		data: params
	})
};
