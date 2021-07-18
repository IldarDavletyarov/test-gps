<template lang="pug">
.header
  .top-header
    .title {{ $t('header.title') }}
    language-changer
  .navs
    router-link.nav(v-for="nav in navs" :key="nav.title" :to="nav.link") {{ nav.title.toUpperCase() }}
</template>
<script>
import LanguageChanger from './language-changer.vue';

export default {
  components: {
    LanguageChanger,
  },
  computed: {
    navs() {
      return [
        {
          title: this.$t('navs.about'),
          link: { name: 'about' },
        },
        {
          title: this.$t('navs.map'),
          link: { name: 'map' },
        },
      ];
    },
  },
};
</script>
<style lang="stylus">
.header
  background #f0f0f0
  .top-header
    display flex
    justify-content space-between
    padding-top 24px
    .title
      margin-left 16px
      font-size 24px
    .language-changer
      margin-right 16px
  .navs
    display flex
    margin-left 24px
    .nav
      display block
      text-decoration none
      text-align center
      font-size 18px
      color #fff
      position relative
      padding 10px 16px
      opacity 0.7
      &.router-link-exact-active
        opacity 1
        &::after
          content ''
          position absolute
          bottom 0
          left 0
          width 100%
          height 2px
          background #fff
          

</style>