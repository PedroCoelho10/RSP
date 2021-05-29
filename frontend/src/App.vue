<template>
    <v-main>
      <router-view></router-view>
    </v-main>
  
</template>

<script>
import axios from 'axios'


export default ({
  name: 'App',
  
  data(){
    return{
      const:  null,
      
    }
  },
   mounted() {
    axios
      .get('http://localhost:8080/')
      .then(response => (this.const = response))
  }
  
  
  })
  
</script>
