<template>
     <v-row>
        <v-col>
            <div class= "cabeça"> <h1>Dr.Gabriel Prado <router-link to='/login'>Sair </router-link></h1></div>
        </v-col>
        <v-col class="segunda">
            <h2> Em tempos de pandemia não esqueça de se cuidar também! </h2> 
        
         <img src="../assets/Perfil.png" >
        
        <v-col>
            <div class="but">
            <v-btn
            rounded
            color="primary"
            dark
            >
            
            Meu Perfil
            </v-btn>
            </div>
        </v-col>

        
            
        <v-col cols="12" md=" 6">
            <div class="but">
            <v-btn
            rounded
            color="primary"
            dark
            >
            Gerenciar consultas
            </v-btn>
            </div>
        </v-col> 
   
        <v-col class="Consultas" cols="12" md=" 3"> <h3>usdgdudsasd</h3> </v-col>
         </v-col>
</v-row>

    
</template>

<script>

</script>

<style scoped>
.cabeça{
 background-color: black;
 width: 1600px;
 height: 80px;
 display: inline-block;
}

h1{
    color: white;
    font-size: 16px
}

.segunda{
 background-color: yellow;
width: 1250px;
height: 29px;
margin-top: -12px;
}

h2{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 141.4%;
}

.consultas{

background-color:black;

}

</style>