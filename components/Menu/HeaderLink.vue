<template>
	<span class="header--menu--link">
		<router-link 
			v-if="link.target === null"
			:to="link.path"
			:class="link.cssClasses"
		>
			<span>{{link.label}}</span>
		</router-link>
		
		<a 
			v-if="link.target != null"
			:href="link.url"
			:class="link.cssClasses"
			:target="link.target"
		>
			<span>{{link.label}}</span>
		</a>
	</span>
</template>

<script>

export default {
	props: ['link'],
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