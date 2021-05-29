<template>
  <div>
    <header>
      <div class="cabecalho">
        <nav>
          <ul>
            <li><router-link to="/Home"> Home </router-link></li>
            <li><router-link to="/Sobre"> Sobre RSP </router-link></li>
            <li><router-link to="/CadastroM"> Cadastro </router-link></li>
            <li><router-link to="/Login"> Login </router-link></li>
          </ul>
          <div class="botao">
            <v-btn rounded color="primary" dark> Baixar Aplicativo </v-btn>
          </div>
        </nav>
      </div>
    </header>
    <br /><br /><br /><br />
    <p>
      O Registro de Saúde Pessoal quer cuidar de você e da sua família, <br />
      proporcionando um atendimento mais rápido, com maior qualidade em <br />
      diagnósticos. trazendo todos os seus dados médicos para o seu controle.
      <br />
      Gerencie sua saúde de um jeito simples, ágil e totalmente digital.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.cabecalho {
  position: relative;
  width: 940px;
}

nav li {
  position: relative;
  top: 10px;
  margin: 0 0 0 20px;
  display: inline;
}

nav a {
  text-transform: uppercase;
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
}

.botao {
  position: absolute;
  display: inline;
  top: 10px;
  /* text-align: end; */
  margin: 0 0 0 1600px;
}

p {
  color: black;
  text-align: left;
  margin-right: 200px;
  margin-trim: 2000px;
}
</style>