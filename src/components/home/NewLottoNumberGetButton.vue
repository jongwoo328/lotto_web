<template>
  <button
    @click="$emit('getNew')"
    class="new-number-button new-number-get-button"
  >
    뽑기
  </button>
</template>

<script>
export default {
  name: "NewLottoNumberGetButton",
};
</script>

<style lang="scss">
.new-number-button {
  height: 3rem;
}
.new-number-get-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  border-radius: 15px;
  border: none;
  font-size: 1.25rem;
  color: white;
  background-color: #ff6183;
}
</style>
