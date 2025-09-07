
<template>
	<div 
		class="building--block case-study-content"
	
		ref="caseStudyBuilderBlock"
	
	>
		<DividerLine class="top" v-if="block.divider == 'top' || block.divider == 'both'" />
		
		<div class="content" v-html="block.content"></div>
		
		<DividerLine class="bottom" v-if="block.divider == 'bottom' || block.divider == 'both'" />
	</div>
</template>

<script>
/* 
Content Block for Default Page Builder 
======================================
Displays content on bottom left with image/video on RHS

@param block.divider				String		'none' || 'top' || 'bottom' || 'both'
@param block.content			WYSIWYG		required	

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