<template>
  <section class="container-box" id="lastNumber">
    <div class="title">
      <div class="name">
        <h2>{{ lottoData.round }}회</h2>
        <span v-text="lottoData.date"></span>
      </div>
      <!-- <div class="refresh" @click="refreshLastLotto()">
        <LastLottoNumberRefreshIcon :refreshing="refreshing" />
      </div> -->
    </div>
    <hr />
    <LastLottoNumberList :lottoData="lottoData" />
  </section>
</template>

<script>
import { getLastLotto } from "@/api";
import LastLottoNumberList from "./LastLottoNumberList";
// import LastLottoNumberRefreshIcon from "./LastLottoNumberRefreshIcon";

export default {
  name: "LastLottoNumber",
  data() {
    return {
      lottoData: {
        round: "000",
        date: "0000-00-00",
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0,
        bonus: 0,
      },
      refreshing: false,
    };
  },
  methods: {
    async refreshLastLotto() {
      this.refreshing = true;
      try {
        const { data } = await getLastLotto();
        this.lottoData = data;
      } catch (err) {
        alert("최신 당첨 정보를 가져오는 데 실패했습니다.");
      } finally {
        this.refreshing = false;
      }
    },
  },
  async mounted() {
    await this.refreshLastLotto();
  },
  components: {
    LastLottoNumberList,
    //  LastLottoNumberRefreshIcon
  },
};
</script>

<style lang="scss">
#lastNumber {
  .name {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    span {
      font-size: 0.75rem;
      margin: 0 0.75rem;
    }
  }
  .refresh {
    padding: 2px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
