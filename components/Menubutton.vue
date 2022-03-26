<template>
  <div>
    <!-- ハンバーガーメニュー -->
    <button
      class="menu-trigger"
      id="menu"
      v-on:click="open = !open"
      @click="send"
      v-bind:class="{ active: open }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- ハンバーガーメニュー終 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    send() {
      this.$emit('click', this.open)
      // Headerコンポーネントにopenの値を送信、フルスクリーンナビゲーションはHeaderコンポーネントで管理
    },
  },
}
</script>
<style lang="scss" scoped>

</style>