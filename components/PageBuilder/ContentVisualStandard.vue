<template>
	<div 
		class="building--block content-visual--standard"
		ref="buildingBlock"
	>
		<GraphicElement v-inview:on="handleInView" :graphic="2" class="inview" />

		<div class="content-container">
			<div 
				class="content inview" 
				v-inview:on="handleInView" 
				v-html="block.lhs.content"
			></div>

			<CTA v-if="block.lhs.cta.addCta" :cta="block.lhs.cta" />
		</div>

		<FlexibleMedia 
			v-inview:on="handleInView" 
			:content="block.flexibleMedia.flexibleMedia" 
			class="inview" 
		/>
	</div>
</template>

<script>
/* 
Content Block for Default Page Builder 
======================================
Displays content on bottom left with image/video on RHS

@param block.lhs.content						WYSIWYG		required
@param block.lhs.cta							Object		contents of cta
@param block.flexibleMedia.flexibleMedia		Object		contents of image section

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
		}
	},
	methods: {
	},
}
</script>