<template>
  <div>
    <div class="point-area-container">
      <!-- 乌鲁木齐 -->
      <div class="point-area point-area-1">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">新疆·乌鲁木齐</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 北京 -->
      <div class="point-area point-area-2">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">北京</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 天津 -->
      <div class="point-area point-area-3" style="display: none">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name">天津</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 沈阳 -->
      <div class="point-area point-area-4">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">辽宁·沈阳</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 郑州 -->
      <div class="point-area point-area-5">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">河南·郑州</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 成都 -->
      <div class="point-area point-area-6">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">四川·成都</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 重庆 -->
      <div class="point-area point-area-7">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">重庆</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 广州 -->
      <div class="point-area point-area-8">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">广东·广州</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 香港 -->
      <div class="point-area point-area-9" style="display: none">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name">香港</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>

      <!-- 常州 -->
      <div class="point-area point-area-10">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">江苏·常州</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <!-- 宁波 -->
      <div class="point-area point-area-11">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">浙江·宁波</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <div class="point-area point-area-12">
        <p class="point-name point-name-small">甘肃·兰州</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-13">
        <p class="point-name point-name-small">内蒙古·呼和浩特</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-14">
        <p class="point-name point-name-small">贵州·贵阳</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-15" style="display: none">
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-16">
        <p class="point-name point-name-small">浙江·温州</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-17">
        <p class="point-name point-name-small">香港</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-18">
        <p class="point-name point-name-small">黑龙江·哈尔滨</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-19">
        <a href="javascript:;" class="point-dot" spm="index.make"></a>
        <p class="point-name point-name-bold">天津</p>
        <div class="point-10"></div>
        <div class="point-40"></div>
        <div class="point-80"></div>
      </div>
      <div class="point-area point-area-20">
        <p class="point-name point-name-small">福建·厦门</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-21">
        <p class="point-name point-name-small">江西·南昌</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
      <div class="point-area point-area-22">
        <p class="point-name point-name-small">湖北·武汉</p>
        <div class="point-dot point-dot-sm"></div>
      </div>
    </div>
    <div class="point-group-container">
      <!-- 新疆区域 -->
      <div class="point-group-area point-group-area-1" :class="{active: current === '新疆'}" data-area="xinjiang">
        <p class="point-group-title point-group-title-right-top">
          <span>新疆</span>
          <i class="icon-line icon-line-to-right"></i>
        </p>
      </div>
      <!-- 中部区域 -->
      <div class="point-group-area point-group-area-2" :class="{active: current === '中原地区'}" data-area="middlearea">
        <p class="point-group-title point-group-title-left-top">
          <span>中原地区</span>
          <i class="icon-line icon-line-to-left"></i>
        </p>
      </div>
      <!-- 西部区域 -->
      <div class="point-group-area point-group-area-3" :class="{active: current === '川陕渝'}" data-area="southwest">
        <p class="point-group-title point-group-title-left-top">
          <span>川陕渝</span>
          <i class="icon-line icon-line-to-left"></i>
        </p>
      </div>
      <!-- 东北区域 -->
      <div class="point-group-area point-group-area-4" :class="{active: current === '东北'}" data-area="northeast">
        <p class="point-group-title point-group-title-left-top">
          <span>东北</span>
          <i class="icon-line icon-line-to-left"></i>
        </p>
      </div>
      <!-- 长三角区域 -->
      <div class="point-group-area point-group-area-5" :class="{active: current === '长三角'}" data-area="changsj">
        <p class="point-group-title point-group-title-right-top">
          <span>长三角</span>
          <i class="icon-line icon-line-to-right"></i>
        </p>
      </div>
      <!-- 京津冀区域 -->
      <div
        class="point-group-area point-group-area-6"
        :class="{active: current === '京津冀'}"
        data-area="jinjingji"
      >
        <p class="point-group-title point-group-title-left-top">
          <span>京津冀</span>
          <i class="icon-line icon-line-to-left"></i>
        </p>
      </div>
      <!-- 珠三角区域 -->
      <div class="point-group-area point-group-area-7" :class="{active: current === '珠三角'}" data-area="zhusj">
        <p class="point-group-title point-group-title-right-bottom">
          <span>珠三角</span>
          <i class="icon-line icon-line-to-right-bottom"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: String
  }
};
</script>

<style lang="scss" scoped>
.point-area-container {
    position: absolute;
    left: 10px;
    top: 4px;
    width: 100%;
    height: 100%;
    z-index: 20;
}

.point-area {
    position: absolute;
    width: 80px;
    height: 80px;
}

.point-area .point-dot {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 16px;
    height: 16px;
    background: #1875f0;
    border-radius: 50%;
}

.point-area .point-dot.point-dot-sm {
    width: 8px;
    height: 8px;
}

