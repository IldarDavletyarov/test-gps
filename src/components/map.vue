<template lang="pug">
yandex-map.y-map(
  :settings="settings"
  :controls="controls"
  :coords="coords"
  v-on="$listeners"
)
  ymap-marker(
    v-for="marker in markers"
    :key="marker.id"
    :marker-id="marker.id"
    :coords="marker.coords"
    @click="$emit('marker-click', marker)"
  )
    component(:is="balloon" slot="balloon" :marker="marker") 
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import DefaultBalloon from '@/components/balloons/default';

import { settings } from '@/modules/map/config';

export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  props: {
    settings: {
      type: Object,
      default: () => settings,
    },
    controls: {
      type: Array,
      default: () => [],
    },
    coords: {
      type: Array,
      default: () => [0, 0],
    },
    markers: {
      type: Array,
      default: () => [],
    },
    /*
      Element of markers is marker:
      @prop id
      @prop coords – array with latitude and longitude
    */
    balloon: {
      type: Object,
      default: () => DefaultBalloon,
    },
    /*
      Balloon is dynamic vue component
    */
  },
}
</script>