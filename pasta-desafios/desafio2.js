"use strict";
// Como podemos melhorar o esse código usando TS? 
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["AnalistaFinanceiro"] = 0] = "AnalistaFinanceiro";
    Trabalho[Trabalho["Programador"] = 1] = "Programador";
    Trabalho[Trabalho["Fiscal"] = 2] = "Fiscal";
    Trabalho[Trabalho["Aposentada"] = 3] = "Aposentada";
})(Trabalho || (Trabalho = {}));
var profissional1 = {
    nome: 'Pablo',
    idade: 33,
    salario: 5000,
    profissao: Trabalho.Programador
};
var profissional2 = {
    nome: 'Nirlei',
    idade: 40,
    profissao: Trabalho.AnalistaFinanceiro
};
var profissional3 = {
    nome: 'Patricia',
    idade: 27,
    salario: 1800,
    profissao: Trabalho.Fiscal
};
var aposentada = {
    nome: 'Astrid',
    idade: 70,
    profissao: Trabalho.Aposentada
};
//# sourceMappingURL=desafio2.js.map