.point-area .point-name {
    position: absolute;
    top: 30px;
    left: 56px;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    white-space: nowrap;
}

.point-group-container {
    position: absolute;
    left: 10px;
    top: 4px;
    width: 100%;
    height: 100%;
    z-index: 10;
}

.point-group-area {
    position: absolute;
    width: 290px;
    height: 290px;
    border: 1px solid rgba(24, 117, 240, .66);
    border-radius: 50%;
    background: rgba(24, 117, 240, .05);
    opacity: .5;
}

.point-group-area.active {
    opacity: 1;
}

.point-group-area.active .point-group-title {
    display: inline-block;
}

.point-group-area .point-group-title {
    position: absolute;
    display: none;
    height: 32px;
    padding: 0 13px;
    border: 1px solid #1875f0;
    background: rgba(24, 117, 240, .1);
    font-size: 14px;
    line-height: 30px;
    color: #1875f0;
    white-space: nowrap;
}

.point-group-area .point-group-title.point-group-title-right-top {
    left: 280px;
    top: 0;
}

.point-group-area .point-group-title.point-group-title-right-bottom {
    left: 280px;
    bottom: 0;
}

.point-group-area .point-group-title.point-group-title-left-top {
    right: 280px;
    top: 0;
}
.point-group-area-4 .point-group-title.point-group-title-left-top {
    right: 287px;
    top: 0;
}

/* 地图区域名称 - 折线 */
.point-group-area .point-group-title .icon-line {
    position: absolute;
    top: 16px;
    display: inline-block;
    width: 28px;
    height: 17px;
}

.point-group-area .point-group-title .icon-line.icon-line-to-left {
    right: -28px;
    background: url('~@/assets/images/icon_line_to_left.png');
}

.point-group-area .point-group-title .icon-line.icon-line-to-right {
    left: -28px;
    background: url('~@/assets/images/icon_line_to_right.png');
}

.point-group-area .point-group-title .icon-line.icon-line-to-right-bottom {
    left: -28px;
    top: -1px;
    background: url('~@/assets/images/icon_line_to_right.png');
    transform: rotateX(180deg);
    -ms-transform: rotateX(180deg);
}

@media (max-width: 768px) {
    .point-area {
        width: 28px;
        height: 28px;
    }

    .point-group-area {
        width: 85px;
        height: 85px;
    }

    .point-area .point-dot {
        width: 5px;
        height: 5px;
    }

    .point-area .point-dot.point-dot-sm {
        width: 3px;
        height: 3px;
    }

    .point-area .point-name {
        top: 10px;
        left: 20px;
        font-size: 12px;
        line-height: 12px;
        white-space: normal;
        width:75px;
    }

    .point-group-area .point-group-title {
        height: 22px;
        padding: 0 5px;
        font-size: 12px;
        line-height: 20px;
    }

    .point-group-area .point-group-title.point-group-title-right-top {
        left: 105%;
        top: -13px;
    }

    .point-group-area .point-group-title.point-group-title-right-bottom {
        left: 111%;
        bottom: -13%;
    }

    .point-group-area .point-group-title.point-group-title-left-top {
        right: 111%;
        top: -5px;
    }

    /* 地图区域名称 - 折线 */
    .point-group-area .point-group-title .icon-line {
        top: 10px;
        width: 20px;
        height: 10px;
    }

    .point-group-area .point-group-title .icon-line.icon-line-to-left {
        right: -20px;
    }

    .point-group-area .point-group-title .icon-line.icon-line-to-right {
        left: -20px;
    }

    .point-group-area .point-group-title .icon-line.icon-line-to-right-bottom {
        left: -20px;
    }
}

.module.module-cloud-manufacture .side-tab-list {
    margin-top: 124px;
}

/* 小点定位开始 */
/* 新疆生产建设兵团 */
.point-area.point-area-1 {
    top: 27.37%;
    left: 17.92%;
}

/* 北京 */
.point-area.point-area-2 {
    top: 38.41%;
    left: 63.72%;
}

.point-area.point-area-2 .point-name {
    left: -4px;
}

/* 天津 */
.point-area.point-area-3 {
    top: 40.22%;
    left: 64.75%;
}

/* 沈阳 */
.point-area.point-area-4 {
    top: 31.15%;
    left: 73.47%;
}

/* 郑州 */
.point-area.point-area-5 {
    top: 51.4%;
    left: 58.12%;
}

/* 成都 */
.point-area.point-area-6 {
    top: 65.36%;
    left: 44.26%;
}

.point-area.point-area-6 .point-name {
    left: -31px;
}

/* 重庆 */
.point-area.point-area-7 {
    top: 68.16%;
    left: 48.12%;
}

