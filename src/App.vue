<template>
  <div id="app">
    <ModelHeaders/>
    <ModelMenuBar :createModel="createNewModel"/>
    <ModelMainGrid :models="models" :remove="removeModel"/>
  </div>
</template>

<script>
import ModelHeaders from './components/ModelHeaders';
import ModelMainGrid from './components/ModelMainGrid';
import ModelMenuBar from './components/ModelMenuBar';
import Firebase from 'firebase';
import db from './ModelDatabase';

let modelsRef = db.ref("models");

export default {
  name: 'App',
  components: {
    ModelHeaders,
    ModelMainGrid,
    ModelMenuBar
  },
  data: () => {
    return {
      models: []
    }
  },
  firebase: () => {
    return {
        models: modelsRef
    }
  },
  methods: {
    createNewModel: function (newModel) {
      modelsRef.push(newModel);
      for (let key in newModel) {
        newModel[key] = '';
      }
    },
    removeModel: (model) => {
      modelsRef.child(model['.key']).remove()
    }
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
