import { resolve } from 'path'

export default {
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
  	apiUrl: process.env.API_URL || 'https://staging.api.domain.com/graphql',
  },
  head: {
    title: 'Print Nation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.js',
        body: true
      },
      {
        src: 'https://cdn.weglot.com/weglot.min.js',
        body: false
      },
    ],
  },
  alias: {
  	'plugins': resolve(__dirname, './plugins'),
  	'collections': resolve(__dirname, './collections'),
  	'components': resolve(__dirname, './components'),
  	'mixins': resolve(__dirname, './mixins'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Router configuration
  router: {
  	mode: 'history',
  	scrollBehavior: async (to, from, savedPosition) => {
  		if (savedPosition) {
  			return savedPosition;
  		}

  		const findEl = async (hash, x) => {
  			return document.querySelector(hash) || new Promise((resolve, reject) => {
  				if (x > 50) {
  					return resolve();
  				}

  				setTimeout(() => {
  					resolve(findEl(hash, ++x || 1));
  				}, 100);
  			});
  		};

  		if (to.hash) {
  			let el = await findEl(to.hash);

  			if ('scrollBehavior' in document.documentElement.style) {
  				return window.scrollTo({
  					top: el.offsetTop,
  					behavior: 'smooth'
  				});
  			} else {
  				return window.scrollTo(0, el.offsetTop);
  			}
  		}

  		return {
  			x: 0,
  			y: 0
  		};
  	},
  	trailingSlash: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugins/vue-awesome-swiper', mode: 'client' },
    { src: 'plugins/vue-odometer.client.js' },
    { src: 'plugins/vue-inview.client.js' },
    { src: 'plugins/vue-fragments.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/partials',
      '~/components/GraphicElements',
      {path: '~/components/FlexibleContent', prefix: 'fc'}
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/redirect-module',
    'nuxt-ssr-cache',
    '@nuxtjs/gtm',
  ],

  redirect: [{
  	from: '^.*(?<!/)$',
  	to: (from, req) => req.url + '/',
  	statusCode: 301
  }],

  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      // '/capabilities/',
      // '/technology/',
      // '/contact/',
      '/',

      // you can also pass a regular expression to test a path
      // /^\/page3\/\d+$/,

      // to cache only root route, use a regular expression
      // /^\/$/
    ],

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 300,
    },
  
  },

  // Apollo module configuration: https://go.nuxtjs.dev/config-axios
  apollo: {
  	clientConfigs: {
  		default: '~/plugins/vue-apollo-client-config.js',
  		alternativeClient: {
  			httpEndpoint: process.env.API_URL || 'https://staging.api.domain.com/graphql' //link to your graphql backend.
  		}
  	}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
  	gtm: {
  		id: process.env.GOOGLE_TAG_MANAGER_ID
  	}
  },
}
