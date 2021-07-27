<template lang="pug">
#app
  layout
</template>
<script>
import Layout from './layouts/default';

export default {
  components: {
    Layout
  },
  watch: {
    '$store.state.main.locale': {
      handler(val) {
        this.$i18n.locale = val;
      }
    },
  },
};
</script>
<style lang="stylus">
html
body
  padding 0
  margin 0
  width 100vw
  min-height 100vh
  font-family Helvetica
</style>
