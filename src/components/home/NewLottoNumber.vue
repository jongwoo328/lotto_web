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
        <input type="checkbox" name="except_first" id="exceptFirst" /><label
          for="exceptFirst"
          class="number-option"
          >1등 제외</label
        >
      </div>
      <div class="option">
        <input type="checkbox" name="except_second" id="exceptSecond" /><label
          for="exceptSecond"
          class="number-option"
          >2등 제외</label
        >
      </div>
      <div class="option">
        <input type="checkbox" name="except_third" id="exceptThird" /><label
          for="exceptThird"
          class="number-option"
          >3등 제외</label
        >
      </div>
    </div>
    <NewLottoNumberResultList
      v-for="result in results"
      :key="results.indexOf(result)"
      :numbers="result"
      :index="results.indexOf(result) + 1"
    />
  </section>
</template>

<script>
import NewLottoNumberResultList from "./NewLottoNumberResultList";
export default {
  name: "NewLottoNumber",
  data() {
    return {
      selected: 5,
      results: [
        [
          { key: 1, number: 0 },
          { key: 2, number: 0 },
          { key: 3, number: 0 },
          { key: 4, number: 0 },
          { key: 5, number: 0 },
          { key: 6, number: 0 },
        ],
        [
          { key: 11, number: 0 },
          { key: 12, number: 0 },
          { key: 13, number: 0 },
          { key: 14, number: 0 },
          { key: 15, number: 0 },
          { key: 16, number: 0 },
        ],
        [
          { key: 21, number: 0 },
          { key: 22, number: 0 },
          { key: 23, number: 0 },
          { key: 24, number: 0 },
          { key: 25, number: 0 },
          { key: 26, number: 0 },
        ],
        [
          { key: 31, number: 0 },
          { key: 32, number: 0 },
          { key: 33, number: 0 },
          { key: 34, number: 0 },
          { key: 35, number: 0 },
          { key: 36, number: 0 },
        ],
        [
          { key: 41, number: 0 },
          { key: 42, number: 0 },
          { key: 43, number: 0 },
          { key: 44, number: 0 },
          { key: 45, number: 0 },
          { key: 46, number: 0 },
        ],
      ],
      selectedResult: this.results,
    };
  },
  components: { NewLottoNumberResultList },
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
</style>
