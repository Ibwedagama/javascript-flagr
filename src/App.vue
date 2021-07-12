<template>
  <div id="app">
    <div v-if="flags.includes('testing-flag-1')" class="box">
      <h1>Testing Flag 1</h1>
    </div>
    <div v-if="flags.includes('testing-flag-2')" class="box">
      <h1>Testing Flag 2</h1>
    </div>
    <!-- <div v-else>
      <p>Loading...</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    flags() {
      return this.$store.getters.getEnabledFlags
    },
    flagEvaluation() {
      return this.$store.getters.getFlagEvaluation
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  padding: 2rem 3rem;
  border: 1px solid red;
  margin-bottom: 1rem;
}
</style>
