import Api from './Api';

export default {
	register(credentials) {
		return Api().post('register', credentials)
	}
}

// AuthService.register({
// 	email: 'testing@gmail.com',
// 	password: '123456'
// })