<template>
	<div> <div class="new-message">
      <input type="text" name="new-message" v-model="newmessage" placeholder="enter your message" @keydown.enter.prevent="addmessage"
       class="form-control">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
  </div></div>
</template>
<script>
import db from '../firebase/init'
export default {
  name: 'newmessage',
  props: ['name'],
  data(){
    return{
      newmessage: null,
      feedback: null
    }
  },
  methods: {
    addmessage(){
      if(this.newmessage){
        db.collection('messages').add({
          content: this.newmessage,
          name: this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.newmessage = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a message in order to send one'
      }
    }
  }
};
</script>