<template>
  <div class="container">
    <div class="row">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Model Name</th>
              <th>Model Description</th>
              <th>Model Type</th>
              <th>Sponsor Program</th>
              <th>Manager</th>
              <th>Rep Code</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="model in models">
              <td><input type="checkbox"></td>
              <td>{{model.modelName}}</td>
              <td>{{model.modelDescription}}</td>
              <td>{{model.modelType}}</td>
              <td>{{model.sponsorProgram}}</td>
              <td>{{model.manager}}</td>
              <td>{{model.repCode}}</td>
              <button id="delete" class="btn btn-danger btn-sm" @click="removeModel(model)">Delete</button>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ModelMainGrid',
    props: ['models', 'remove'],
    methods: {
      removeModel: function(model) {
        this.remove(model);
      }
    }
  }
</script>

<style scoped>
#delete {
  margin-top: 10%;
}
</style>
