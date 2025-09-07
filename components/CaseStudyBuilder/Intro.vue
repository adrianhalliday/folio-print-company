<template>
	<div class="display-contents">
		<div 
			class="building--block content-page-intro inview"
			ref="caseStudyBuilderBlock"
			v-inview:on="handleInView"
		>

			<div class="content">
				<h3 class="pre-heading"><nuxt-link to="/our-work/">Case Studies</nuxt-link></h3>
				<h1 v-html="title"></h1>
			</div>

			<GraphicElement v-inview:on="handleInView" class="inview" />

			<DividerLine class="inview" />
			
		</div>

		<div 
			class="building--block case-study-intro"
			ref="caseStudyBuilderBlock"
		>
			<FlexibleMedia :content="block.flexibleMedia" />

			<div class="details col-4">
				<template
					v-for="(item, i) in block.keyDetails"
				>
					<span class="details--label mono" :key="i+'a'">{{item.label}}</span>
					<span class="details--value mono-slim " :key="i+'b'">{{item.details}}</span>
				</template>
			</div>

			<div 
				v-inview:on="handleInView" 
				class="content col-4" 
				v-html="block.content"
			></div>
		</div>
	</div>
</template>

<script>
/* 
Intro Block for Case Study Page Builder 
=======================================
Displays page title & Image/Carousel/Video, with key data points and WYSIWYG content below.

@param title					String		required
@param block.flexibleMedia		Object		required
@param block.keyDetails			Object		required
@param block.content			WYSIWYG		required

*/

import Global from "mixins/global.js"

export default {
	props: ['block', 'title'],
	mixins: [Global],
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