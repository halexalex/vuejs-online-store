<template>
    <div id="app">
        <h2>Pizza Name: {{ pizzaName }} / {{ reverseName }}</h2>
        <p>Price: {{ pizzaPrice }}</p>
    </div>
</template>

<script>
export default {
    // props: ['pizzaName', 'pizzaPrice', 'pizzaSize'],
    // props: {
    //     pizzaName: String,
    //     pizzaPrice: Number
    // },
    props: {
        pizzaName: {
            type: String,
            // required: true,
            default: 'Default pizza name'
        },
        pizzaPrice: Number
    },
    computed: {
        reverseName () {
            return this.pizzaName.split('').reverse().join('')
        }
    }
}
</script>