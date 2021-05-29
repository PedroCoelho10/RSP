<template>
   
  <v-row>
    <v-col class="colunas"
          cols="12"
            sm="10"
            md="5"
          >
            
      
        <ul>
            <li> <a href="#"> SOBRE O RSP</a></li>
            <li> <a href="#" > ÁREA DO PROFISSIONAL </a></li>
            <li> <a href="#"> HELP</a></li>
            <li>  <a href="#">DOWNLOAD</a></li>
        </ul>
        
        <h1> CADASTRE-SE</h1>
       
        <v-text-field
          placeholder="Nome Completo"
          filled
          rounded
          dense
        ></v-text-field>
            
        <v-text-field
          placeholder="CPF"
          filled
          rounded
          dense
        ></v-text-field>

        <v-text-field
          placeholder="E-mail"
          filled
          rounded
          dense
        ></v-text-field>
              
        <v-text-field
          placeholder="Senha"
          filled
          rounded
          dense
        ></v-text-field>
              
        <v-text-field
          placeholder="Confirmação da senha"
          filled
          rounded
          dense
        ></v-text-field>
          
         
      <div class="but">
        <v-btn
          rounded
          color="primary"
          dark
        >
          Cadastra
        </v-btn>
      
      
      </div>
      <router-link to="/CadastroM"> Profissional </router-link>
    </v-col>
    
    <v-col>
        <div class="esquerdo">
          <h2>Bem Vindos ao RSP</h2>
          <h3><p>Ja tem uma conta?<a href="#">Acesse aqui!</a></p></h3>
        </div> 
    </v-col>
 
  </v-row>

</template>

<script>
  export default {
    
  }
</script>

<style scoped>


ul {
  list-style-type: none;
  padding: 30px;
}
li {
  font-size:16px;
  display: inline-block;
  margin-left: 10px;
  font-family:'Montserrat';
  
}
a {
  color:black;
  text-decoration: none;
  margin-right: 20px;
}

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
   padding: 300px 50px 300px 50px
}

h3{
  color:black;
  margin-left: 200px;
  font-family: 'Poppins';
  font-size: 12px;
}

</style>