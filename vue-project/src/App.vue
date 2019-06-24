<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="'/'">Home</router-link>
          </li> -->
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <!-- <li class="nav-item active">
            <router-link class="nav-link" :to="'/pizza'">Pizza</router-link>
          </li> -->
          <router-link tag="li" class="nav-item" to="/pizza" active-class="active">
            <a class="nav-link">Pizza</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
