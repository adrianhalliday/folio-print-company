<template>
	<div 
		class="building--block section-heading inview"
		ref="buildingBlock"
		v-inview:on="handleInView"
	>

		<div class="content">
			<h2 v-html="block.heading"></h2>
		</div>

		<GraphicElement 
			v-if="!block.hideGraphicElement"
			class="inview"
			v-inview:on="handleInView"
		/>

		<DividerLine />
		
	</div>
</template>

<script>
/* 
Hero Block for Default Page Builder 
===================================
@param block.heading				String		required
@param block.hideGraphicElement		Bool

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