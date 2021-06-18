<template>
    <body class="back">
    <div class="manga">
        
        <div class="but">
                <v-btn rounded dark>
                    <router-link class="link" to="/InicioPaciente"> Voltar </router-link>
                </v-btn>
        </div>
       
        <h1>Meus Medicamentos</h1>
        
        <v-col>
            <div class="fundo">
                <h2>Diane 35, por 6 meses. Início: 01/01/2021 - Término: 01/07/2021</h2>
            </div>

            <div class="segundo">
                <h2>Diane 35, por 6 meses. Início: 01/01/2021 - Término: 01/07/2021</h2>
            </div>
        </v-col>
    
    </div>
</body>
    
</template>

<script>

</script>

<style scoped>
.fundo{
    background-color: #C4C4C4;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;

}

h2{
    margin-left: 30px;
    font-size: 20px;
}

.segundo{
    background-color: #C4C4C4;
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;
    margin-bottom: 400px;
}

h1{
    margin-top:80px;
    margin-left: 40px;
}

.but{
    margin-top: 20px;
    margin-left: 30px;
} 

.link{
    list-style-type: none;
    text-decoration: none;
    color:white
}
.img{
    width: 500px;
    margin-left: 100px;
}
body{
    background-image: url('../assets/Gerencia.png');
    background-size: cover;
}


</style>