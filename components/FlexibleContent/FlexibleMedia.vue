<template>
	<div
		class="flexible-content--item"
		:class="content.acf_fc_layout"
	>
		<FlexibleMedia :content='content.flexibleMedia' :ratio='content.ratio' />

		<Caption :caption="content.caption" />
	</div>
</template>

<script>
/* 
Full Width Flexible Content Item
================================
Called by /PageBuilder/FlexibleContentSection.vue

@param content.acf_fc_layout		String		layout class
@param content.flexibleMedia		Object		
@param content.ratio				string
@param content.caption				String		

*/

import Global from "mixins/global.js"

export default {
	props: ['content'],
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