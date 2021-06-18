<template>
  <div> 
    <v-row>
      <v-col>
        <div class= "cabeça"> <h1>Seja Bem-Vindo!</h1> </div>
      </v-col>
    </v-row>
      
    <v-row>
      <v-col col="12" md="3" class=" img">
        <img src="../assets/Perfil.png" >
        <h4>Adicione uma imagem aqui</h4>
      </v-col>
      
      <v-col col="12" md="40">
          <v-col class="continue">
            <h2>CONTINUE<br><p>Logo terá acesso ao nosso sistema</p></h2>
          </v-col>
          
          <v-row class="txt" >
            <v-col cols="12"  md= "3">
              <h4>...</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "2" >
               <h4>CNPJ</h4>
                <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "4" >
                <h4>Razão Social</h4>
                <v-text-field filled rounded dense></v-text-field>
            </v-col>
          </v-row>
      
          <v-row>
            <v-col cols="12"  md= "3" >
              <h4>....</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "2" >
              <h4>...</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "2" >
              <h4>Contato</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "3" >
              <h4>Data de Nascimento</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12"  md= "4" >
              <h4>Especialidade</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="12"  md= "4" >
              <h4>Hospital ou Clínica</h4>
              <v-text-field filled rounded dense></v-text-field>
            </v-col>
          </v-row> 
      </v-col>
    </v-row>

    <div class="but">
        <v-btn rounded color=#4CAF50>  <router-link class="link" to="/FimCadastro"> Conculir Cadastro </router-link> </v-btn> 
    </div>
  </div>
</template>

<script>
  

</script>

<style scoped>
.cabeça{
 background-color: black;
 width: 1600px;
 height: 80px;
}

h1{
    color: white;
    font-size: 16px
}

.but{
  margin-left: 250px;
  font-size:15px;
  
}

h2{
  font-size: 15px;
  color:green
  
}

.but{
  margin-left: 1200px;
}

.link{
  list-style-type: none;
    text-decoration: none;
    color:white
}

.txt{
  margin-top: 150px;
}

p{
  color: black;
}

</style>

