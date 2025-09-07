<template>
	<div class="header--modal--link">
		<NuxtLink 
			v-if="link.target === null"
			:to="link.path"
			:class="link.cssClasses"
			@click.native="$emit('toggle-modal')"
		>
			<span>{{link.label}}</span>
		</NuxtLink>

		<a 
			v-if="link.target != null"
			:href="link.url"
			:class="link.cssClasses"
			:target="link.target"
			@click.native="$emit('toggle-modal')"
		>
			<span>{{link.label}}</span>
		</a>
	</div>
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