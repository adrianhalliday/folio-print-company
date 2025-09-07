<template>
	<fragment>
		<div
			v-for="(row, i) in rows"
			:key="i"
			class="building--row bg-black inview"
			:class="row.columns"
			ref="caseStudyBuilderRow"
			v-inview:on="handleInView"
		>
			<!-- Load single component if full-width block -->
			<component
				v-if="row.columns == 'cols-100'"
				:is="row.column_100.block[0].acf_fc_layout"
				:block="row.column_100.block[0]"
				:title="title"
			></component>

			<!-- Load two components if 50/50 blocks -->
			<component
				v-if="row.columns == 'cols-50-50'"
				:is="row.column_1.block[0].acf_fc_layout"
				:block="row.column_1.block[0]"
			></component>
			<component
				v-if="row.columns == 'cols-50-50'"
				:is="row.column_2.block[0].acf_fc_layout"
				:block="row.column_2.block[0]"
			></component>
		</div>

		<div id="more-case-studies" class="building--row bg-black inview">
			<div class="building--block more-case-studies">
				<h2>More Case Studies</h2>
			</div>

			<PageBuilderCaseStudyIndex :block="block" />
		</div>
	</fragment>
</template>

<script>
import Global from "mixins/global.js"

export default {
	props: ['rows', 'title', 'id'],
	mixins: [Global],
	data() {
		return {
			block: {
				number: 2,
				notIn: this.id
			}
		}
	},
	computed: {
	},
	methods: {
		initScrollListener() {
			console.log('init scroll listenter')

			let self = this,
				buildingRows = this.$refs.caseStudyBuilderRow,
				headerBaseLine = document.querySelector('header .divider--line')

			window.addEventListener('scroll', () => {
				self.throttleFunction(self.detectRowBelow(buildingRows, headerBaseLine), 100)
			})
		},
		styleArray(bgImage) {
			return bgImage ? `background-image: url(${bgImage});` : ''
		},
		setInitialHeaderBackground() {
			this.$store.commit('setBackgroundColour', {
				colour: 'black'
			})
		}
	},
	mounted() {
		this.setInitialHeaderBackground()

		this.$nextTick(() => {
			// window.addEventListener('scroll', this.initScrollListener(), { once: true} )
			setTimeout( this.initScrollListener(), 100)
		})
	},
	beforeDestroy() {
		window.removeEventListener('scroll', () => {
			this.throttleFunction(this.detectRowBelow(buildingRows, headerBaseLine), 100)
		})
	},
}
</script>