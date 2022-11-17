const form = document.getElementById('form-contato');
const imgYes = '<img src="./images/yes.png" alt="yes" />';
const imgNo = '<img src="./images/no.png" alt="no" />';
const contatos = [];
const numeros = [];
const spanSalvo = '<span class="numero salvo">Sucesso</span>';
const spanErro = '<span class="numero erro">Error</span>';

let linhas = '';
let contatosError = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    errosESalvos();

    //alert(`Contato: ${inputNomeContato.value}, número: ${inputNumeroContato.value}`);
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value) || numeros.includes(inputNumeroContato.value)) {
        alert(`O contato: ${inputNomeContato.value}: ${inputNumeroContato.value} já foi inserido.`)
    } else {
        if (inputNumeroContato.value.length > 9 && inputNumeroContato.value.length < 12) {
            contatos.push(inputNomeContato.value);
            numeros.push(inputNumeroContato.value);
        } else {
            contatosError += 1;
            const alerta = document.querySelector('.alert');
            alerta.innerHTML = 'O número do contato deve conter no mínimo 10 e máximo 12 dígitos para salvar!!!';
        }
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value.length > 9 && inputNumeroContato.value.length < 12 ? imgYes : imgNo}</td>`;
        linha += '</tr>'
    
        linhas += linha;
    }
        

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function errosESalvos() {
    document.getElementById('numeros-salvos').innerHTML = `${numeros.length} salvo(s)`;
    document.getElementById('numeros-error').innerHTML = `${contatosError} erro(s)`;
    document.getElementById('todos-salvos').innerHTML = contatosError > 0 ? spanErro : spanSalvo;
    
    console.log(contatosError);
    console.log(contatos);
    console.log(numeros);
}
