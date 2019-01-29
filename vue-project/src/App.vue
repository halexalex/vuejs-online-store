<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza 
    :pizzaName="pizzaName"
    :pizzaPrice="pizzaPrice"
    :changeFunc="changePizzaName"
    @nameChanged="pizzaName = $event"
    @counterUpdated="counter = $event"
    ></app-pizza>

    <app-counter>

    </app-counter>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'
import Counter from './Counter.vue'
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
    appPizza: Pizza,
    appCounter: Counter
  }
}
</script>
