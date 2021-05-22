<template>
  <div class="new-number-list-item">{{ num > 0 ? num : "?" }}</div>
</template>

<script>
export default {
  name: "NewLottoNumberResultItem",
  props: {
    num: Number,
  },
};
</script>

<style lang="scss">
.new-number-list-item {
  width: 1rem;
  text-align: center;
  padding: 0 5px 5px 5px;
  border-bottom: 1px solid black;
}
</style>
