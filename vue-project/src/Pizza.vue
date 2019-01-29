<template>
    <div id="app">
        <h2>Pizza Name: {{ pizzaName }} / {{ reverseName }}</h2>
        <p>Price: {{ pizzaPrice }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change from parent</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>

<script>
import {eventEmitter} from './main'
export default {
    props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
    methods: {
        changeName() {
            this.pizzaName = 'Margherita'
            this.$emit('nameChanged', this.pizzaName)
        },
        updateCounter() {
            eventEmitter.$emit('counterUpdated', 5)
        }
    },
    computed: {
        reverseName() {
            return this.pizzaName.split('').reverse().join('')
        }
    }
}
</script>