class Animal {
    #pais;
    constructor(especie, pais) {
        this.especie = especie,
        this.#pais = pais
    }
    get pais() {
        return this.#pais;
    }
    set pais(i) {
        this.#pais = i;
    }
};

// Extendendo a classe pessoa do animal

class Pessoa extends Animal {
    constructor(nome, idade, especie = 'homo sapiens sapiens', pais) {
    super(especie, pais)
    this.nome = nome,
    this.idade = idade
    }
    imprimiDados(saudacao) {
        return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade)
        // o método super executa o construtor da classse 
        // neste caso a classe Pai é Pessoa
        // internamente o método super está fazendo:
        // this.nome = nome
        // this.idade = idade
        // se deixarmos o super vazio, ele retorna indefined
        this.cpf = cpf,
        this.rg = rg
    }
};

const joao = new Pessoa('João', 22, '', 'Brasil');
console.log(joao);
joao.pais = 'Russia';
joao.nome = 'Jhony';
console.log(joao);
console.log(joao.pais);

const jaque = new Cidadao('Carlos', 24, '0000', '11111');
console.log(jaque);


// Saldo = () => {
//     let saldoTotal = this.saldo + this.entrada - this.saida;
//     return `Saldo: ${saldoTotal}`;
// }

// Saque = (valorSacar, senhaSacar) => {
//     if(valorSacar <= saldoTotal) {
//         if(senhaSacar === senha) {
//             let saldoFinal = saldoTotal - valorSacar;
//             return `Você sacou R$ ${valorSacar} e seu saldo agora é R$ ${saldoFinal}.`
//         }
        
//     }
// }



