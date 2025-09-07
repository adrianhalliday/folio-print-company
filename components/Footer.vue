<template>
	<fragment>
		<footer
			v-if="footerSettings"
			id="footer"
			ref="footer"
			class="building--row cols-100 h-flexible bg-lavender"
		>
			<div class="building--block footer--upper">
				<LogoHorizontal />
			</div>
			
			<div class="building--block footer--lower">
				<DividerLine />

				<div class="footer--vertical-divider"></div>

				<div class="footer--contact">
					<h3>Contact</h3>
					<div v-html="footerSettings.footercontactdetails"></div>
				</div>

				<div class="footer--socials">
					<h3>Follow</h3>
					<ul>
						<li v-for="(link, i) in footerSettings.footersociallinks" :key="i">
							<a :href="link.url" target="_blank" class="footer--link external">
								<span>{{link.linktext}}</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="footer--menu">
					<h3>Links</h3>
					<ul>
						<li v-for="(item, i) in footerSettings.footermenu" :key="i">
							<router-link 
								v-if="item.menuitem.target == ''"
								:to='linkPath(item.menuitem.url)'
								class="footer--link"
							>
								<span>{{item.menuitem.title}}</span>
							</router-link>
							
							<a 
								v-if="item.menuitem.target != ''"
								:href='item.menuitem.url'
								:target="item.menuitem.target"
								class="footer--link external"
							>
								<span>{{item.menuitem.title}}</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="footer--content">
					<div v-html="footerSettings.footercontent"></div>
				</div>

				<div class="footer--copyright">
					<p v-html="footerSettings.footercopyright" class="small"></p>
				</div>
				<div class="footer--message">
					<p v-html="footerSettings.footermessage" class="small"></p>
				</div>
			</div>
		</footer>
		
		<footer
			v-if="footerSettings"
			id="footer-spacer"
			class="building--row cols-100 h-flexible bg-lavender"
			ref="footerSpacer"
			aria-hidden
		>
			<div class="building--block footer--upper">
				<LogoHorizontal />
			</div>
			
			<div class="building--block footer--lower">
				<DividerLine />

				<div class="footer--vertical-divider"></div>

				<div class="footer--contact">
					<h3>Contact</h3>
					<div v-html="footerSettings.footercontactdetails"></div>
				</div>

				<div class="footer--socials">
					<h3>Follow</h3>
					<ul>
						<li v-for="(link, i) in footerSettings.footersociallinks" :key="i">
							<a :href="link.url" target="_blank" class="footer--link external">
								<span>{{link.linktext}}</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="footer--menu">
					<h3>Links</h3>
					<ul>
						<li v-for="(item, i) in footerSettings.footermenu" :key="i">
							<router-link 
								v-if="item.menuitem.target == ''"
								:to='linkPath(item.menuitem.url)'
								class="footer--link"
							>
								<span>{{item.menuitem.title}}</span>
							</router-link>
							
							<a 
								v-if="item.menuitem.target != ''"
								:href='item.menuitem.url'
								:target="item.menuitem.target"
								class="footer--link external"
							>
								<span>{{item.menuitem.title}}</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="footer--content">
					<div v-html="footerSettings.footercontent"></div>
				</div>

				<div class="footer--copyright">
					<p v-html="footerSettings.footercopyright" class="small"></p>
				</div>
				<div class="footer--message">
					<p v-html="footerSettings.footermessage" class="small"></p>
				</div>
			</div>
		</footer>
	</fragment>
</template>

<script>
/* 
Global Footer 
=============

@param footerSettings.footercontactdetails		WYSIWYG		
@param footerSettings.footercontent				WYSIWYG		
@param footerSettings.footercopyright			String		
@param footerSettings.footermenu				Object		
@param footerSettings.footermessage				String		
@param footerSettings.footersociallinks			Object		

*/

import Global from "mixins/global.js"
import { FOOTER } from '~/queries/footer.js'

export default {
	mixins: [Global],
	data() {
		return {
			footer: null,
			footerSpacer: null,
			headerBaseLine: null,
			themeSettings: {
				globalCustomSettings: {
					footercontactdetails: '<p>1800 PRINT ME<br>hello@printnation.com</p>',
					footercontent: '<p>Print Nation is a proud B Corp that pays tribute to the traditional land owners.</p>',
					footercopyright: 'Copyright 2021 Print Nation',
					footermenu: [
						{
							menuitem: {
								target: '',
								title: 'Link',
								url: 'https://replaceme.com/something/',
							}
						},
						{
							menuitem: {
								target: '',
								title: 'Link',
								url: 'https://replaceme.com/something/',
							}
						},
						{
							menuitem: {
								target: '',
								title: 'Link',
								url: 'https://replaceme.com/something/',
							}
						},
					],
					footermessage: 'foooter message',
					footersociallinks: [
						{
							linktext: 'Facebook',
							url: 'https://facebook.com/'
						}
					]
				}
			}
		}
	},
	// apollo: {
	// 	themeSettings: {
	// 		query: FOOTER,
	// 		prefetch: true,
	// 	},
	// },
	computed: {
		footerSettings() {
			if(!this.themeSettings) return false

			return this.themeSettings.globalCustomSettings
		},
		isMobile() {
			return this.$store.state.isMobile
		},
	},
	methods: {
		linkPath(url) {
			let urlObject = new URL(url)
			return urlObject.pathname
		},
	},
	mounted() {
		let self = this


		
		this.$nextTick(() => {
			this.footer = [this.$refs.footer]
			this.footerSpacer = [this.$refs.footerSpacer]
			this.headerBaseLine = document.querySelector('header .divider--line')

			if(self.isMobile && typeof self.footer[0] !== "null" && typeof self.footer[0] !== "undefined") {
				self.detectRowBelow(self.footer, self.headerBaseLine)
			
				window.addEventListener('scroll', () => {
					self.throttleFunction(self.detectRowBelow(self.footer, self.headerBaseLine), 100)
				})
			} else if (typeof self.footerSpacer[0] !== "null" && typeof self.footerSpacer[0] !== "undefined") {
				self.detectRowBelow(self.footerSpacer, self.headerBaseLine)
			
				window.addEventListener('scroll', () => {
					self.throttleFunction(self.detectRowBelow(self.footerSpacer, self.headerBaseLine), 100)
				})
			}

		})
	},
	beforeDestroy() {
		window.removeEventListener('scroll', () => {
			this.throttleFunction(this.detectRowBelow(this.footer, this.headerBaseLine), 100)
		})
		window.removeEventListener('scroll', () => {
			this.throttleFunction(this.detectRowBelow(this.footerSpacer, this.headerBaseLine), 100)
		})
	},
}
</script>