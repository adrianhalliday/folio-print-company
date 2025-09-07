<template>
	<header 
		:class="['bg-'+headerBg, headerOpacity]"
	>
		<div class="header--container">
			<div class="header--logo--container">
				<div class="cube--scene">
					<div 
						class="cube"
						:data-active="activeLogoState"
					>

						<div class="cube--face header--logo">
							<router-link class="header--logo--link" to="/" >
								<LogoHorizontal />
							</router-link>
						</div>

						<div class="cube--face header--lang">
							<div class="header--menu--link language-picker no-translate">
								<span>{{languages[currentLanguage].label}} / </span><IconTranslate />

								<div class="language-picker--menu">
									<div 
										v-for="(lang, i) in languages"
										class="language-picker--option no-translate"
										:class="{'active-language': currentLanguage == lang.code}"
										@click="setLanguage(lang.code)"
										:key="i"
									>
										<span>{{lang.label}}</span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="header--menu--container">
				<div 
					class="royale-with-cheese"
					:class="{active: modalOpen }"
					@click="toggleModal"
				>
					<span class="top-bun"></span>
					<span class="pattie"></span>
					<span class="bottom-bun"></span>
				</div>

				<div class="cube--scene">
					<div 
						class="cube" 
						:data-active="activeHeaderState"
					>
						<div class="cube--face header--menu">

							<MenuHeaderLink 
								v-for="(link, i) in headerMenu.menuItems.edges"
								:key="i"
								:link="link.node"
							/>

						</div>
						<div class="cube--face modal--trigger header--menu--link" @click="toggleModal">Menu</div>
						<div class="cube--face close header--menu--link" @click="toggleModal">
							<span>Close</span>
						</div>
					</div>
				</div>
			</div>

			<div class="header--contact-link header--menu--link">
				<NuxtLink to="/contact/" @click.native="toggleModal('close')">Let&rsquo;s&nbsp;talk</NuxtLink>
			</div>
		</div>

		<DividerLine />

		<div 
			class="header--modal bg-lavender"
			:class="{active: modalOpen}"
		>
			<div class="header--modal--menu">
				<div>
					<MenuModalLink 
						v-for="(link, i) in modalMenu.menuItems.edges"
						:key="i"
						:link="link.node"
						v-on:toggle-modal="toggleModal"
					/>
				</div>
			</div>

			<div class="header--modal--footer">
				<a href="https://printnation.wetransfer.com/" target="_blank" class="header--menu--link">
					<IconUpload /><span> File Upload</span>
				</a>

				<a href="mailto:hello@printnation.com" class="header--menu--link">hello@printnation.com</a>
			</div>
		</div>
	</header>
</template>

<script>
import Global from "mixins/global.js"
// import { MENUS } from '~/queries/menus.js'

export default {
	mixins: [Global],
	data() {
		return {
			currentLanguage: 'en',
			initialised: false,
			languages: {
				en: { label: 'EN', code: 'en' },
				zh: { label: '中文', code: 'zh' },
			},
			modalOpen: false,
			scrolled: false,
			headerMenu: {
				menuItems: {
					edges: [
						{
							node: {
								order: 1,
								path: '/',
								url: 'https://replaceme.com/',
								target: null,
								cssClasses: '',
								label: 'Home',
							}
						},
						{
							node: {
								order: 1,
								path: '/case-studies/',
								url: 'https://replaceme.com/case-studies/',
								target: null,
								cssClasses: '',
								label: 'Case Studies',
							}
						},
					]
				} 
			},
			modalMenu: {
				menuItems: {
					edges: [
						{
							node: {
								order: 1,
								path: '/',
								url: 'https://replaceme.com/',
								target: null,
								cssClasses: '',
								label: 'Home',
							}
						},
						{
							node: {
								order: 1,
								path: '/case-studies/',
								url: 'https://replaceme.com/case-studies/',
								target: null,
								cssClasses: '',
								label: 'Case Studies',
							}
						},
					]
				}
			},
		}
	},
	computed: {
		activeHeaderState() {
			if (!this.initialised) return false
			if (!this.scrolled) return 'header--menu'
			
			return this.modalOpen ? 'close' : 'modal--trigger'
		},
		activeLogoState() {
			if((this.$route.path == '/' && !this.scrolled) || this.modalOpen) return 'lang'
			
			return 'logo'
		},
		headerBg() {
			if(this.modalOpen) return 'lavender'

			return this.$store.state.backgroundColour
		},
		headerOpacity() {
			return this.$store.state.headerOpacity
		},
		showLang() {
			if((this.$route.path == '/' && !this.scrolled) || this.modalOpen) return true
			
			return false
		},
	},
	methods: {
		setMenuActive() {
			this.scrolled = document.documentElement.scrollTop > this.windowHeights.innerHeight
		},
		setLanguage(newLang) {
			this.currentLanguage = newLang
			Weglot.switchTo(newLang)
		},
		toggleModal(action) {
			if(action == 'close') {
				this.modalOpen = false
			}
			else {
				this.modalOpen = !this.modalOpen
			}
		},
	},
	mounted() {
		let self = this
		setTimeout(() => self.initialised = true, 750)

		window.addEventListener('scroll', () =>
			this.throttleFunction(this.setMenuActive(), 200)
		)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', () =>
			this.throttleFunction(this.setMenuActive(), 200)
		)
	},
}
</script>