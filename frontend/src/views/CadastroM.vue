

<template>
  
  <div>
    <v-row>
      <v-col class="colunas" cols="12" sm="10" md="5">
          
          <img  class="img" src="../assets/CadastroMedico.png" > 
          <h1> CADASTRE-SE</h1>
          
          
          <form action="">
              {{consulta.DataConsulta}}
              <v-text-field class="txt" 
                placeholder="Nome Completo"
                filled 
                rounded 
                dense
                input  type="text" name="nome"  >
              >

              </v-text-field >
              
            <tr v-for="Prof of profissionais " :key = "Prof.id">
                <td>
                  {{Prof.nome}}
                  {{Prof.Cpf}}
                </td>
            </tr>
              
              
              
              <v-text-field  class="txt" 
                placeholder="Código do profissional" 
                filled 
                rounded 
                dense>
                <input type="text" name="codigo" >
              </v-text-field>
              
              <v-text-field class="txt" 
              placeholder="E-mail" 
              filled 
              rounded 
              dense>
              <input type="text" name="Email"  >
              </v-text-field>
              
              <v-text-field class="txt" 
              placeholder="Senha" 
              filled 
              rounded 
              dense
              input type="password" name="senha" 
              >
              
              </v-text-field>
              
              <v-text-field class="txt" 
              placeholder="Confirmação de senha" 
              filled 
              rounded 
              dense
              input type="password" name="confirmaSenha"
              >
              
              </v-text-field>
          </form>
          <div class="but">
            <v-btn rounded  dark>
              <router-link class="link" to="/ContCadastroM"> CONTINUAR CADASTRO </router-link>
            </v-btn>
          </div>
          <img src="../assets/FundoMedico.png"> 
        
      </v-col>
      <v-col>
          <div class="esquerdo">
            <h2>Bem Vindos ao RSP</h2>
            <h3>Já tem uma conta?<router-link class="link" to= '/login'> Clique Aqui!</router-link></h3>
          </div> 
      </v-col>
    </v-row> 
  </div> 
</template>

<script>
import Profissionais from '../services/api'


export default{
  
  data(){
    return{
      profissionais: [],
      
      consulta:{
        DataConsulta:'',
        PacienteId: '',
        ProfissionalId:'',
      }
    }
  },
  
  mounted(){
    Profissionais.listar().then(resposta => {
      console.log(resposta.data)
      this.profissionais = resposta.data
    })
  }
}

</script>


<style scoped>


h2{
  font-size:36px;
  font-family: Poppins;
  color:#FEFEFE;  
  text-align: center;
}
.colunas{
  
  margin-left: 100px;
  margin-right: 100px;
  }

h1{
  margin-left: 250px;
  font-size: 24px;
  color: #706B6B;
  font-family: Poppins;
  
}

.but{
  margin-left: 250px;
  font-size:15px;
}
.esquerdo{
   background-color:#CDBEBE;
   padding: 380px 50px 380px 50px
}

h3{
  color:black;
  margin-left: 200px;
  font-family: 'Poppins';
  font-size: 12px;
}
.txt{
margin-top: 15px;
 }

 .link{
    list-style-type: none;
    text-decoration: none;
    color:white
 }
img{
  margin-left: 500px;
}


</style>
