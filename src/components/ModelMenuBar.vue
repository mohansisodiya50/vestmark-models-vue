<template>
  <div class="container buttonContainer">
    <div class="row">
      <div  class="center-block text-center">
        <ModelCreateDialog/>
          <button type="submit" class="btn btn-success" @click="copyModel">Copy</button>
      </div>
    </div>
  </div>

</template>

<script>
import ModelCreateDialog from './ModelCreateDialog';

export default {
  name: 'ModelMenuBar',
  components: {
    ModelCreateDialog
  },
  methods: {
    copyModel: function() {
      alert("Currently not supported. Please try Create!");
    }
  }
}
</script>

<style scoped>
  .buttonContainer {
    margin-bottom: 1%;
  }
</style>
