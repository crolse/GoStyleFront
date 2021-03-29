import Camera from '@/components/QRCode/Camera.vue'
import { mount } from '@vue/test-utils'
import {onDecode} from '@/components/QRCode/Camera.vue'
import { shallowMount } from '@vue/test-utils'
import * as axios from 'axios';

const wrapper = shallowMount(Camera)


describe('testScanQRCode', function() {
	it('should work', ()=> {
		const mockDecodeQR = jest.fn (() => Promise.resolve(coucou));
		
		axios.post("http://localhost:8080/api/promotion/add", {

		return wrapper.vm.onDecode(mockDecodeQR).then(result => {
		expect(result.status).toEqual(200)
		})	})
} )