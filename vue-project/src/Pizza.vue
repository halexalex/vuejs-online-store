<template>
  <div>
    <slot name='title'></slot>

    <hr>

    <slot name='text'></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    border: 5px solid green;
    padding: 10px;
  }
  h2 {
    color: orange;
  }
</style>