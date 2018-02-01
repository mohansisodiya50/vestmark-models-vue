<template>
  <div id="app">
    <ModelHeaders/>
    <ModelMenuBar/>
    <ModelMainGrid/>
  </div>
</template>

<script>
import ModelHeaders from './components/ModelHeaders';
import ModelMainGrid from './components/ModelMainGrid';
import ModelMenuBar from './components/ModelMenuBar';

export default {
  name: 'App',
  components: {
    ModelHeaders,
    ModelMainGrid,
    ModelMenuBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
