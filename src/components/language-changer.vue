<template lang="pug">
.language-changer
  .icon(:class="{'active': isShow }")
    icon-globe(@click.native="toggle") icon
  .list(v-if="isShow")
    .lang(v-for="lang in languages" :key="lang[0]" @click="select(lang[0])") {{ lang[1] }}
</template>
<script>
import IconGlobe from '../icons/globe.vue';
export default {
  components: {
    IconGlobe,
  },
  data: () => ({
    isShow: false,
  }),
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    select(val) {
      this.$store.dispatch('setLocale', val);
    },
  },
  computed: {
    languages() {
      return Object.entries(this.$t('languages'));
    },
  },
};
</script>
<style lang="stylus">
.language-changer
  position relative
  .icon
    transition all .3s ease
    cursor pointer
    border-radius 16px
    padding 4px
    opacity 0.3
    &.active
    &:hover
      opacity 1
      background #e0e0e0
    svg
      display block
      margin 0
  .list
    position absolute
    top 100%
    right 0
    background #fff
    border-radius 4px
    .lang
      padding 16px
      cursor pointer
</style>