<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza 
    :pizzaName="pizzaName"
    :pizzaPrice="pizzaPrice"
    :changeFunc="changePizzaName"
    @nameChanged="pizzaName = $event"></app-pizza>
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
  methods: {
    changePizzaName() {
      this.pizzaName = 'Hawaiian'
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>
