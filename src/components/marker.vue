<template lang="pug">
.marker(:class="{ 'active': isActive }" v-on="$listeners")
  .slot.before(v-if="hasSlot('before')")
    slot(name="before")
  .slot.default
    slot
      .label {{ $t('map.marker') }}  №{{ id }}
      .coords(v-if="coords") {{ coords.map(_ => _.toFixed(fractions)).join(separator) }}
  .slot.after(v-if="hasSlot('after')")
    slot(name="after")
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: undefined,
    },
    coords: {
      type: Array,
      default: () => [],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    fractions: {
      type: Number,
      default: 5,
    },
    separator: {
      type: String,
      default: ', ',
    },
  },
  methods: {
    hasSlot(name) {
      return [
        '$scopedSlots',
        '$slots'
      ].some(slotType => typeof name === 'string'
        ? !!this[slotType][name]
        : !!Object.keys(this[slotType]).find(_ => name.test(_))
      );
    }
  }
}
</script>