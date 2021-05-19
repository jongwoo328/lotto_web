<template>
  <div class="number-list-item">
    <span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: "LastLottoNumberListItem",
  props: {
    num: Number,
    bonus: {
      default: false,
    },
  },
  methods: {
    setColor() {
      let ballColor;
      if (this.num === 0) {
        ballColor = "#858585";
      } else if (this.num <= 10) {
        ballColor = "#fffca3";
      } else if (this.num <= 20) {
        ballColor = "#a3cbff";
      } else if (this.num <= 30) {
        ballColor = "#ffaba3";
      } else if (this.num <= 40) {
        ballColor = "#858585";
      } else {
        ballColor = "#7be5a5";
      }
      this.$el.style.backgroundColor = ballColor;
    },
  },
  updated() {
    this.setColor();
  },
};
</script>

<style lang="scss">
.number-list-item {
  border-radius: 50%;
  background-color: gray;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
