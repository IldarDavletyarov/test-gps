<template lang="pug">
.header
  .title {{ $t("header.title") }}
  language-changer
</template>
<script>
import LanguageChanger from './language-changer.vue';

export default {
  components: {
    LanguageChanger,
  },
};
</script>