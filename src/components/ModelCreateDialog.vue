<template>
   <span>
      <a class="btn btn-success" href="#createModel">Create</a>
      <div id="createModel" class="overlay">
         <div class="popup">
            <div class="container dialogContainer content">
              <div class="form-group">
                <div class="row">
                   <label for="modelName">Model Display Name:</label>
                   <input type="text" id="modelName" class="modelDialog form-control" v-model="newModel.modelName">
                </div>
                <br>
                <div class="row">
                   <label for="modelDescription">Model Description:</label>
                   <textarea class="modelDialog form-control" id="modelDescription" v-model="newModel.modelDescription"></textarea>
                </div>
                <br>
                <div class="row">
                   <label for="modelType">Model Type:</label>
                   <select id="modelType" class="modelDialog form-control" v-model="newModel.modelType">
                      <option disabled value="">Please select one</option>
                      <option>Asset Allocation</option>
                      <option>Standard</option>
                      <option>Security Only</option>
                      <option>Flexible</option>
                      <option>Template-based</option>
                   </select>
                </div>
                <br>
                <div class="row">
                   <label for="sponsorProgram">Sponsor Program:</label>
                   <select id="sponsorProgram" class="modelDialog form-control" v-model="newModel.sponsorProgram">
                     <option disabled  value="">Please select one</option>
                      <option>XFI-VTAP</option>
                      <option>SMB-VTAP</option>
                      <option>XFI-VMAP</option>
                      <option>UBS-VTAP</option>
                      <option>UBS-VMAP</option>
                   </select>
                </div>
                <br>
                <div class="row">
                   <div class="radio">
                      <label><input id="byManager" class="byRadio" type="radio" name="optradio" :value="false" v-model="selected">By Manager:</label>
                   </div>
                </div>
                <div class="row">
                   <small>Manager:</small>
                   <select id="" class="modelDialog form-control"  v-model="newModel.manager">
                      <option disabled  value="">Please select one</option>
                      <option value="">XFI-VTAP</option>
                      <option value="">SMB-VTAP</option>
                   </select>
                </div>
                <br>
                <div class="row">
                   <div class="radio">
                      <label><input id="byRepCode" class="byRadio" type="radio" name="optradio" :value="true" v-model="selected">By Rep-Code:</label>
                   </div>
                </div>
                <div class="row">
                   <small>Rep-Code:</small>
                   <input class="modelDialog form-control"  v-model="newModel.repCode">
                </div>
              </div>

            </div>
            <ModelFooter :createModel="createNewModel"/>
         </div>
      </div>
   </span>
</template>

<script>
import ModelFooter from './ModelFooter';
import db from '../ModelDatabase';
let modelsRef = db.ref("models");

  export default {
    name: 'ModelCreateDialog',
    data () {
      return {
        newModel: {
            modelName: '',
            modelDescription: '',
            modelType: '',
            sponsorProgram: '',
            manager: '',
            repCode: ''
        },
        selected: false
      }
    },
    components: {
      ModelFooter
    },
    methods: {
      createNewModel: function () {
        modelsRef.push(this.newModel);
        this.newModel.modelName = '';
        this.newModel.modelDescription = '';
        this.newModel.modelType = '';
        this.newModel.sponsorProgram = '';
        this.newModel.manager = '';
        this.newModel.repCode = '';
      }
    }
  }
</script>

<style>
.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255,255,255,0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 20%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}

.popup label, .popup small {
     font-weight: bold;
     display: block;
     margin-bottom: 0px;
}
 .popup small{
     margin-top:2px;
}
 .dialogContainer {
     padding: 20px;
}
 .modelDialog {
     width: 100%;
}

.byRadio {
  margin-right: 4px;
}
</style>
