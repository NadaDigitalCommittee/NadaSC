<template>
  <div class="block" :style="componentcolor">
    <nuxt-link :to="link"
      >{{ title }}<span>{{ subtitle }}</span></nuxt-link
    >
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      default: 'black',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    componentcolor() {
      return {
        '--background-color': this.color,
      }
    },
  },
}
</script>
<style lang="scss">
.block {
  width: 95%;
  background-color: var(--background-color);
  margin-left: 5%;
  a {
    display: block;
    padding-left: 5%;
    padding-top: 110px;
    padding-bottom: 30px;
    text-decoration: none;
    color: #f9fbfb;
    font-size: 2em;
    span {
      display: block;
      font-size: 1rem;
      font-style: italic;
    }
  }
}
</style>