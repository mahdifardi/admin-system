<template >
  <div>
    <h4>Add an event</h4>
    <div class="form">
        <div class="form-group">
            <label >Titlel</label>
            <input type="text" class="form-control" v-model="event.title">
        </div>
        <div class="form-group">
            <label >description</label>
            <input type="text" class="form-control" v-model="event.description">
        </div>
        <div class="form-group">
            <label >Date</label>
            <input type="date" class="form-control" v-model="event.date">
        </div>
        <div class="form-group">
            <label >Locatio</label>
            <input type="text" class="form-control" v-model="event.location">
        </div>
        <button type="button" class="btn-sm btn-primary" @click="addEvent">submit</button>
    </div>
  </div>
</template>

<script>
import {eventsRef} from '../firebaseApp'
  export default{
    data(){
      return{
        event:{
          title:'',
          description:'',
          date:'',
          location:'',
          email:''
        }
      }
    },
    methods:{
      addEvent(){
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event)
      }
    }
  }
</script>
