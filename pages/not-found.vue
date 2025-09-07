<template>
	<div class="page-builder">

		<div class="building--row cols-100 h-100 bg-black" ref="buildingRow">

			<div class="building--block error">

				<div class="content col-8">
					<h1
						class="animated-stats--main inview"
						v-inview:on="animateNumber"
					>
						<span>You’ve got</span>
					
						<vue-odometer 
						:value="animatedNumber"
						:format="'(,ddd)'"
						:theme="'default'"
						:animation="'default'"
						></vue-odometer>
						
						<span>problems.</span>
					</h1>

					<h3>But finding a decent printer ain’t one.</h3>
					
					<router-link 
						to='/'
						class="cta internal"
					>
						<span>Let’s go home</span>
					</router-link>
				</div>

			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
import Global from "mixins/global.js"
import SEO from "mixins/seo.js"
import pageInit from "mixins/pageInit.js"

export default {
	mixins: [Global, pageInit, SEO],
	data() {
		return {
			animatedNumber: 0,
			buildingRows: null,
			headerBaseLine: null,
		}
	},
	head() {
		return {
		  title: 'Page not found | Print Nation',
		}
	},
	methods: {
		animateNumber($v) {
			$v.enter = (el) => {
				this.animatedNumber = 404
				el.classList.add('inview-active')
			}
			/* $v.exit = (el) => {
			} */
		},
		initScrollListener() {
			let self = this

			self.buildingRows = [self.$refs.buildingRow],
			self.headerBaseLine = document.querySelector('header .divider--line')

			window.addEventListener('scroll', () => {
				self.throttleFunction(self.detectRowBelow(self.buildingRows, self.headerBaseLine), 100)
			})
		},
	},
	mounted() {
		this.$store.commit('setBackgroundColour', {
			colour: 'black'
		})

		this.$nextTick(() => {
			// window.addEventListener('scroll', this.initScrollListener(), { once: true} )
			setTimeout( this.initScrollListener(), 100)
		})
	},
	beforeDestroy() {
		let self = this
		window.removeEventListener('scroll', () => {
			this.throttleFunction(this.detectRowBelow(self.buildingRows, self.headerBaseLine), 100)
		})
	},
};
</script>
