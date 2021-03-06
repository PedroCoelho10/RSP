using System.Collections.Generic;

namespace ProjetoRSP.Models
{
    public class Paciente : Entidade
    {
        public string Logradouro { get; set; }
        public int Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public int PessoaId { get; set; }
        public Pessoa Pessoa { get; set; }
        public List<PacienteAlergia> PacienteAlergias { get; set; } = new List<PacienteAlergia>();

        public Paciente() { }

        public Paciente(string logradouro, int numero, string bairro, string cidade, string estado, string cep, int pessoaId, string complemento)
        {
            Logradouro = logradouro;
            Numero = numero;
            Bairro = bairro;
            Cidade = cidade;
            Estado = estado;
            Cep = cep;
            PessoaId = pessoaId;
            Complemento = complemento;
        }
    }
}
