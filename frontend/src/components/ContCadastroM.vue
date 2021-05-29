<template>
      <v-row>
          <v-col>
              <div class= "cabeça"> <h1>Seja Bem-Vinda Ingrid Stark!</h1> </div>
          </v-col>
    
        <v-col cols="12"  md= "2">
              <h4>Cod Profissional</h4>
              <v-text-field
                filled
                rounded
                dense
              ></v-text-field>
        </v-col>
          <v-col cols="12"  md= "2" >
          <h4>CPF</h4>
          <v-text-field
          
            filled
            rounded
            dense
          ></v-text-field>
      </v-col>
      
      <v-col cols="12"  md= "2" >
          <h4>CNPJ</h4>
          <v-text-field
          
            filled
            rounded
            dense
            ></v-text-field>
      </v-col>
      
      <v-col cols="12"  md= "4" >
          <h4>Razão Social</h4>
          <v-text-field
            filled
            rounded
            dense
            ></v-text-field>
      </v-col>

    
    
      
        <v-col cols="12"  md= "3" >
          <h4>Email</h4>
          <v-text-field
            filled
            rounded
            dense
          ></v-text-field>
      </v-col>
      
      <v-col cols="12"  md= "2" >
        <h4>Senha</h4>
        <v-text-field
            filled
            rounded
            dense
        ></v-text-field>
      </v-col>

      <v-col cols="12"  md= "2" >
        <h4>Contato</h4>
        <v-text-field
            filled
            rounded
            dense
        ></v-text-field>
      </v-col>

      <v-col cols="12"  md= "3" >
        <h4>Data de Naciemnto</h4>
        <v-text-field
            filled
            rounded
            dense
        ></v-text-field>
      </v-col>

      <v-col cols="12"  md= "4" >
        <h4>Especialidade</h4>
        <v-text-field
            filled
            rounded
            dense
        ></v-text-field>
      </v-col>

      <v-col cols="12"  md= "4" >
        <h4>hospital ou Clinica</h4>
        <v-text-field
            filled
            rounded
            dense
        ></v-text-field>
      </v-col>
     
     <div class="but">
        <v-btn
          rounded
          color="primary"
          dark
        >
        <router-link to="/CadastroP"> Continua </router-link>
        
        </v-btn>
      </div>
    
    
    
    
    </v-row>
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
</style>

