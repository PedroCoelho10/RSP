<template>
    <div>
        <v-row>
                <v-col>
                    <div class= "cabeça"> <h1>Ingrid Stark da Silva<router-link class="logout" to='/login'>Sair </router-link></h1></div>
                </v-col>
            </v-row>
            
            <v-row class="segunda">
                    <h2> Mãos lavadas salvam vidas - lave sua mão! </h2> 
            </v-row>   
            
        <v-row>    
            <v-col col="12" md="3">
                <img class="img" src="../assets/Paciente.png">
                
                <div class="but">
                    <v-btn rounded dark>
                        <router-link class="link" to="/CadastroP"> Meu Perfil </router-link>
                    </v-btn>
                </div>
                
                <div class="but">
                    <v-btn rounded dark>
                        <router-link class="link" to="/CadastroP"> Medicamentos </router-link>
                    </v-btn>
                </div>
                
                <div class="but">
                    <v-btn rounded dark>
                        <router-link class="link" to="/CadastroP"> Receitas Médicas </router-link>
                    </v-btn>
                </div>
                
                <div class="but">
                    <v-btn rounded dark>
                        <router-link class="link" to="/CadastroP"> Exames</router-link>
                    </v-btn>
                </div>
            </v-col>
            
            
            <v-col >
                <h3>Registro Médico de Ingrid Stark da Silva!</h3>
                <div class="pacientes" > 
                    <v-row> 
                        <div class="primeiro">  
                            <h3>Cardiologista</h3>
                            <h4>Dr. Gabriel Prado<br>01/07/2021<br>16:30</h4>
                        </div>  

                        <div class="primeiro">  
                            <h3>Ginecologista</h3>
                            <h4>Dra. Ana Thays <br>15/07/2021 <br>18:45</h4>
                        </div>

                        <div class="primeiro" > 
                            <h3>Dentista</h3>
                            <h4>Dra. Rayane Carolina <br> 20/07/2021 <br>18:45</h4>
                        </div>

                         <div class="primeiro" > 
                            <h3>Clínico Geral</h3>
                            <h4>Dr. Marcus Vinícius<br> 20/08/2021<br> 17:45</h4>
                        </div>
                    </v-row>
                </div>
                <v-row>
                    <div>
                        <h6>Dicas de Saúde:</h6>
                        <h5>Mantenha uma alimentação saudável e equilibrada.<br> 
                            Pratique exercícios físicos regularmente.<br> 
                            Consulte um médico regularmente.<br> 
                            Não esqueça do protetor solar.<br> 
                            Faça do sono uma de suas prioridades.<br> 
                            Beba água frequentemente.<br> 
                            Elimine de vez o cigarro.
                        </h5>
                    </div>
                    <img class="esquerda" src="../assets/FundoPaciente.png" >
                </v-row>
            </v-col>    
        </v-row>
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
.segunda{
 background-color: yellow;
width: 1550px;
height: 29px;
margin-top: -12px;
}

h1{
    color: white;
    font-size: 30px;
    margin-top:30px
}

h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500px;
    font-size: 20px;
    
    margin-left: 600px;
}

.logout{
    list-style-type: none;
    text-decoration: none;
    margin-left:900px ;
    font-size:25px;
    color: white;
    margin-top: 200px;
}

.img{
    width: 250px;
    border-radius: 400px;
    margin-top: 30px;
}

.link{
    list-style-type: none;
    text-decoration: none;
    color: white
    
}

.but{
    margin-top: 30px;
    margin-left: 30px;
}

.pacientes{
    background-color:#E6E6E6 ;
    margin-top:50px;
    padding: 30px;
}

.primeiro{
    background-color: white;
    margin: 0 auto;
    font-family: 'Open Sans', ;
    border-radius: 10px;
    font-size: 13px;
    padding: 20px;
    margin-left: 30px;
    
    
}

h6{
    color:#ED2674;
    margin-top: 30px;
    font-size: 25px;
}
h5{
    margin-top:20px;
    font-size: 15px;
}

.esquerda{
    width: 500px;
    margin-top: 30px;
    margin-left: 100px;
}
</style>
