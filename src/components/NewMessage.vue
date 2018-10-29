<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessages.message">
      <button class="btn teal">Enter Chat</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

import app from '../db/db'  

let db = app.database();
let userRef = db.ref('users')

export default {
  name: 'NewMessage',
  firebase: {
    users: userRef
  },
  data() {
    return {
      newMessages: { 
        name: 'Carlos',
        message: ''
      }
    }
  },
  methods: {
    addMessage () {
      userRef.push(this.newMessages)
      this.newMessages.message = ''
    }
  }
}
</script>

<style>
  
</style>

