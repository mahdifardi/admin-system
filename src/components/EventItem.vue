 <template>
   <div class="col-md-4">
     <div class="event-card">
       <h4 class="card-title">{{event.title}}</h4>
       <p class="card-text">{{event.description}}</p>
       <ul class="list-group list-group-flash">
         <li class="list-group">Date: {{event.date}}</li>
         <li class="list-group">Location: {{event.location}}</li>
         <li class="list-group">Host: {{event.email}}</li>
       </ul>
     </div>
   </div>
 </template>
<script>
export default {
  props:['event']
}
</script>
