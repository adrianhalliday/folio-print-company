<template>
  <div id="page" :class="['page-'+pageSlug, {safari: isSafari}]">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Global from "mixins/global.js"

export default {
  mixins: [Global],
  computed: {
    isSafari() {
      return this.$store.state.isSafari
    },
    pageSlug() {
      return this.$route.params.slug ? this.$route.params.slug : 'home'
    },
    windowHeights() {
      return this.$store.state.windowHeights
    },
  },
  methods: {
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
    this.$store.commit('setMobile')

    this.$nextTick(() => {
      if (process.browser) {
				this.getWindowHeights()
        this.$store.commit('setSafari')

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