/* 广州 */
.point-area.point-area-8 {
    top: 82.12%;
    left: 57.62%;
}

.point-area.point-area-8 .point-name {
    left: -34px;
}

/* 深圳 */
.point-area.point-area-9 {
    top: 83.52%;
    left: 59.21%;
}

/* 常州 */
.point-area.point-area-10 {
    top: 60.75%;
    left: 68.91%;
}

/* 宁波 */
.point-area.point-area-11 {
    top: 67.88%;
    left: 70.3%;
}

.point-area.point-area-12 {
    top: 50.56%;
    left: 42.87%;
}

.point-area.point-area-13 {
    top: 34.78%;
    left: 56.83%;
}

.point-area.point-area-14 {
    top: 74.93%;
    left: 48.5%;
}

.point-area.point-area-15 {
    top: 67.18%;
    left: 60.79%;
}

.point-area.point-area-16 {
    top: 71.95%;
    left: 69.47%;
}

.point-area.point-area-17 {
    top: 84.78%;
    left: 60.3%;
}
.point-area.point-area-18 {
    top: 21.15%;
    left: 79.92%;
}
.point-area.point-area-19 {
    top: 41.45%;
    left: 65.02%;
}
.point-area.point-area-20 {
    top: 79.55%;
    left: 65.67%;
}
.point-area.point-area-21 {
    top: 70.55%;
    left: 63.17%;
}
.point-area.point-area-22 {
    top: 65.55%;
    left: 59.67%;
}
.point-area .point-name-bold{
    font-weight: bold;
}
.point-area .point-name-small{
    font-size: 12px;
}
.point-area-12 .point-name{
    left: -27px;
}
.point-area-13 .point-name{
    left: -65px;
}
.point-area-14 .point-name{
    left: -26px;
}
.point-area-16 .point-name{
    left: 48px;
}
.point-area-17 .point-name{
    left: 48px;
}
.point-area-18 .point-name{
    left: -53px;
}
.point-area-20 .point-name{
    left: 48px;
}
.point-area-21 .point-name{
    left:-25px;
}
.point-area-22 .point-name{
    left: -25px;
}
.deguo .point-name{
    left: 51px;
}

/* 小点定位结束 */
/* 地图区域定位开始 */
/* 新疆区域 */
.point-group-area.point-group-area-1 {
    top: 18.44%;
    left: 11.49%;
}

/* 中部区域 */
.point-group-area.point-group-area-2 {
    top: 42.58%;
    left: 43.96%;
}

/* 西南区域 */
.point-group-area.point-group-area-3 {
    top: 57.29%;
    left: 33.33%;
}

/* 东北区域 */
.point-group-area.point-group-area-4 {
    top: 0.85%;
    left: 66.19%;
    width: 300px;
    height: 300px;
}

/* 长三角区域 */
.point-group-area.point-group-area-5 {
    top: 48.9%;
    left: 55.09%;
}

/* 津京冀区域 */
.point-group-area.point-group-area-6 {
    top: 26.47%;
    left: 55.52%;
}

/* 珠三角区域 */
.point-group-area.point-group-area-7 {
    top: 59.78%;
    left: 49.07%;
}

/* 地图区域定位结束 */
/* 小点波纹动画开始 */
@keyframes ripple {
    0% {
        opacity: 0;
        transform: scale(0.1, 0.1);
    }
    5% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.point-area .point-10 {
    width: 100%;
    height: 100%;
}

.point-area .point-10:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 225ms infinite;
}

.point-area .point-20 {
    width: 100%;
    height: 100%;
}

.point-area .point-20:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 450ms infinite;
}

.point-area .point-30 {
    width: 100%;
    height: 100%;
}

.point-area .point-30:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 675ms infinite;
}

.point-area .point-40 {
    width: 100%;
    height: 100%;
}

.point-area .point-40:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 900ms infinite;
}

.point-area .point-50 {
    width: 100%;
    height: 100%;
}

.point-area .point-50:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 1125ms infinite;
}

.point-area .point-60 {
    width: 100%;
    height: 100%;
}

.point-area .point-60:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 1350ms infinite;
}

.point-area .point-70 {
    width: 100%;
    height: 100%;
}

.point-area .point-70:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 1575ms infinite;
}

.point-area .point-80 {
    width: 100%;
    height: 100%;
}

.point-area .point-80:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 1800ms infinite;
}

.point-area .point-90 {
    width: 100%;
    height: 100%;
}

.point-area .point-90:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 2025ms infinite;
}

.point-area .point-100 {
    width: 100%;
    height: 100%;
}

.point-area .point-100:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #58ABFF;
    opacity: 0;
    animation: ripple 4500ms ease-out 2250ms infinite;
}
</style>
