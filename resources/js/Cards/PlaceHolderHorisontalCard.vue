<template>
  <div class="border card h-100">
    <div class="text-center card-body d-flex flex-column justify-content-center py-2">
      <a href="javascript:;">
        <i
          class="mb-1 text-sm text-secondary"
          :class="`fa fa-${icon}`"
          aria-hidden="true"
        ></i>
        <component :is="title.variant" class="text-secondary d-inline pl-3">{{
          title.text
        }}</component>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceHolderHorisontalCard",
  props: {
    title: {
      type: Object,
      default: () => {},
      variant: {
        validator(value) {
          return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
        },
      },
      text: String,
    },
    icon: {
      type: String,
      default: "plus",
    },
  },
};
</script>
