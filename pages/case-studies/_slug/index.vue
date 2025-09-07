<template>
	<div class="page-builder">
		<LoadingScreen v-if="!builderRows" />

		<CaseStudyPageBuilder
			v-if="builderRows"
			:rows="builderRows"
			:title="pageData.title"
			:id="pageData.databaseId"
		/>

		<Footer v-if="builderRows" />
	</div>
</template>

<script>
import Global from "mixins/global.js"
import SEO from "mixins/seo.js"
import pageInit from "mixins/pageInit.js"
import { CASE_STUDY } from '~/queries/caseStudy.js';

export default {
	mixins: [Global, pageInit, SEO],
	data() {
		return {
			builderRows: null,
			pageData: null
		}
	},
	apollo: {
		pageData: {
			query: CASE_STUDY,
			prefetch: true,
			variables () {
				return {
					slug: this.slug,
				}
			},
			/* update (data) {
				this.pageData = data.pageData
			}, */
			
			result ({ data, loading, refetch, networkStatus }) {
				if(!data.pageData) {
					this.$nuxt.error({ statusCode: 404, message: 'Not found' })
				} else {
					let parsedData = JSON.parse(data.pageData.acfFields)
					this.builderRows = parsedData.rows
				}
			},
		},
	},
	async asyncData({ params }) {
		const slug = params.slug
		return { slug }
    } 
};
</script>
