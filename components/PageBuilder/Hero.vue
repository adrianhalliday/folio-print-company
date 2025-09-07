<template>
	<div 
		class="building--block hero hasBgImage"
		ref="buildingBlock"
		:style="styleArray"
	>

		<div class="hero--overlay">
			<div class="hero--overlay--bg"></div>
			<LogoHorizontalAnimated />
		</div>

		<video 
			v-if="block.hasVideo"
			class="hero--video hasBgImage"
			autoplay loop muted playsinline 
			:style="styleArray"
		>
			<source :src="block.mp4" type="video/mp4">
			<source :src="block.webm" type="video/webm">
		</video>
		
	</div>
</template>

<script>
/* 
Hero Block for Default Page Builder 
===================================
@param block.image		Object		required
@param block.hasVideo	bool
@param block.mp4		url			required
@param block.webm		url			required

*/

import Global from "mixins/global.js"

export default {
	props: ['block','bg'],
	mixins: [Global],
	data() {
		return {
		}
	},
	computed: {
		styleArray() {
			return `background-image: url(${this.block.image});`
		},
		isMobile() {
			return this.$store.state.isMobile
		},
	},
	methods: {
	},
}
</script>