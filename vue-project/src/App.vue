<template>
  <div>
    <app-pizza>
      <h2 slot='title'>{{ pizzaName }}</h2>
      <p slot='text'>Lorem, ipsum dolor.</p>
    </app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'

export default {
  data() {
    return {
      pizzaName: 'Marinara'
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>

<style scoped>
</style>
