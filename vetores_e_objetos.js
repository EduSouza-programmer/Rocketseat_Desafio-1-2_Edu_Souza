const tecnologias = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "Python", especialidade: "Data Science" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
  ],
};

const programador = {
  nome: "Carlos",
  idade: 32,
  tecnologia: {
    nome: tecnologias.propriedade[0].nome,
    especialidade: tecnologias.propriedade[0].especialidade,
  },
};

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia.nome} com especialidade em ${programador.tecnologia.especialidade}`
);
