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
// import { PAGE } from '~/queries/page.js';
import pages from '~/queries/static/pages.js'

export default {
	mixins: [Global, pageInit, SEO],
	data() {
		return {
			slug: 'case-studies',
			builderRows: pages['case-studies']?.builderRows,
			pageData: pages['case-studies']?.pageData
		}
	},
	// apollo: {
	// 	pageData: {
	// 		query: PAGE,
	// 		prefetch: true,
	// 		variables () {
	// 			return {
	// 				slug: this.slug,
	// 			}
	// 		},
	// 		result ({ data, loading, refetch, networkStatus }) {
	// 			// console.log(data)

	// 			if(!data.pageData) {
	// 				this.$nuxt.error({ statusCode: 404, message: 'Not found' })
	// 			} else {
	// 				let parsedData = JSON.parse(data.pageData.acfFields)
	// 				this.builderRows = parsedData.rows
	// 				this.pageData = data.pageData
	// 			}
	// 		},
	// 	},
	// },
};
</script>
