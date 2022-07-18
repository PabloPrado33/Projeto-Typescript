// Reposta numero 1

interface Funcionario {
    codigo: number,
    nome: string,
    cargo: string,
    salario: number
};

const funcionarioInicial = {} as Funcionario;
funcionarioInicial.codigo = 40;
funcionarioInicial.nome = 'Nirlei';
funcionarioInicial.cargo = 'Gerente Financeiro';
funcionarioInicial.salario = 5600;

// Reposta numero 2

const colaborador: {codigo: number, nome: string, cargo: string, salario: number} = {
    codigo: 27,
    nome: 'Patricia',
    cargo: 'Supervisora Financeira',
    salario: 3500
}

// Resposta numero 3

const aposentado: Funcionario = {
    codigo: 70,
    nome: 'Astrid',
    cargo: 'aposentada',
    salario: 2000
}


// Reposta numero 4

const funcionario = {
    codigo: 33,
    nome: 'Pablo',
    cargo: 'Gerente Geral',
    salario: 7200
}

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */