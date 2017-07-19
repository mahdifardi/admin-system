<template>
  <div class="form-inline">
  <h3>sign up</h3>
  <div class="form-group">
    <input type="text" placeholder="email" class="form-control" v-model="email">
    <input type="password" placeholder="passsword" class="form-control" v-model="password">
    <button class="btn btn-primary" @click="signUp">Sign Up</button>
  </div>
  <br>
  <p>{{error.message}}</p>
  <br>
  <router-link to="/signin">Already a Uesr? Sign in</router-link>
  </div>
</template>
<script>
import {firebaseApp} from '../firebaseApp'

  export default{
    data(){
      return{
        email:'',
        password:'',
        error:{
           message:''
        }
      }
    },
    methods:{
      signUp(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
        .catch(error => {
          this.error = error
        })
      }
    }

  }
</script>
