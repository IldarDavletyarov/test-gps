<template lang="pug">
.marker(:class="{ 'active': isActive }" v-on="$listeners")
  .slot.before(v-if="hasSlot('before')")
    slot(name="before")
  .slot.default
    slot
      .label {{ $t('map.marker') }}  №{{ id }}
      .coords(v-if="coords") {{ coords | coordsFormat(fraction, separator) }}
  .slot.after(v-if="hasSlot('after')")
    slot(name="after")
</template>
<script>
import { coordsFormat } from '@/utils/filters/coords';

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
    fraction: {
      type: Number,
      default: 5,
    },
    separator: {
      type: String,
      default: ', ',
    },
  },
  filters: {
    coordsFormat,
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