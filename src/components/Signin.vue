

<template>
  <div class="form-inline backin">
  <h2>ورود به سیستم</h2><br><br><br>
  <div class="form-group">
    <input type="text" placeholder="ایمیل" class="form-control" v-model="email"><br><br>
    <input type="password" placeholder="رمزعبور" class="form-control" v-model="password"><br><br>
    <button class="btn btn-primary" @click="signIn">ورود</button>
  </div>
  <br>
  <p>{{error.message}}</p>
  <br>
  <router-link to="/signUp">Already a user ? Sign up</router-link>

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
      signIn(){
        firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
        .catch(error => {
          this.error = error
        } )
      }
    }

  }
</script>
