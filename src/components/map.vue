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
    .balloon(slot="balloon")
      .label ID: {{ marker.id }}
      .label Lat: {{ marker.coords[0] }}
      .label Long: {{ marker.coords[1] }}
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

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
  },
}
</script>