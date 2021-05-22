<template>
  <section class="container-box" id="newLottoNumber">
    <div class="title">
      <h2>번호뽑기</h2>
      <select
        class="select-box"
        name="pickup_count"
        id="pickupCount"
        v-model="selected"
      >
        <option class="select-box-option" :value="1">1회</option>
        <option class="select-box-option" :value="5">5회</option>
      </select>
      <i class="fas fa-caret-down"></i>
    </div>
    <hr />
    <div class="number-options">
      <div class="option">
        <input
          @change="setFirst"
          type="checkbox"
          name="except_first"
          id="exceptFirst"
        /><label for="exceptFirst" class="number-option">1등기록 제외</label>
      </div>
      <div class="option">
        <input
          @change="setSecond"
          type="checkbox"
          name="except_second"
          id="exceptSecond"
        /><label for="exceptSecond" class="number-option">2등기록 제외</label>
      </div>
      <div class="option">
        <input
          @change="setThird"
          type="checkbox"
          name="except_third"
          id="exceptThird"
        /><label for="exceptThird" class="number-option">3등기록 제외</label>
      </div>
    </div>
    <NewLottoNumberResultList
      v-for="result in results"
      :key="results.indexOf(result)"
      :numbers="result"
      :index="results.indexOf(result) + 1"
    />
    <div class="button-wrap">
      <!-- <NewLottoNumberShareButton /> -->
      <NewLottoNumberGetButton @getNew="getNewNumbers" />
    </div>
  </section>
</template>

<script>
import NewLottoNumberResultList from "./NewLottoNumberResultList";
import NewLottoNumberGetButton from "./NewLottoNumberGetButton";
// import NewLottoNumberShareButton from "./NewLottoNumberShareButton";
import { getNewNumber } from "@/api";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "NewLottoNumber",
  data() {
    return {
      selected: 5,
      results: [
        [
          { key: 1, number: -1 },
          { key: 2, number: -1 },
          { key: 3, number: -1 },
          { key: 4, number: -1 },
          { key: 5, number: -1 },
          { key: 6, number: -1 },
        ],
        [
          { key: 11, number: -1 },
          { key: 12, number: -1 },
          { key: 13, number: -1 },
          { key: 14, number: -1 },
          { key: 15, number: -1 },
          { key: 16, number: -1 },
        ],
        [
          { key: 21, number: -1 },
          { key: 22, number: -1 },
          { key: 23, number: -1 },
          { key: 24, number: -1 },
          { key: 25, number: -1 },
          { key: 26, number: -1 },
        ],
        [
          { key: 31, number: -1 },
          { key: 32, number: -1 },
          { key: 33, number: -1 },
          { key: 34, number: -1 },
          { key: 35, number: -1 },
          { key: 36, number: -1 },
        ],
        [
          { key: 41, number: -1 },
          { key: 42, number: -1 },
          { key: 43, number: -1 },
          { key: 44, number: -1 },
          { key: 45, number: -1 },
          { key: 46, number: -1 },
        ],
      ],
    };
  },
  components: {
    NewLottoNumberResultList,
    NewLottoNumberGetButton,
    // NewLottoNumberShareButton,
  },
  updated() {
    if (this.selected === 1) {
      this.$el.querySelectorAll(".new-number-list").forEach((rs, i) => {
        if (i > 0) {
          rs.style.display = "none";
        }
      });
    } else {
      this.$el.querySelectorAll(".new-number-list").forEach((rs, i) => {
        if (i > 0) {
          rs.style.display = "flex";
        }
      });
    }
  },
  methods: {
    ...mapMutations(["setExceptFirst", "setExceptSecond", "setExceptThird"]),
    ...mapGetters(["getNewNumberOptions"]),
    getNewNumber,
    setFirst(e) {
      const value = e.target.checked;
      this.setExceptFirst(value);
    },
    setSecond(e) {
      const value = e.target.checked;
      this.setExceptSecond(value);
    },
    setThird(e) {
      const value = e.target.checked;
      this.setExceptThird(value);
    },
    convertResult(results) {
      let cnt = 0;
      results.forEach((result) => {
        result.forEach((number, idx) => {
          result[idx] = { key: cnt, number };
          cnt++;
        });
      });
      return results;
    },
    async getNewNumbers() {
      const options = this.getNewNumberOptions();
      const params = new URLSearchParams();
      if (options?.exceptFirst) {
        params.append("q", "except_first");
      }
      if (options?.exceptSecond) {
        params.append("q", "except_second");
      }
      if (options?.exceptThird) {
        params.append("q", "except_third");
      }
      params.append("count", this.selected);
      const { data } = await this.getNewNumber(params);
      this.results = this.convertResult(data);
    },
  },
};
</script>

<style lang="scss">
#newLottoNumber {
  .title {
    position: relative;
    i {
      position: absolute;
      right: 2%;
      line-height: 25px;
    }
  }
}
#pickupCount {
  padding-left: 20px;
}
.number-options {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  margin: 10px 0 20px 0;
  font-size: 0.75rem;
  border-radius: 15px;
  background-color: #e9ecef;
  .option {
    display: flex;
    align-items: center;
    label {
      margin-left: 5px;
    }
  }
}
.button-wrap {
  display: flex;
  justify-content: space-evenly;
}
</style>
