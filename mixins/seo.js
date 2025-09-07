/* 
 * Global page SEO data mapper
 * ===========================
 * 
 */

let SEO = {
	head() {
		return {
		  title: this.seoPageTitle,
		  meta: [
		    { hid:'description', name:'description', content: this.seoDescription },
			{ hid: 'og:title', name: 'og:title', content: this.seoPageTitle },
    		{ hid: 'og:description', name: 'og:description', content: this.seoDescription },
			{ hid: 'og:image', name: 'og:image', content: this.seoImage },
			{ hid: 'twitter:title', name: 'twitter:title', content: this.seoPageTitle},
			{ hid: 'twitter:description', name: 'twitter:description', content: this.seoDescription},
			{ hid: 'twitter:image:src', property: 'twitter:image:src', content: this.seoImage},
		  ]
		}
	},
	computed: {
		seoPageTitle() {
			return this.pageData && this.pageData.seo ? this.pageData.seo.title : 'Page not found | Print Nation'
		},
		seoImage() {
			return this.pageData && this.pageData.featuredImage ? this.pageData.seo.socialImage.sourceUrl : ''
		},
		seoDescription() {
			return this.pageData && this.pageData.seo ? this.pageData.seo.description : 'Print Nation description'
		},
	},
}

export default SEO