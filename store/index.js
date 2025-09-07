export const state = () => ({
	backgroundColour: 'bg-transparent',
	currentLanguage: 'en',
	headerOpacity: 'opacity-1',
	isMobile: null,
	isSafari: null,
	windowHeights: {
		innerHeight: 0,
		outerHeight: 0,
	},
})

export const mutations = {

	fadeHeader(state) {
		state.headerOpacity = 'opacity-0'
	},
	
	showHeader(state) {
		state.headerOpacity = 'opacity-1'
	},

	setBackgroundColour(state, payload) {
		state.backgroundColour = payload.colour
	},
	
	setLanguage(state, currentLanguage) {
		state.currentLanguage = currentLanguage
	},

	setMobile(state) {
		state.isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.userAgent.includes("Mac") && "ontouchend" in document))
	},

	setSafari(state) {
		state.isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
			navigator.userAgent &&
			navigator.userAgent.indexOf('CriOS') == -1 &&
			navigator.userAgent.indexOf('FxiOS') == -1
	},

	setWindowHeights(state, payload) {
		state.windowHeights = {
			innerHeight: payload.innerHeight, 
			outerHeight: payload.outerHeight
		}
	},
}