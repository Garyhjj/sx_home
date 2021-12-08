<template>
  <svg aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      return `#icon-${this.name}`;
    }
  }
};
</script>
