<template lang="pug">
.layout-default
  Header
  router-view
</template>
<script>
import Header from '@/components/header';

export default {
  components: {
    Header,
  },
};
</script>
