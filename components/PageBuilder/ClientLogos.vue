<template>
	<div 
		class="building--block client-logos"
		ref="buildingBlock"
	>

		<div class="container" v-if="clients">
			<div
				v-for="(logo, i) in clients.edges" 
				class="client-logo inview"
				:key="i"
				v-inview:on="handleInView"
			>
				<img :src="logo.node.featuredImage.node.mediaItemUrl" alt="logo.node.title">
				
				<DividerLine />
			</div>
		</div>

		<div class="container" v-if="!clients">
			<div class="client-logo loading" >
				<div class="dummy-logo"></div>
				<DividerLine />
			</div>

			<div class="client-logo loading" >
				<div class="dummy-logo"></div>
				<DividerLine />
			</div>

			<div class="client-logo loading" >
				<div class="dummy-logo"></div>
				<DividerLine />
			</div>

			<div class="client-logo loading" >
				<div class="dummy-logo"></div>
				<DividerLine />
			</div>
		</div>

	</div>
</template>

<script>
/* 
Client Logo Grid for Default Page Builder 
=========================================

@param block.number				Number		Number of logos to query
@param block.displayOrder		Number		Order logo by

*/

import Global from "mixins/global.js"
import { CLIENT_LOGOS } from '~/queries/clientLogos.js'

export default {
	props: ['block','bg'],
	mixins: [Global],
	data() {
		return {
			clients: null
		}
	},
	apollo: {
		clients: {
			query: CLIENT_LOGOS,
			prefetch: true,
			variables () {
				return {
					resultsToReturn: parseInt(this.block.number),
					orderBy: this.block.displayOrder,
				}
			},
		},
	},
	computed: {
	},
	methods: {
	},
}
</script>