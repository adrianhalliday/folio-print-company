<template>
	<div
		class="flexible-content--item"
		:class="content.acf_fc_layout"
	>
		
		<div class="content-columns">
			<div class="column-1">
				<DividerBar />

				<div
					class="content"
					v-html="content.content_1"
				></div>
			</div>
			
			<div class="column-2">
				<DividerBar />

				<div
					class="content"
					v-html="content.content_2"
				></div>
			</div>
		</div>

		<DividerLine />
	</div>
</template>

<script>
/* 
Full Width Flexible Content Item
================================
Called by /PageBuilder/FlexibleContentSection.vue

@param content.acf_fc_layout		String		layout class
@param content.content_1			WYSIWYG		required
@param content.content_2			WYSIWYG		required

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