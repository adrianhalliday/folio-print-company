<template>
	<div></div>
</template>

<script>
import Global from "mixins/global.js"

export default {
	props: null,
	mixins: [Global],
	apollo: {
		page: {
			query: TEST_QUERY,
			prefetch: true,
			
			/* update (data) {
				this.pageData = data.pages;
			}, */
			
			result ({ data, loading, refetch, networkStatus }) {
				// console.log(data)
				let parsedData = JSON.parse(data.page.acfFields)
				this.builderRows = parsedData.rows
			},
		},
	},
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