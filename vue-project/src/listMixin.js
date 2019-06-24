export default {
  data() {
    return {
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
  },
  created() {
    console.log('Created')
  }
}