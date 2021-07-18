<template lang="pug">
#app
  .l {{ locale }}
  layout
</template>
<script>
import Layout from './layouts/default';

export default {
  components: {
    Layout
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>
