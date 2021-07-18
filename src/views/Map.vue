<template lang="pug">
.map-page
  .markers
    .title {{ $t('map.markersTitle') }}
    .marker(
      v-for="marker in markers"
      :key="marker.id"
      @click="onMarkerClick(marker)"
      :class="{ 'selected': selectedId === marker.id }"
    )
      .label {{ $t('map.marker') }}  № {{ marker.id }}
      .coords {{ marker.coords.map(_ => _.toFixed(5)).join(', ') }}
  .map
    yandex-map.y-map(:settings="settings" :coords="mapCoords" @click="onMapClick")
      ymap-marker(
        v-for="marker in markers"
        :key="marker.id"
        :marker-id="marker.id"
        :coords="marker.coords"
        @click="onYmapMarkerClick(marker)"
      )
        .balloon(slot="balloon")
          .label ID: {{ marker.id }}
          .label Lat: {{ marker.coords[0] }}
          .label Long: {{ marker.coords[1] }}
    .plus(@click="startAdding")
      icon-plus

</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import IconPlus from '@/icons/plus';

export default {
  name: 'Map',
  components: {
    yandexMap,
    ymapMarker,
    IconPlus,
  },
  data: () => ({
    settings: {
      apiKey: 'c9b49220-aea5-48a0-9633-17df1dc1100e',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1'
    },
    isAdding: false,
    mapCoords: [0, 0],
    selectedId: undefined,
  }),
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    markers() {
      return this.$store.state.markers;
    },
  },
  methods: {
    startAdding() {
      this.isAdding = true;
    },
    finishAdding() {
      this.isAdding = false;
    },
    onMapClick(e) {
      this.selectedId = undefined;
      if (!this.isAdding) {
        return;
      }
      this.$store.dispatch('addMarker', { id: this.markers.length + 1, coords: e.get('coords') });
      this.finishAdding();
    },
    onMarkerClick(marker) {
      this.mapCoords = marker.coords;
    },
    onYmapMarkerClick(marker) {
      this.selectedId = marker.id;
    },
  },
};
</script>
<style lang="stylus">
.map-page
  display flex
  .markers
    width 25%
    .title
      font-size 24px
      margin 16px 0 24px 16px
    .marker
      cursor pointer
      padding 16px
      &.selected
      &:hover
        background #e0e0e0
      .coords
        color #a0a0a0
        font-size 14px

  .map
    width 75%
    position relative
    .y-map
      width 100%
      height 100vh
    .plus
      position absolute
      padding 8px
      border-radius 50%
      background blue
      right 24px
      bottom 24px
      cursor pointer
      svg
        display block
        margin auto
        path
          fill #fff
</style>
