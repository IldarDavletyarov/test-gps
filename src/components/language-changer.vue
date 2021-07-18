<template lang="pug">
.language-changer(v-click-outside="close")
  .icon(@click.stop="toggle" :class="{'active': isShow }")
    icon-globe
  .list(v-show="isShow")
    .lang(
      v-for="lang in languages"
      :key="lang[0]"
      @click.stop="select(lang[0])"
      :class="{'selected': lang[0] === $i18n.locale }"
    ) {{ lang[1] }}
</template>
<script>
import IconGlobe from '../icons/globe.vue';

import VueClickOutside from 'v-click-outside';

export default {
  directives: {
    clickOutside: VueClickOutside.directive,
  },
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
    close() {
      this.isShow = false;
    },
    select(val) {
      this.$store.dispatch('setLocale', val);
      this.close();
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
    border-radius 50%
    padding 8px
    opacity 1
    &.active
    &:hover
      background #e0e0e0
      svg
        path
          fill #000
    svg
      display block
      margin 0
      path
        transition fill .3s ease
        fill #fff
  .list
    position absolute
    top 100%
    right 0
    z-index 1
    background #fff
    border-radius 4px
    .lang
      padding 16px
      cursor pointer
      border-radius 4px
      transition background-color .3s ease
      &.selected
        font-weight 600
      &:hover
        background #e0e0e0
</style>