<template>
    <v-col>
    <ul>
            <li> <a href="#"> SOBRE O RSP</a></li>
            <li> <a href="#" > ÁREA DO PROFISSIONAL </a></li>
            <li> <router-link to= '/login'> LOGIN</router-link></li>
            <li>  <a href="#">DOWNLOAD</a></li>
    </ul>
    
    <h1>Faça a validação do seu email </h1>
    
    <h2>Foi enviado um e-mail de confirmação para o e-mail cadastrado.<br> 
    Confirme a validação preenchendo o código informado no e-mail.</h2>
    <h3>código de validação:______________</h3>
    
    <div class="but">
        <v-btn
          rounded
          color="primary"
          dark
        >
          Cadastra
        </v-btn>
    </div>
    </v-col>
   

   
</template>

<script>


export default ({


})
    
    
</script>

<style scoped>
h1{
    font-family: 'absolute';
    font-size: 40px;
    margin-left: 500px;
    margin-top: 200px;
    color:#048243;
}

h2{
    font-size:16px;
     margin-left: 520px;
     font-family: 'Montserrat';
}



</style>