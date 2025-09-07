<template>
	<div class="page-builder">
		<LoadingScreen v-if="!builderRows" />

		<PageBuilder v-if="builderRows" :rows="builderRows" />

		<Footer v-if="builderRows" />
	</div>
</template>

<script>
import Global from "mixins/global.js"
import SEO from "mixins/seo.js"
import pageInit from "mixins/pageInit.js"
// import { HOMEPAGE } from '~/queries/index.js';
import page from '~/queries/static/index.js';

export default {
	mixins: [Global, pageInit, SEO],
	data() {
		return {
			builderRows: page.builderRows,
			pageData: page.pageData
		}
	},
	// apollo: {
	// 	nodeByUri: {
	// 		query: HOMEPAGE,
	// 		prefetch: true,
			
	// 		/* update (data) {
	// 			this.pageData = data.pages;
	// 		}, */
			
	// 		result ({ data, loading, refetch, networkStatus }) {
	// 			// console.log(data)
	// 			let parsedData = JSON.parse(data.nodeByUri.acfFields)
	// 			this.builderRows = parsedData.rows
	// 			this.pageData = data.nodeByUri
	// 		},
	// 	},
	// },
};
</script>
