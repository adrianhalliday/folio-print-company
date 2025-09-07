<template>
	<div 
		class="building--block content-visual--feature"
		:class="'layout-'+block.layout"
		ref="buildingBlock"
	>
		<GraphicElement :index="1" />
		<GraphicElement :index="2" />
		<GraphicElement :index="3" />

		<div class="content-container inview" v-inview:on="handleInView">
			<div class="content" v-html="block.lhs.content"></div>

			<CTA v-if="block.lhs.cta.addCta" :cta="block.lhs.cta" />
		</div>

		<FlexibleMedia 
			class="inview" 
			:content="block.flexibleMedia.flexibleMedia" 
			v-inview:on="handleInView" 
		/>
	</div>
</template>

<script>
/* 
Content Block for Default Page Builder 
======================================
Displays content on bottom left with image/video on RHS

@param block.lhs.content		WYSIWYG		required
@param block.lhs.cta			Object		contents of cta
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
	},
	methods: {
	},
}
</script>