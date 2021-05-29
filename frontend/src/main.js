import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import CadastroP from './components/CadastroP.vue';
import CadastroMedico from './components/CadastroMedico.vue';
import Login from './components/Login.vue';
import CadastroM from './components/CadastroM.vue'
import EmailM from './components/EmailM.vue'
import Paciente from './components/Paciente.vue'
import NewTela from './components/NewTela.vue'
import Profissional from './components/Profissional.vue'
import logout from './components/logout.vue'
import ContCadastroM from './components/ContCadastroM'



Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path: '/CadastroMedico', componet: CadastroMedico,},
    {path: '/CadastroP',component: CadastroP,},
    {path: '/login',component: Login},
    {path: '/CadastroM',component: CadastroM},
    {path: '/ConfirmaEmail',component: EmailM},
    {path: '/Paciente', component:Paciente},
    {path: '/NewTela', component:NewTela},
    {path: '/Profissional', component:Profissional},
    {path:  '/logout', component: logout},
    {path:  '/ContCadastroM', component: ContCadastroM},
  ]
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

