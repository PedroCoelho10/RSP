<template>
    
    <div id="fundo">
        
        
        <h1>Gerenciar Consulta</h1>
       <tr v-for="Consulta of consultas"  :key="Consulta.id">
                <td>
                    {{Consulta.nomePaciente}}
                </td>
                <td> 
                    {{Consulta.paciente}}
                </td>
                <td>
                    {{Consulta.dataConsulta}}
                </td>
            </tr>
       
       
        <div>
            <form @submit.prevent="salvar">
            
            <v-row>
                
                <v-text-field class="txt" 
                placeholder="Nome Completo"
                filled 
                rounded 
                dense
                input type="text" v-model="postConsulta.DataConsulta"
                 >

              </v-text-field >
                   
              <v-text-field class="txt" 
                placeholder="Nome Completo"
                filled 
                rounded 
                dense
                input type="text" v-model="postConsulta.PacienteId" 
              >

              </v-text-field >
                
              <v-text-field class="txt" 
                placeholder="Nome Completo"
                filled 
                rounded 
                dense
                input type="text" v-model="postConsulta.ProfissionalId"  
              >
            </v-text-field >
               
            </v-row>
            <div class="but">
            <v-btn rounded  dark>
              salvar
            </v-btn>
          </div>
            </form>

           
        </div>
         
    </div>
    
   
</template>

<script>
import Consultas from '../services/api'

export default{
    data(){
        return{
        consultas:[],
        
        postConsulta:{
        DataConsulta:'',
        PacienteId: '',
        ProfissionalId:'',
      }
    }
  },

  methods:{
      salvar(){
          alert(this.consulta.ProfissiId)
      }
  },

  mounted(){
      Consultas.listarConsultas().then(resposta => {
          console.log(resposta.data)
          this.Consultas = resposta.data
      })
  }




}

</script>

<style lang = "scss" scoped>

h1{
    font-size: 50px;
}

</style>