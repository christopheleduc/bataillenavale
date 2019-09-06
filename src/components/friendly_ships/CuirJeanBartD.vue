<template>
  <!-- <div> -->
  <div 
  v-bind:style="{
    top: y + 'px' ,
    left: x + 'px' ,
    }"
  >
    <img alt="Vue logo" src="../.././assets/n_c_friendly_jean_bart_d.jpg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 417,
      y: 446,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  position: absolute;
  /* top: 417px;
  left: 240px; */
  transform: translate(-50%, -50%);
}
div img {
  height: 58px;
}
</style>