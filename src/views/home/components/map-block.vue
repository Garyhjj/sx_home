<template>
  <div class="block">
    <div class="title">
      <img src="~@/assets/images/home_title6.png" alt="" />
    </div>
    <div class="content-box">
      <app-content-layout>
        <div class="map-outer-box">
          <div class="area-name-box">
            <div
              v-for="item in areas"
              :key="item"
              class="area-name"
              :class="{ 'is-active': currentArea === item }"
              @click="currentArea = item"
            >
              {{ item }}
            </div>
          </div>
          <div class="real-map-box" ref="viewer">
            <div class="map-box" ref="viewBox">
              <img src="~@/assets/images/home_map.png" alt="" />
              <map-area :current="currentArea" />
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
import mapArea from "./map-area";

export default {
  components: {
    mapArea
  },
  data() {
    return {
      areas: [
        "长三角",
        "珠三角",
        "京津冀",
        "东北",
        "中原地区",
        "川陕渝",
        "新疆"
      ],
      currentArea: "新疆"
    };
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

.map-outer-box {
  display: flex;
  .real-map-box {
    width: calc(100% - 100px);
  }
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

.area-name-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #999;
  font-size: 20px;
  padding-top: 12%;
  padding-left: 20px;
  .area-name {
    padding: 12px 0;
    cursor: pointer;
    &.is-active {
      color: #1875f0;
    }
  }
}
</style>
