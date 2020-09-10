<template>
  <div class="welcome container">
    <div class="row">
    <div class="col-md-8 mx-auto">
    <div class="card">
      <div class="card-body">
        <h2 class="text-center">Welcome</h2>
        <form @submit.prevent="enterChat">
          <div class="form-group row col-md-12">
          <label for="name float-left">Enter your name:</label>
          <input type="text" name="name" v-model="name" class="form-control" 
          placeholder="please enter your name">
          <div class="alert alert-danger col-md-12 mt-3" v-if="feedback">{{feedback}}</div>
          </div>
          <button class="btn btn-primary col-md-4">Enter Chat</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data(){
    return{
     name:null,
     feedback:null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
       this.$router.push({name:'chat',params:{name:this.name}});
      }else{
       this.feedback = "please enter your name";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome{
    max-height: 1000px;
  }
  h2{
    color:#fb7b6b;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  label{
    color:#fb7b6b;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .btn{
     background-color: #74d3d0;
     font-weight: bold;
     border: none;
     font-size: 1rem;
     color: #363062;
     border-radius: 20px;
     margin-bottom: 30px;
     margin-top:10px;
  }
  .btn:hover{
     background-color: #74d3d0;
     font-weight: bold;
     border: none;
     font-size: 1rem;
     color: #363062;
     border-radius: 20px;
     margin-bottom: 30px;
     margin-top:10px;
  }
</style>
