<template>
	<div
		class="flexible-content--item"
		:class="content.acf_fc_layout"
	>
		<DividerBar />
		
		<div 
			class="content"
			v-html="content.content"
		></div>

		<DividerLine />
	</div>
</template>

<script>
/* 
Full Width Flexible Content Item
================================
Called by /PageBuilder/FlexibleContentSection.vue

@param content.acf_fc_layout		String		layout class
@param content.content				WYSIWYG		required

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

<style lang="scss" scoped>
</style>