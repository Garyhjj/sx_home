<template>
  <div class="animate-img"></div>
</template>

<script>
export default {
  props: {
    img: String,
    height: {
      type: Number,
      default: 65
    },
    width: {
      type: Number,
      default: 65
    },
    pics: Number
  },
  mounted() {
    if (!this.img || !this.pics) return;
    const container = this.$el;
    container.style.backgroundImage = `url(${this.img})`;
    container.style.height = `${this.height}px`;
    container.style.width = `${this.width}px`;
    const oneY = this.height;
    const min = -oneY * (this.pics - 1);
    let timeId;
    let currentY = 0;
    const animate = (ahead) => {
      if (ahead) {
        if (currentY > min) {
          currentY -= oneY;
          container.style.backgroundPositionY = currentY + "px";
          timeId = setTimeout(() => {
            animate(ahead);
          }, 50);
        }
      } else {
        if (currentY < 0) {
          currentY += oneY;
          container.style.backgroundPositionY = currentY + "px";
          timeId = setTimeout(() => {
            animate(ahead);
          }, 50);
        }
      }
    };
    container.addEventListener("mouseenter", () => {
      clearTimeout(timeId);
      animate(true);
    });
    container.addEventListener("mouseleave", () => {
      clearTimeout(timeId);
      animate();
    });
  }
};
</script>

<style lang="scss" scoped>
.animate-img {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
  background-position-y: 0px;
  cursor: pointer;
}
</style>
