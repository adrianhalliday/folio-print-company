<template>
	<div 
		class="FlexibleMedia"
		:image-ratio="ratioAttr"
	>
		<img 
			v-if="content.type === 'image' && singleImage"
			:src="content.images[0].url" 
			:alt="content.images[0].url.alt"
			class="fit cover"
		>

		<swiper
			v-if="content.type === 'image' && !singleImage"
			class="carousel"
			:options="swiperOptions"
		>
			<swiper-slide
				v-for="(image, i) in content.images"
				:key="i"
			>
				<img 
					:src="image.url"
					:alt="image.alt"
					class="fit cover"
				>
			</swiper-slide>

		</swiper>

		<video 
			v-if="content.type === 'video'"
			class="video hasBgImage"
			autoplay loop muted playsinline 
			:style="styleArray"
		>
			<source :src="content.mp4" type="video/mp4">
			<source :src="content.webm" type="video/webm">
		</video>

		<div 
			v-if="content.type === 'player'"
			class="vimeo"
		>
			<div class="placeholder"></div>
			<div class="play-button"></div>
			<div class="player"></div>
		</div>
	</div>
</template>

<script>
/* 
Flexible Image/Carousel/Video Component
=======================================
@param content.type					String		'image' || 'video' || 'player'
@param content.images				Array		required if type=image
@param content.placeholderImage		Object		required if type=video
@param content.mp4					Url			required if type=video
@param content.webm					Url			required if type=video
@param content.webm					vimeoId		required if type=player
@param ratio						string		required

*/

import Global from 'mixins/global.js'
// import { IMAGE_ALIGNMENTS } from '~/queries/imageAlignments.js';

export default {
	props: ['content','ratio'],
	mixins: [Global],
	data() {
		return {
			// imageAlignments: {},
			swiperOptions: {
				loop: true,
				slidesPerView: 1,
				speed: 0,
				effect: 'fade',
				autoplay: {
					delay: 2000,
					disableOnInteraction: true
				},
			}
		}
	},
	// apollo: {
	// 	mediaItems: {
	// 		query: IMAGE_ALIGNMENTS,
	// 		prefetch: true,
	// 		variables () {
	// 			return {
	// 				ids: this.content.images ? this.content.images.map(i => parseInt(i.id)) : null
	// 			}
	// 		},
	// 		result ({ data }) {
	// 			// for(let $i = 0; $i < data.mediaItems.nodes.length; $i++) {
	// 			// 	console.log('index: '+$i+'. id: '+data.mediaItems.nodes[$i].mediaItemId)
	// 			// }

	// 			data.mediaItems.nodes.forEach(node => {
	// 				this.imageAlignments[node.mediaItemId] = node.imageAlignment.imagealignment
	// 			})
	// 		}
	// 	},
	// },
	computed: {
		ratioAttr() {
			if(!this.ratio) return false

			return this.ratio
		},
		singleImage() {
			return this.content.images.length == 1
		},
		styleArray() {
			return `background-image: url(${this.content.placeholderImage.url});`
		}
	},
	methods: {
	},
	watch: {
	}
}
</script>