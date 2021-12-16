<template>
  <div class="path-container">
    <svg>
      <path
        d="
    M 50 50
    m 0 -47
    a 47 47 0 1 1 0 94
    a 47 47 0 1 1 0 -94
    "
        stroke="#3F85ED"
        stroke-width="0.4"
        fill="none"
        style="stroke-dasharray: 60px, 295.31px; stroke-dashoffset: 0px"
      ></path>
      <path
        d="
    M 50 50
    m 0 -47
    a 47 47 0 1 1 0 94
    a 47 47 0 1 1 0 -94
    "
        stroke="#FFF"
        fill="none"
        stroke-linecap="round"
        stroke-width="0.4"
        class="path"
        style="
          stroke-dasharray: 1px, 295.31px;
          transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;
        "
      ></path>
    </svg>
    <img src="~@/assets/images/map_bar.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.path-container {
  position: absolute;
  top: 106%;
  left: 71%;
  svg {
    transform: scale(5) rotateZ(30deg);
  }
  img {
      position: absolute;
      top: -230%;
      left: -12%;
  }
}
.path {
  stroke-dashoffset: -0px;
  animation: rotationRight 6s linear infinite;
}

@keyframes rotationRight {
  0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: -30px;
  }
  100% {
    stroke-dashoffset: -60px;
  }
}
</style>
