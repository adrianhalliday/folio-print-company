<template>
	<div class="case-study--tile col-2 col-md-1">
		<router-link :to="'/case-studies/'+caseStudy.node.slug+'/'" class="case-study--tile--inner">

			<div class="case-study--tile--image">
				<img 
					:src="caseStudy.node.featuredImage.node.mediaItemUrl" 
					alt="caseStudy.node.title"
				>
			</div>

			<div class="case-study--tile--details">
				<h3>{{caseStudy.node.title}}</h3>
				<p>{{acfFields.summary}}</p>
			</div>
		
		</router-link>
		<DividerLine />
	</div>
</template>

<script>
/* 
CTA Partial
===========
@param caseStudy.node.title				String
@param caseStudy.node.featuredImage		Object
@param caseStudy.node.acfFields			Stringified JSON object

*/
export default {
	props: ['caseStudy'],
	computed: {
		acfFields() {
			return this.caseStudy.node.acfFields
		},
	}
}
</script>