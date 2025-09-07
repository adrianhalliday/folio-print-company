

<template>
	<div 
		class="building--block case-study-flexible-media"
		ref="caseStudyBuilderBlock"
	>

		<FlexibleMedia :content="block.flexibleMedia" :ratio="block.ratio" />
		
	</div>
</template>

<script>
/* 
Flexible Media Block for Case Study Page Builder
================================================
Displays image/carousel/video

@param block.flexibleMedia		Object		required
@param block.ratio								string		required

*/

import Global from "mixins/global.js"

export default {
	props: ['block'],
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