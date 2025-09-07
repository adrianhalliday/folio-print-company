/* 
 * Global Methods, Computed Properties and calls
 * =============================================
 * Add new code here that needs to be used in many
 * levels of the application.
 * 
 */

let builderModuleInit = {
	/* methods: {
		setHeaderBG() {
			let row = this.$refs.buildingBlock.getBoundingClientRect()
			console.log(row)

			if(row.top < 91 && row.top > 0)
				this.$store.commit('setBackgroundColour', {
					colour: this.block.acf_fc_layout == 'PageBuilderHero' ? 'transparent' : this.bg
				})
		},
	},
	mounted() {
		let self = this

		this.$nextTick(() => {
			self.setHeaderBG()

			window.addEventListener('scroll', () => {
				self.throttleFunction(self.setHeaderBG(), 50)
			})
		})
	},
	beforeDestroy() {
		window.removeEventListener('scroll', () => {
			self.throttleFunction(self.setHeaderBG(), 50)
		})
	}, */
}

export default builderModuleInit;