<template>
	<div 
		class="building--block flexible-content-section"
		ref="buildingBlock"
	>
		<div class="content col-8 col-md-3 col-lg-4 inview" v-inview:on="handleInView">
			<div class="intro" v-html="block.lhs.intro"></div>

			<CTA v-if="block.lhs.cta.addCta" :cta="block.lhs.cta" />
		</div>

		<div class="flexible-content col-8 col-md-5 col-lg-4">
			<component
				v-for="(row, i) in block.flexibleContent"
				v-inview:on="handleInView"
				class="inview"
				:is="'fc'+row.acf_fc_layout"
				:content="row"
				:key="i"
			></component>
		</div>
	</div>
</template>

<script>
/* 
Flexible Content Section Block for Default Page Builder 
=======================================================
Displays intro content on LHS with flexible content repeater on RHS

@param block.lhs.intro			WYSIWYG		required
@param block.lhs.cta			Object		contents of cta
@param block.flexibleContent	Object		contents of flexible content section

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