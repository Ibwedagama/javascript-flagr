<template>
  <div id="app">
    <div v-if="flagEvaluation.length">
      <div v-for="flag in flagEvaluation" :key="flag.flagID" class="box">
        <h1>{{ flag.flagKey }}</h1>
        <p>Variant: {{flag.variantKey}}</p>
        <p>Value: {{flag.variantAttachment}}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
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
