<template>
  <div class="accordion">
    <div class="title" @click="open = !open">
      <dt :class="{ isopen: open }">
        <slot name="title"></slot>
        <Icon name="material-symbols:arrow-drop-down" mode="svg" />
      </dt>
    </div>
    <transition name="open">
      <div v-show="open" class="accordion-content">
        <dd>
          <slot name="content"></slot>
        </dd>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
const open = ref(false)
</script>
<style lang="scss" scoped>
.accordion {
  margin: 1.5em 0;
  dt {
    font-size: 1.3em;
    margin-bottom: 1em;
    position: relative;
    border-bottom: 1px #000 solid;
    .iconify {
      position: absolute;
      top: 0%;
      right: 5vw;
      transform: rotate(0deg);
    }
    &.isopen .iconify {
      transform: rotate(180deg);
    }
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
