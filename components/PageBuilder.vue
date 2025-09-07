<template>
	<fragment>
		<div
			v-for="(row, i) in rows"
        	:key="i"
			:id="row.id"
			class="building--row cols-100"
			:class="[{hasBgImage: row.bgImage != false},
				row.rowHeight, 
				'bg-'+row.rowBg,
				row.layoutClasses
			]"
			:style="styleArray(row.bgImage)"
			ref="buildingRow"
		>
			<component
				:is="row.block[0].acf_fc_layout"
				:block="row.block[0]"
				:bg="row.rowBg"
			></component>
		</div>
	</fragment>
</template>

<script>
import Global from "mixins/global.js"

export default {
	props: ['rows'],
	mixins: [Global],
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
		initScrollListener() {
			let self = this,
				buildingRows = this.$refs.buildingRow,
				headerBaseLine = document.querySelector('header .divider--line')

			window.addEventListener('scroll', () => {
				self.throttleFunction(self.detectRowBelow(buildingRows, headerBaseLine), 100)
			})
		},
		styleArray(bgImage) {
			return bgImage ? `background-image: url(${bgImage});` : ''
		},
		setInitialHeaderBackground() {
			let headerBackground = this.rows[0].rowBg

			this.$store.commit('setBackgroundColour', {
				colour: headerBackground
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