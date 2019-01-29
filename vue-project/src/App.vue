<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza :pizzaPrice="pizzaPrice"></app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'
export default {
  name: 'app',
  data () {
    return {
      pizzaName: 'Pepperoni from App.vue',
      pizzaPrice: 7,
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>
