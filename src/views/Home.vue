<template>
  <div class="home">
    <LastLottoNumber />
    <NewLottoNumber />
  </div>
</template>

<script>
import LastLottoNumber from "@/components/home/LastLottoNumber";
import NewLottoNumber from "@/components/home/NewLottoNumber";

export default {
  name: "Home",
  components: { LastLottoNumber, NewLottoNumber },
};
</script>

<style lang="scss"></style>
