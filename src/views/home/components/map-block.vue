<template>
  <div class="block">
    <div class="title">
      <img src="~@/assets/images/home_title6.png" alt="" />
    </div>
    <div class="content-box">
      <app-content-layout>
        <div ref="viewer">
          <div class="map-box" ref="viewBox">
            <img src="~@/assets/images/home_map.png" alt="" />
            <map-path1 />
            <map-path2 />
            <map-path3 />
            <map-path4 />
            <map-path5 />
            <map-path6 />
            <map-path7 />
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
import mapPath1 from "./map-path/index1.vue";
import mapPath2 from "./map-path/index2.vue";
import mapPath3 from "./map-path/index3.vue";
import mapPath4 from "./map-path/index4.vue";
import mapPath5 from "./map-path/index5.vue";
import mapPath6 from "./map-path/index6.vue";
import mapPath7 from "./map-path/index7.vue";

export default {
  components: {
    mapPath1,
    mapPath2,
    mapPath3,
    mapPath4,
    mapPath5,
    mapPath6,
    mapPath7
  },
  mounted() {
    this.updateScreenSize();
  },
  methods: {
    updateScreenSize() {
      const container = this.$refs.viewer;
      if (!container) {
        setTimeout(() => {
          this.updateScreenSize();
        }, 5);
        return;
      }
      const viewBox = this.$refs.viewBox;
      const resizeObserver = new ResizeObserver(() => {
        const outerWidth = container.clientWidth;
        const realWidth = viewBox.clientWidth;
        const widthScale = outerWidth / realWidth;
        viewBox.style.transform = `scale(${widthScale}, ${widthScale})`;
      });
      resizeObserver.observe(this.$el);
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  > .title {
    text-align: center;
  }
  margin-bottom: 59px;
}
.block {
  margin-top: 60px;
}
.content-box {
  width: 100%;
  margin-top: 56px;
  img {
    width: 100%;
  }
}
.map-box {
  position: relative;
  width: 1200px;
  padding: 0 8px;
  box-sizing: border-box;
  transform-origin: left top;
  overflow: hidden;

}
</style>
