/* 
 * Global Methods, Computed Properties and calls
 * =============================================
 * Add new code here that needs to be used in many
 * levels of the application.
 * 
 */

let Global = {
	computed: {
		/* heroHeight() {
			if (this.isMobile === null || !this.isMobile) return '100vh';
			let innerHeight = this.$store.state.windowHeights.innerHeight
			return innerHeight && innerHeight > 0 ? innerHeight + 'px' : '100vh'
		}, */
		isMobile() {
			return this.$store.state.isMobile
		},
		windowHeights() {
			return this.$store.state.windowHeights
		},
	},
	methods: {
		throttleFunction(callback, limit) {
			var waiting = false
			
			return function () { // We return a throttled function
				if (!waiting) {
					callback.apply(this, arguments) // Execute function
					waiting = true

					setTimeout( () =>
						waiting = false // And allow future invocations
					, limit)
				}
			}
		},
		debouncedFunction(callback) {
			if (this.debounceTimeout)
				clearTimeout(this.debounceTimeout)

			this.debounceTimeout = setTimeout(() => {
				callback()
			}, 100)
		},
		detectIntersection(elem1, elem2, offset = 0) {
			let boundingRect1 = elem1.getBoundingClientRect(),
				boundingRect2 = elem2.getBoundingClientRect()

			return 	boundingRect1.top <= boundingRect2.top + boundingRect2.height + offset &&
					boundingRect1.top + boundingRect1.height > boundingRect2.top + offset
		},
		detectRowBelow(buildingRows, headerBaseLine) {
			// console.log(buildingRows, headerBaseLine)
			
			buildingRows.forEach(row => {
				if(this.detectIntersection(row,headerBaseLine,0))
					this.setHeaderBg(row)
			})
		},
		handleInView($v) {
			$v.enter = (el) => {
				el.classList.add('inview-active')
			}
			/* $v.exit = (el) => {
			} */
		},
		setHeaderBg(row) {
			row.className.split(' ').forEach(c => {
				if (/bg-.*/.test(c)) {
					let newBG = c.replace('bg-', '')
					this.$store.commit('setBackgroundColour', {
						colour: newBG
					})
				}
			})
		}
	},
	
}

export default Global;