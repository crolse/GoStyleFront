import * as axios from 'axios';

describe('testConnexionAPI', function() {
	it('should work', ()=> {
		return axios.get('http://localhost:8080').then(result => {
		expect(result.status).toEqual(200)
		})	})
} )