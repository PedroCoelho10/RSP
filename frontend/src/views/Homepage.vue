<template>

      <!--Menu barra-->
      <v-app id="inspire">
        <v-app-bar
          app
          color="white"
          flat
        >
          <v-container class="py-0 fill-height">
            <v-btn
              v-for="link in links"
              :key="link"
              text
            >
              {{ link }}
            </v-btn>

            <v-spacer></v-spacer>
          </v-container>
  
          <!--Botão Baixar APlicativo--> 
          <div class="botao">
            <v-btn
              rounded
              dark 
              color="light"
               
              >
              <router-link to="/Sobre"> Baixar Aplicativo </router-link>
            </v-btn>
          </div>
            
      </v-app-bar>

      <!-- Frase Home Page -->
      <div class="parte-um">
        <h1> Uma informação </h1>
      </div>
      
      <div class="parte-dois">
        <h1> pode custar sua vida. </h1>
      </div>

      <!--Imagem-->
      <div class="image-principal">
        <v-col class="img">
          <img src="../assets/Homepage.png"
          width="800"
          height="800"
          >
          
        </v-col>
      </div>

      <!-- Rodapé Email -->
      <div class="contato">
        <p align=left><b> Contato: sac@rsp.com.br </b></p>
      </div>

  </v-app>

</template>

<script>

</script>

<style>

.botao{
  margin-left: 250px;
  font-size: 15px;
  
}

.parte-um{
  font-size:50px;
  margin-left: 150px;
  margin-top: 200px;
  font-family:Lato;
 
  color:gray;
}

.parte-dois{
  font-size:50px;
  margin-left: 150px;
  margin-top: 0px;
  font-family:Lato;
  color: #D99293;
}

.image-principal{
  position: fixed;
  margin-top: 200px;
  margin-left: 1200px;
}

.contato{
  margin-left: 80px;
  margin-top: 500px;
  color: black;
}

</style>