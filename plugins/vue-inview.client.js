import Vue from 'vue'
import Inview from 'vueinview'

Vue.use(Inview)

if(process.browser)
	if (window.innerHeight > window.innerWidth) {
		Inview.offset(window.innerHeight * .065)
	} else {
		Inview.offset(window.innerHeight * .13)
	}
