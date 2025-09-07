<template>
	<div class="page-builder">
		<div fragment="f255fc4753" id="united-by-quality" class="building--row cols-100 h-100 bg-black">
			<div class="building--block">
				<h2 v-if="inview">Active</h2>
				<h2 v-if="!inview">Not Active</h2>
				<GraphicElement :graphic="1" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="2" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="3" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="4" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="5" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="6" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="7" class="inview" :class="{'inview-active': inview}" />
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<GraphicElement :graphic="1" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="2" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="3" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="4" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="5" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="6" class="inview" :class="{'inview-active': inview}" />
				<GraphicElement :graphic="7" class="inview" :class="{'inview-active': inview}" />
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
import Global from "mixins/global.js"
import SEO from "mixins/seo.js"
import pageInit from "mixins/pageInit.js"
import { PAGE } from '~/queries/page.js';

export default {
	mixins: [Global, pageInit, SEO],
	data() {
		return {
			interval: null,
			inview: false
		}
	},
	mounted() {
		setTimeout( () => {
			this.inview = true

			this.interval = setInterval( () => {
				this.inview = false

				setTimeout( () => {
					this.inview = true
				}, 3000)
			}, 8000)
		}, 2000)
		

		
	},
	beforeDestroy() {
		this.interval = null
	}
};
</script>

<style lang="scss" scoped>
	.building--block {
		padding-top: calc(5vh + var(--nav-height));

		h2 {
			grid-column: 1 / -1;
		}
	}

	.bg-black {
		.GraphicElement:not(.inview-active) {
			opacity: 0;
		}
	}
	
</style>