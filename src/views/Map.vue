<template lang="pug">
.map-page
  .markers-wrapper
    .title {{ $t('map.markersTitle') }}
    .markers
      .marker(
        v-for="marker in markers"
        :key="marker.id"
        @click="onMarkerClick(marker)"
        :class="{ 'selected': id === marker.id }"
      )
        .label {{ $t('map.marker') }}  №{{ marker.id }}
        .coords {{ marker.coords.map(_ => _.toFixed(5)).join(', ') }}
  .map
    yandex-map.y-map(
      :settings="settings"
      :controls="[]"
      :coords="mapCoords"
      @click="onMapClick"
    )
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
    .plus(@click="toggleAdding" :class="{ 'active': isAdding }")
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
    mapCoords: [55.707298976442445, 37.625740654460806], // 2 Gamsonovsky per., Moscow
  }),
  props: {
    id: {
      type: [String, Number],
    },
  },
  computed: {
    markers() {
      return this.$store.state.markers;
    },
  },
  methods: {
    async mockApi(newMarkers) {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log('Save markers successfully', newMarkers);
          resolve();
        }, 50);
      });
    },
    toggleAdding() {
      this.isAdding = !this.isAdding;
    },
    finishAdding() {
      this.isAdding = false;
    },
    async onMapClick(e) {
      this.selectMarker(undefined);
      if (!this.isAdding) {
        return;
      }
      this.$store.dispatch('addMarker', { id: this.markers.length + 1, coords: e.get('coords') });
      this.finishAdding();

      try {
        await this.mockApi(this.markers);
      } catch (error) {
        console.error(error);
      }
    },
    onMarkerClick(marker) {
      this.mapCoords = marker.coords;
      this.selectMarker(marker.id);
    },
    selectMarker(id) {
      if (this.id === id) {
        return;
      }
      this.$router.replace({ params: { id } });
    },
    onYmapMarkerClick(marker) {
      this.selectMarker(marker.id);
    },
  },
};
</script>
<style lang="stylus">
.map-page
  display flex
  .markers-wrapper
    width 25%
    .markers
      max-height calc(100vh - 175px)
      overflow auto
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
      height calc(100vh - 105px)
    .plus
      position absolute
      padding 24px
      border-radius 50%
      background #1776dc
      right 24px
      bottom 24px
      cursor pointer
      transition transform .3s ease
      &.active
        background red
        transform rotate(45deg)
      svg
        display block
        margin auto
        path
          fill #fff
  @media screen and (max-width: 600px)
    flex-direction column
    .markers-wrapper
      width 100%
      .markers
        max-height 165px
    .map
      width 100%
      .plus
        padding 12px 
        right 12px
        bottom 12px

</style>
