<template>
  <nav id="navigation" class="navbar">
    <img src="@/assets/Logo@2x.png" alt="" />
    <h1>로또정보</h1>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
#navigation {
  background-color: #ff6183;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 10px 0;
  img {
    max-height: 40px;
    margin: 0 0.75rem 0 0.75rem;
  }
  h1 {
    font-family: BMDOHYEON, Arial, Helvetica, sans-serif;
    font-size: 24px;
    line-height: 30px;
    margin-top: 3px;
    color: white;
  }
}
</style>
