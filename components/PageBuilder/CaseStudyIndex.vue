<template>
	<div
		class="building--block case-study-index"
		ref="buildingBlock"
		:notIn="block.notIn"
	>
		<div class="container" v-if="caseStudies">

			<CaseStudyTile
				v-for="(caseStudy, i) in caseStudies.edges"
				:key="i" 
				:caseStudy="caseStudy"
				v-inview:on="handleInView"
				class="inview"
			/>

		</div>
	</div>
</template>

<script>
/* 
Case Study Index for Default Page Builder 
=========================================

@param block.number			Number		Number of case studies to query
@param block.notIn			Number		ID of case study to exclude from query

*/

import Global from "mixins/global.js"
// import { CASE_STUDIES } from '~/queries/caseStudies.js';
import caseStudies from '~/queries/static/caseStudies.js';

export default {
	props: ['block','bg'],
	mixins: [Global],
	data() {
		return {
			caseStudies: caseStudies
		}
	},
	// apollo: {
	// 	caseStudies: {
	// 		query: CASE_STUDIES,
	// 		prefetch: true,
	// 		variables () {
	// 			return {
	// 				resultsToReturn: parseInt(this.block.number),
	// 				notIn: this.block.notIn ? parseInt(this.block.notIn) : null
	// 			}
	// 		},
	// 	},
	// },
	computed: {
	},
	methods: {
	},
}
</script>