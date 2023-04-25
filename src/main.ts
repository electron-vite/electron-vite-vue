import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
	.mount('#app')
	.$nextTick(() => {
		postMessage({ payload: 'removeLoading' }, '*');
	});
