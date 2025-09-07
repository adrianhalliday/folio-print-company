<template>
	<div>
		<router-link 
			v-if="cta.type == 'link'"
			:to='pageLink'
			class="cta"
			:class="{internal: !cta.newWindow, external: cta.newWindow}"
		>
			<span>{{cta.text}}</span>
		</router-link>
		
		<a 
			v-if="cta.type == 'file' || cta.type == 'url'"
			:href='cta[cta.type]'
			class="cta"
			:target="target"
		>
			<span>{{cta.text}}</span>
		</a>

	</div>
</template>

<script>
/* 
CTA Partial
===========
@param cta.addCta			Boolean
@param cta.type				String		'link' || 'file' || 'url'
@param cta.newWindow		Boolean		
@param cta.text				String		
@param cta.link				URL		
@param cta.file				URL		
@param cta.url				URL		

*/
export default {
	props: ['cta'],
	computed: {
		pageLink() {
			let urlObject = new URL(this.cta.link)
			return urlObject.pathname
		},
		target() {
			return this.cta.newWindow ? '_blank' : ''
		},
	}
}
</script>