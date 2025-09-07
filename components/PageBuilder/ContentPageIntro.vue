<template>
	<div 
		class="building--block content-page-intro inview"
		ref="buildingBlock"
		v-inview:on="handleInView"
	>
		<div class="content">
			<h1 v-html="block.title"></h1>
		</div>

		<GraphicElement v-inview:on="handleInView" class="inview" />

		<DividerLine class="inview" v-if="block.showUnderline" />
	</div>
</template>

<script>
/* 
Content Block for Default Page Builder 
======================================
Displays content on bottom left with image/video on RHS

@param block.title				String		required
@param block.showUnderline		Bool		

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
	},
	methods: {
	},
}
</script>