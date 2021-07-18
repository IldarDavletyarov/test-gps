<template lang="pug">
.language-changer
  .icon(@click="toggle") icon
  .list
    .lang(v-for="lang in languages" :key="lang[0]" @click="select(lang[0])") {{ lang[1] }}
</template>
<script>
export default {
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