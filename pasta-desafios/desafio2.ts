// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    AnalistaFinanceiro,
    Programador,
    Fiscal,
    Aposentada
}

type Humano = {
    nome: string,
    idade: number,
    salario?: number,
    profissao: Trabalho
}

let profissional1: Humano = {
    nome: 'Pablo',
    idade: 33,
    salario: 5000,
    profissao: Trabalho.Programador
};


let profissional2: Humano = {
    nome: 'Nirlei',
    idade: 40,
    profissao: Trabalho.AnalistaFinanceiro
};


let profissional3: Humano = {
    nome: 'Patricia',
    idade: 27,
    salario: 1800,
    profissao: Trabalho.Fiscal
};

let aposentada: Humano = {
    nome: 'Astrid',
    idade: 70,
    profissao: Trabalho.Aposentada
}