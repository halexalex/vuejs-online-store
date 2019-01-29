<template>
    <div id="app">
        <h2>Pizza Name: {{ pizzaName }} / {{ reverseName }}</h2>
        <p>Price: {{ pizzaPrice }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc">Change from parent</button>
    </div>
</template>

<script>
export default {
    props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
    methods: {
        changeName() {
            this.pizzaName = 'Margherita'
            this.$emit('nameChanged', this.pizzaName)
        }
    },
    computed: {
        reverseName() {
            return this.pizzaName.split('').reverse().join('')
        }
    }
}
</script>