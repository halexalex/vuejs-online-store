<template>
    <div id="app">
        <h2>Pizza Name: {{ pizzaName }}</h2>
        <p>Price: {{ pizzaPrice }}</p>
        <p>Size: {{ pizzaSize }}</p>
    </div>
</template>

<script>
export default {
    props: ['pizzaName', 'pizzaPrice', 'pizzaSize'],
}
</script>