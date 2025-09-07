/* 
 * Methods, Computed Properties and calls for Page Load
 * ====================================================
 * Add code here that needs to be executed on all pages 
 * of the site.
 * 
 */

let pageInit = {
	computed: {
	},
	methods: {
	},
	mounted() {
		this.$store.commit('showHeader')
	},
	beforeDestroy() {
	},
}

export default pageInit;