<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | snippet }}</h2>
    <h2>{{ title | snippet | uppercase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Let`s learn filters!'
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
</style>
