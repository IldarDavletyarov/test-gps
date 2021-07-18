<template lang="pug">
.header
  .top-header
    .title {{ $t('header.title') }}
    language-changer
  .navs
    router-link.nav(v-for="nav in navs" :key="nav.title" :to="nav.link") {{ nav.title | capitalize }}
</template>
<script>
import LanguageChanger from '@/components/language-changer';

export default {
  filters: {
    capitalize: (v) => v.toUpperCase(),
  },
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
  background #747da9
  background-image url(https://image.api.playstation.com/vulcan/ap/rnd/202009/3001/RV4BS7bI6if8PyPOwJmVl2zc.jpg)
  background-size cover
  box-shadow inset 0 0 0 1000px rgba(116,125,251,.4)
  .top-header
    display flex
    justify-content space-between
    padding-top 24px
    .title
      margin-left 16px
      font-size 24px
      color #fff
    .language-changer
      margin-right 16px
  .navs
    display flex
    margin-left 24px
    @media screen and (max-width: 640px)
      margin-left 0
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