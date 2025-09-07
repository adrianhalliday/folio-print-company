<template>
	<div 
		class="building--block case-study-animated-stats"
		ref="caseStudyBuilderBlock"
	>
		<DividerLine class="top" v-if="block.divider == 'top' || block.divider == 'both'" />

		<h3 
			v-if="block.preHeading"
			class="animated-stats--pre-heading" 
			v-html="block.preHeading"
		></h3>

		<h2 
			class="animated-stats--main inview"
			v-inview:on="animateNumber"
		>
			<vue-odometer 
				:value="animatedNumber"
				:format="'(,ddd)'"
				:theme="'default'"
				:animation="'default'"
			></vue-odometer>

			<span 
				class="animated-text" 
				v-if="block.animatedText"
			>{{block.animatedText}}</span>
		</h2>

		<h3 
			v-if="block.subHeading"
			class="animated-stats--sub-heading" 
			v-html="block.subHeading"
		></h3>
		
		<DividerLine class="bottom" v-if="block.divider == 'bottom' || block.divider == 'both'" />
	</div>
</template>

<script>
/* 
Content Block for Default Page Builder 
======================================
Displays content on bottom left with image/video on RHS

@param block.divider				String		'none' || 'top' || 'bottom' || 'both'
@param block.preHeading				String		
@param block.animatedNumber			Int		
@param block.animatedText			String		
@param block.subHeading				String		

*/

import Global from 'mixins/global.js'

export default {
	props: ['block'],
	mixins: [Global],
	data() {
		return {
			animatedNumber: 0
		}
	},
	computed: {
	},
	methods: {
		animateNumber($v) {
			$v.enter = (el) => {
				this.animatedNumber = parseInt(this.block.animatedNumber)
				el.classList.add('inview-active')
			}
			/* $v.exit = (el) => {
			} */
		},
	},
}
</script>