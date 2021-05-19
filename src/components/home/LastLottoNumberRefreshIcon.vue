<template>
  <i class="fas fa-sync-alt"></i>
</template>

<script>
export default {
  name: "LastLottoNumberRefreshIcon",
  props: {
    refreshing: {
      default: false,
    },
  },
  methods: {
    setRefreshAnimation() {
      const animationScript = "spin 1.5s linear infinite";
      if (this.refreshing) {
        this.$el.style["-webkit-animation"] = animationScript;
        this.$el.style["-mox-animation"] = animationScript;
        this.$el.style.animation = animationScript;
      } else {
        this.$el.style["-webkit-animation"] = null;
        this.$el.style["-mox-animation"] = null;
        this.$el.style.animation = null;
      }
    },
  },
  watch: {
    refreshing() {
      this.setRefreshAnimation();
    },
  },
};
</script>

<style lang="scss"></style>
