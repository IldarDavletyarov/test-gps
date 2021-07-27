<template lang="pug">
.balloon.default
  .label ID: {{ marker.id }}
  .label Lat: {{ marker.coords[0] }}
  .label Long: {{ marker.coords[1] }}
</template>
<script>
export default {
  props: {
    marker: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
