<template>
    <v-row>
        <v-col class="colunas"
          cols="12"
            sm="10"
            md="5">
            <ul>
                <li> <a href="#"> HOME</a></li>
                <li> <a href="#" > SOBRE O RSP </a></li>
                <li> <router-link to= '/CadastroM'> CADASTRO</router-link></li>
                <li>  <a href="#">LOGIN</a></li>
            </ul>

            <h1>Login</h1>
            
            <h2> Código do Profissional</h2>
            <v-text-field 
                placeholder="Faça login com seu código profissional"
                filled
                rounded
                dense
                ></v-text-field>
            
            <h2> Senha</h2>
            <v-text-field
                placeholder="Digite sua senha"
                filled
                rounded
                dense
                ></v-text-field>
            <h5>Esqueceu a sua senha?</h5>

        <div class="but">
        <v-btn
          rounded
          color="primary"
          dark
        >
          Entrar
        </v-btn>
        </div>
        <h4>Primeiro acesso?</h4>
        
        </v-col>
        
        
        <v-col>
            <div class= esquerdo>
            <h6>Bem Vindos ao RSP</h6>
          <h3><p>Ja tem uma conta?<router-link to='/cadastroP'>Acesse aqui!</router-link></p></h3>

            </div>
        </v-col>
    </v-row>
</template>

<script>
export default{

}
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

h1{
    margin-left: 250px;
  font-size: 24px;
  color: #706B6B;
  font-family: 'Poppins';
}

.colunas{
  
  margin-left: 100px;
  margin-right: 100px;
  }

.esquerdo{
   background-color:#CDBEBE;
   padding: 300px 50px 300px 50px
}

h2{
    font-size: 12px;
    font-family: 'Montserrat';
}

.but{
  margin-left: 250px;
  font-size:15px;
}

h5{
    font-size: 11px;
    font-family: 'Montserrat';
    margin-left:400px;
}

h4{
    font-family: 'Montserrat';
    font-size: 11px;

}

a {
  color:black;
  text-decoration: none;
  margin-right: 20px;
}

h6{
font-size:36px;
  font-family: Poppins;
  color:#FEFEFE;  
  text-align: center;
}
</style>
