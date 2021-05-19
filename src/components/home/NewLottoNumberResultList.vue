<template>
  <div class="new-number-list" :data-index="index">
    <div class="round">
      <span>{{ index }}</span>
      <i class="fas fa-caret-right"></i>
    </div>
    <NewLottoNumberResultItem
      v-for="num in numbers"
      :key="num.key"
      :num="num.number"
    />
  </div>
</template>

<script>
import NewLottoNumberResultItem from "./NewLottoNumberResultItem";
export default {
  name: "NewLottoNumberResultList",
  components: { NewLottoNumberResultItem },
  props: { index: Number, numbers: Array },
};
</script>

<style lang="scss">
.new-number-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
  .round {
    font-size: 0.75rem;
    span {
      margin: 0 5px 0 5px;
    }
  }
}
</style>
