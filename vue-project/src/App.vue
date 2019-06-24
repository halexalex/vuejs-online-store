<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="search">

    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Let`s learn filters!',
      search: '',
      names: ['Johnn', 'David', 'Amy']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1
      })
    }
  } 
}
</script>

<style scoped>
</style>
