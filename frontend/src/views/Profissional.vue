<template>
     <div>
        <v-row>
            <v-col>
                <div class= "cabeça"> <h1>Dr.Gabriel Prado <router-link class="logout" to='/login'>Sair </router-link></h1></div>
            </v-col>
        </v-row>
           
        <v-row class="segunda">
                <h2> Em tempos de pandemia não esqueça de se cuidar também! </h2> 
        </v-row>   
        
        <v-row>    
            <v-col col="6" md="2">
                <img class="medico" src="../assets/Medico.png" >
                    
                    <div class="buttwo">
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            >
                            Meu Perfil
                        </v-btn>
                    </div>
                    
                    
                    
                    <div class="butum">
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            >
                            Gerenciar consultas
                        </v-btn>

                    </div>
                    
            </v-col>
            <v-col col= "6" md="40">
                <div class="pacientes" > 
                    <v-row> 
                        <div class="primeiro">  
                            <img class="img" src="../assets/Sabrina.png" >
                            <h3>Sabrina Coelho</h3>
                            <h4>Retorno da consulta<br>Dia: 12/07/2021<br>Horario: 16:00</h4>
                        </div>  

                        <div class="primeiro">  
                            <img  class="img" src="../assets/Leandro.png" >
                            <h3>Leandro Coelho</h3>
                            <h4>Retorno da consulta<br>Dia: 12/07/2021<br>Horario: 16:30</h4>
                        </div>

                        <div class="primeiro" > 
                            <img class="img" src="../assets/Augusto.png" >
                            <h3>Augusto Coelho</h3>
                            <h4>Retorno da consulta<br>Dia: 12/07/2021<br>Horario: 17:00</h4>
                        </div>
                    </v-row>
                </div>
            </v-col> 
        </v-row>  
        <div class="txt"><h5>Quem salva vidas, salva o mundo inteiro</h5></div> 
    </div>




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
    font-size: 30px;
    margin-top:30px
}

.segunda{
 background-color: yellow;
width: 1550px;
height: 29px;
margin-top: -12px;
}

h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500px;
    font-size: 14px;
    line-height: 141.4%;
    margin-left: 30px;
}

.consultas{

background-color:black;

}

.butum{
    
    margin-top:50px;
}

.buttwo{
    
    margin-top: 50px;
}

.pacientes{
    background-color:#E6E6E6 ;
    margin-top:50px;
    padding: 30px;
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 50px;
    

}

.primeiro{
    background-color: white;
    margin: 0 auto;
    font-family: 'Open Sans', ;
    border-radius: 10px;
    font-size: 13px;
    padding: 20px
    
}

h4{
    margin-top: 20px;
}

.img{
    margin-left: 25px;
    border-radius: 200px;
    width: 100px;
    
}

.medico{
    width: 200px;
    border-radius: 300px;
}

.txt{
    margin-top: 50px;
    margin-left: 800px;
    font-size: 30px;
   
}

.logout{
    list-style-type: none;
    text-decoration: none;
    margin-left:900px ;
    font-size:25px;
    color: white;
    margin-top: 200px;
}
</style>