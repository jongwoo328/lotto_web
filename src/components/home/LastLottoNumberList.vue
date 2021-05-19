<template>
  <div class="number-list">
    <LastLottoNumberListItem :num="lottoData.num1" />
    <LastLottoNumberListItem :num="lottoData.num2" />
    <LastLottoNumberListItem :num="lottoData.num3" />
    <LastLottoNumberListItem :num="lottoData.num4" />
    <LastLottoNumberListItem :num="lottoData.num5" />
    <LastLottoNumberListItem :num="lottoData.num6" />
    <i class="fas fa-plus plus"></i>
    <LastLottoNumberListItem :num="lottoData.bonus" :bonus="true" />
  </div>
</template>

<script>
import LastLottoNumberListItem from "./LastLottoNumberListItem";
export default {
  name: "LastLottoNumberList",
  components: { LastLottoNumberListItem },
  props: {
    lottoData: Object,
  },
};
</script>

<style lang="scss">
.number-list {
  max-width: 100%;
  min-height: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .plus {
    line-height: 40px;
  }
}
</style>
