<template>
   <div class="chat container">
    <h2 class="text-center">A group chat</h2>
    <div class="col-md-10 mx-auto">
    <div class="card">
      <div class="card-content">
         <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id" id="message" :class="{ send: name  == message.name }">
         <span class="text"><span class="name">{{ message.name }}:</span>
            <span class="content">{{ message.content }}</span></span>
            <small class="time">{{ message.timestamp }}</small>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <newmessage :name="name" />
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import newmessage from "./newmessage"
import db from '../firebase/init'
import moment from 'moment'
export default {
    props:["name"],
    components:{
    newmessage
    },
    data(){
    return{
    messages: []
    }
    }, 
    created(){
    let ref = db.collection('messages').orderBy('timestamp')
    
    // subscribe to changes to the 'messages' collection
    ref.onSnapshot(snapshot => {
     snapshot.docChanges().forEach(change => {
      console.log(change)
      if(change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
};
</script>
<style scoped>
ul{
	list-style: none;
}
.chat h2{
    color:#fb7b6b;
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .messages{
    max-height: 500px;
    overflow:auto;
  }
li#message{ 
   margin: 10px 0;
   width: 100%;
   text-align: left;
   border-radius: 5px;
    padding: 6px;
   display: inline-block;
    }
    li#message .text{
      background-color:  #72c0b7;
      padding: 12px;
      border-radius: 20px;
    }
    li#message .text .name{
      color:#665452;
      font-size: 1.2rem;
    }
    li#message .text .content{
      color: #777;
      font-size: 1.1rem;
    }
    small.time{
      color:#777;
     font-size: .9rem !important;
     margin-top:4px;
     display: block;
    }
    .send{
      text-align: right !important;
    }
    .send .text {
    background: #ccc !important;
    }
</style>