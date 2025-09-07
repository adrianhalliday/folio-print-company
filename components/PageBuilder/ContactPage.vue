<template>
	<div 
		class="building--block contact-page"
		ref="buildingBlock"
	>
		<LogoHorizontalAnimated class="logo" />

		<div 
			class="contact--content inview" 
			v-inview:on="handleInView"
		>
			<div class="content" v-html="block.content"></div>
		</div>

		<div class="contact--details">
			<div
				v-for="(item, i) in block.contactDetails"
				:key="i"
				class="contact--details--item inview"
				v-inview:on="handleInView"
			>
				<div class="content">
					<h3 class="pre-heading">{{item.heading}}</h3>
					<p v-html="item.details"></p>
				</div>
			</div>
		</div>

		<GraphicElement v-inview:on="handleInView" class="inview" />
	</div>
</template>

<script>
/* 
Contact Page Block for Default Page Builder
===========================================

@param block.content			WYSIWYG		required
@param block.contactDetails		Object		contents of contact details section

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