<template>
  <footer class="pull-right">
    <a type="submit" class="btn btn-success" @click="saveModel" href="#">Save</a>
    <a class="btn btn-danger" href="#">Cancel</a>
  </footer>
</template>

<script>
  export default {
    name: 'ModelFooter',
    props: ['createModel'],
    data: () => {
      return {
      }
    },
    methods: {
      saveModel: function () {
        this.createModel();
      }
    }
  }
</script>

<style scoped>

</style>
