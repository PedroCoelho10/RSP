import {http} from './config'

export default{
    listar:() =>{
        return http.get('Profissionais')
    },

    salvar:(profissional) =>{
        return http.post('Profissionais', profissional)
    },

    listarConsultas:() =>{
        return http.get('Consulta')
    }


}

