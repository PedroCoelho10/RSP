<template>
   
  <v-row>
    
    
    <v-col class="colunas"
          cols="12"
            sm="10"
            md="5"
          >
            
      
        <div class="but">
                <v-btn rounded dark>
                    <router-link class="npm" to="/HOMEPAGE"> HOME</router-link> 
                </v-btn>
            </div>
          
        
        
        <h1> CADASTRE-SE</h1>
       
        <v-text-field class="txt"
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
          placeholder="Confirmação de senha"
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
          CADASTRAR
        </v-btn>
      
      
      </div>
      
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
  margin-top: 50px;
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

.txt{
  margin-top: 30px;
}

.npm{
  color: white
}

.but{
  margin-right:  100px;
}
</style>