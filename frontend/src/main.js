import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import cors from 'cors';
import CadastroP from './views/CadastroP.vue';
import InicioPaciente from './views/InicioPaciente';
import Login from './views/Login.vue';
import CadastroM from './views/CadastroM.vue'
import EmailM from './views/EmailM.vue'
import Paciente from './views/Paciente.vue'
import GerenciaConsulta from './views/GerenciaConsulta'
import Profissional from './views/Profissional.vue'
import logout from './views/logout.vue'
import ContCadastroM from './views/ContCadastroM'
import FimCadastro from './views/FimCadastro'
import MedicamentosPaciente from './views/MedicamentosPaciente'
import PerfilMedico from './views/PerfilMedico';
import Homepage from './views/Homepage'



Vue.use(VueRouter);
Vue.use(cors);
const router = new VueRouter({
  routes:[
    {path: '/CadastroP',component: CadastroP,},
    {path: '/login',component: Login},
    {path: '/CadastroM',component: CadastroM},
    {path: '/ConfirmaEmail',component: EmailM},
    {path: '/Paciente', component:Paciente},
    {path: '/Profissional', component:Profissional},
    {path:  '/logout', component: logout},
    {path:  '/ContCadastroM', component: ContCadastroM},
    {path: '/Gerencia' , component: GerenciaConsulta},
    {path: '/FimCadastro', component:FimCadastro},
    {path: '/InicioPaciente', component: InicioPaciente},
    {path: '/MedicamentosPaciente', component: MedicamentosPaciente},
    {path: '/PerfilMedico', component: PerfilMedico},
    {path: '/Homepage', component: Homepage},

    
  ]
})



new Vue({
  vuetify,
  router,
  cors,
  render: h => h(App)
}).$mount('#app')

