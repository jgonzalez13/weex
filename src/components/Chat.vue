<template>
  <div class="chat">
    <h2 class="teal-text">Chat</h2>
    <div class="card">
      <div class="card-content" >
        <ul class="messages" v-for="u in users" :key="u.id">
          <li >
            <span class="teal-text">{{u.name}}</span>
            <span class="grey-text text-darken-3">{{ u.message }}</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

import Firebase from 'firebase'

import app from '../db/db'  

let db = app.database();
let userRef = db.ref('users')

export default {
  name: 'Chat',
  firebase: {
    users: userRef
  },
  components: {
    NewMessage
  },
  data () {
    return {
      
    }
  }
}

</script>

<style>
.chat {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  border: 0;
}
.chat h2 {
  font-size: 2.6e;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat time{
  display: block;
  font-size: 1.2em
}
</style>
