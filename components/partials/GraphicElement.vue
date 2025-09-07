<template>
  <div
    v-if="graphicId"
    class="GraphicElement inview"
    :class="'graphic-'+graphicId" 
    :data-index="index"
  >
    <component 
      :is="'graphic'+graphicId"
      class="inview"
      v-inview:on="handleInView"
    ></component>
  </div>
</template>

<script>
import Global from "mixins/global.js"

export default {
  props: ['graphic','index'],
  mixins: [Global],
  data() {
    return {
      graphicId: this.graphic ?? false
    }
  },
  mounted() {
    if(process.client && !this.graphic) this.graphicId = Math.floor(Math.random() * 7) + 1
  },
}
</script>