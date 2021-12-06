<template>
    <span>{{num}}</span>
</template>

<script>
export default {
  props: {
    data: {
      type: Number
    }
  },
  data() {
    return {
      num: 0
    };
  },
  watch: {
    data: {
      immediate: false,
      handler() {
        this.handelDataChange();
      }
    }
  },
  mounted() {
    this.handelDataChange();
  },
  methods: {
    handelDataChange() {
      const distance = this.data - this.num;
      if (distance === 0) {
        return;
      }
      const max = 10;
      const onePlus = Math.ceil(distance / max);
      const start = (i) => {
        if (i < 1) {
          this.num = this.data;
          return;
        }
        setTimeout(() => {
          this.num += onePlus;
          start(i - 1);
        }, 50);
      };
      start(max);
    }
  }
};
</script>
