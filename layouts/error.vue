<template>
  <div id="page" :class="['page-error', {safari: isSafari}]">
    <Header />
    
    <div class="page-builder">
      <div class="building--row cols-100 h-100 bg-black">
        <div class="building--block error">

          <div class="content col-8" v-if="error.statusCode === 404" >
              <h1
                class="animated-stats--main inview"
                v-inview:on="animateNumber"
              >
                <span>You’ve got</span>
              
                <vue-odometer 
                :value="animatedNumber"
                :format="'(,ddd)'"
                :theme="'default'"
                :animation="'default'"
                ></vue-odometer>
                
                <span>problems.</span>
              </h1>

              <h3>But finding a decent printer ain’t one.</h3>
              
              <router-link 
                to='/'
                class="cta internal"
              >
                <span>Let’s go home</span>
              </router-link>
          </div>
          <div class="content col-8" v-else >
              <h1
                class="animated-stats--main inview"
                v-inview:on="animateNumber"
              >We’re sorry, this area seems to be out of order.
              </h1>

              <h3>Check back soon!</h3>
              
              <router-link 
                to='/'
                class="cta internal"
              >
                <span>Back to home</span>
              </router-link>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </div>
  
</template>

<script>
import Global from "mixins/global.js"

export default {
  mixins: [Global],
  props: ['error'],
  layout: 'error',
	data() {
		return {
			animatedNumber: 0
		}
	},
	head() {
		return {
		  title: this.error.statusCode === 404 ? 'Page not found | Print Nation' : 'Error | Print Nation',
		}
	},
  computed: {
    isSafari() {
      return this.$store.state.isSafari
    },
    windowHeights() {
      return this.$store.state.windowHeights
    },
  },
  methods: {
    animateNumber($v) {
			$v.enter = (el) => {
				this.animatedNumber = parseInt(this.error.statusCode)
				el.classList.add('inview-active')
			}
			/* $v.exit = (el) => {
			} */
		},
    get100vh() {
      const newDiv = document.createElement("div")
      newDiv.style.cssText = 'position:fixed;width:1px;height:100vh;opacity:0;z-index:-1;background:transparent;color:transparent'
      newDiv.setAttribute("id", "100-vh-measurement")
      document.body.appendChild(newDiv)

      const vh100 =  document.getElementById('100-vh-measurement').clientHeight
      // console.log('100vh is: '+vh100)

      return vh100
    },
    getWindowHeights() {
      let innerHeight = window.innerHeight
      let outerHeight = this.get100vh()

      this.$store.commit('setWindowHeights', {
        innerHeight: innerHeight,
        outerHeight: outerHeight
      })
    },
    initLocalisation() {
      let self = this

      Weglot.initialize({
        api_key: 'wg_30e337d68cbf4419cdb18d365af010339',
        /* switchers: [
          {
            style: {
                full_name: false,
                // with_name: false,
                // is_dropdown: false,
                // with_flags: true,
                // flag_type: "circle",
                // invert_flags: false
            },
            location: {
              target: ".header--lang",
              sibling: null
            },
          }
        ], */
        excluded_blocks: [
          {
            value: ".no-translate" // All elements with this class won't be translated
          }
        ],
        hide_switcher: true,
      })
    },
  },
  mounted() {
    console.log(this.error)
    this.$store.commit('setMobile')

    this.$nextTick(() => {
      if (process.browser) {
				this.getWindowHeights()
        this.$store.commit('setSafari')
        this.$store.commit('setBackgroundColour', {
          colour: 'black'
        })

        if(this.isMobile) window.addEventListener('resize', () => {
          this.getWindowHeights()
        })

        // this.initLocalisation()
      }
    })
  },
  beforeDestroy() {
    if(this.isMobile) window.removeEventListener('resize', () => {
      this.getWindowHeights()
    })
  },
  watch: {
    $route() {
      this.$store.commit('fadeHeader')
    },
    windowHeights (newVal, oldVal) {
      if(this.isMobile) {
        let root = document.documentElement
        root.style.setProperty('--100vh', this.windowHeights.innerHeight + 'px')
      }
    },
  },
}
</script>