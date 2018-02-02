<template>
   <span>
      <a class="btn btn-success" href="#createModel">Create</a>
      <div id="createModel" class="overlay">
         <div class="popup">
            <div class="container dialogContainer content">
               <div class="row">
                  <label>Model Display Name:</label>
                  <input class="modelDialog" v-model="message">
               </div>
               <br>
               <div class="row">
                  <label>Model Description:</label>
                  <textarea class="modelDialog"></textarea>
               </div>
               <br>
               <div class="row">
                  <label>Model Type:</label>
                  <select name="" id="" class="modelDialog" >
                     <option value="">Asset Allocation</option>
                     <option value="">Standard</option>
                     <option value="">Security Only</option>
                     <option value="">Flexible</option>
                     <option value="">Template-based</option>
                  </select>
               </div>
               <br>
               <div class="row">
                  <label>Sponsor Program:</label>
                  <select name="" id="" class="modelDialog" >
                     <option value="">XFI-VTAP</option>
                     <option value="">SMB-VTAP</option>
                     <option value="">XFI-VMAP</option>
                     <option value="">UBS-VTAP</option>
                     <option value="">UBS-VMAP</option>
                  </select>
               </div>
               <br>
               <div class="row">
                  <div class="radio">
                     <label><input class="byRadio" type="radio" name="optradio">By Manager:</label>
                  </div>
               </div>
               <div class="row">
                  <small>Manager:</small>
                  <select name="" id="" class="modelDialog" >
                     <option value="">XFI-VTAP</option>
                     <option value="">SMB-VTAP</option>
                  </select>
               </div>
               <br>
               <div class="row">
                  <div class="radio">
                     <label><input class="byRadio" type="radio" name="optradio">By Rep-Code:</label>
                  </div>
               </div>
               <div class="row">
                  <small>Rep-Code:</small>
                  <input class="modelDialog" v-model="message">
               </div>
            </div>
            <ModelFooter/>
         </div>
      </div>
   </span>
</template>

<script>
import ModelFooter from './ModelFooter';

  export default {
    name: 'ModelCreateDialog',
    data () {
      return {

      }
    },
    components: {
      ModelFooter
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
