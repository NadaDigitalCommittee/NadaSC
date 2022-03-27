<template>
  <div class="accordion">
    <div class="title" @click="open = !open">
      <dt v-bind:class="{ isopen: open }">
        <slot name="title"></slot>
      </dt>
    </div>
    <transition name="open">
      <div class="accordion-content" v-show="open">
        <dd>
          <slot name="content"></slot>
        </dd>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.accordion {
  margin: 1.5em 0;
  dt {
    font-size: 1.3em;
    margin-bottom: 1em;
    position: relative;
    border-bottom: 1px #000 solid;
  }
  dt::after {
    font-family: 'Material Icons';
    content: '\e5c5';
    font-weight: 900;
    position: absolute;
    top: 50%;
    right: 5vw;
    transform: translateY(-50%);
  }
  dt.isopen::after {
    content: '\e5c7';
  }
  dd {
    line-height: 1.5;
  }
}

.open-enter-active,
.open-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

@keyframes open {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.open-enter-active {
  animation: open 0.1s;
}
.open-leave-active {
  animation: open 0.2s linear reverse;
}
</style>