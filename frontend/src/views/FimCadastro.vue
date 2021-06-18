<template>
    <div>
        <v-row class="botoes">
            <div class="but">
                <v-btn rounded color=#FFFFFF>
                    <router-link class="link" to="/CadastroP"> Home </router-link>
                </v-btn>
            </div>

            <div class="but">
                <v-btn rounded color= #FFFFFF>
                    <router-link class="link" to="/login"> Login </router-link>
                </v-btn>
            </div>
        </v-row> 
        
        <h1>Cadastro efetuado com sucesso!</h1>
        <div class="fundo"><h2>Cuide-se</h2></div>
    </div>
</template>

<script>

</script>

<style scoped>
.but{
    padding: 10px;
    margin-top: 50px;
    margin-left: 50px;
} 

.botoes{
    margin-left: 1000px;
}

.link{
     list-style-type: none;
    text-decoration: none;
}

.fundo{
    background-color: #FBBEBE;
    padding: 200px;
}

h2{
    margin-left: 850px;
    
    font-size: 64px;
    color:#5f4949;

}

h1{
    font-size: 20px;
}

.img{
     width: 800px;
     margin-bottom: 500px;
}
</style>
