function buscarHobbies() {
    let hobbiSearch = prompt("Digite um hobbi.")
listaHobbies.forEach((hobbi) => {
if(hobbi=='hobbi') {
return alert(`Hobbies existente ${hobbi}`)
} else {
    alert("Hobbie não encontrado")
    let addItem = prompt("Digite (SIM) para adicionar um novo hobbie.")
    if(addItem=='sim'){
        addHobbies()
    }else {
        operacao()
    }
}
})
}
function addHobbies() {
    listaHobbies.push(prompt("O que quer adicionar?"));
    let novoAdd = prompt("Digite (NAO) para não adicionar mais hobbie.")
    if(novoAdd =='nao') {
        operacao();
    }
}

function removeHobbies() {
    let removerFinal = prompt("Deseja mesmo remover o ultimo item da lista? Digite (sim)")
    if(removerFinal=='sim') {
    let hobbiespop = listaHobbies.pop();
    operacao();
    }else {
        operacao();
    }
}

function alterHobbies() {
    
}
function mostrarHobbies(){
    alert(`Lista de hobbies exsitentes ${listaHobbies}`);
    let voltarMenu = prompt("Digite (sim) para voltar ao menu principal")
    if(voltarMenu =='sim'){
        operacao();
    }
}
 var listaHobbies = ["correr", "andar"]
 console.log(listaHobbies);

function operacao () {
let operacao = parseInt(prompt("1 - buscar um hobbies\n 2 - Adicionar um hobbies \n 3 - Remover um hobbies \n 4 - Alterar um hobbies \n 5 - Lista de hobbies"));
 switch (operacao) {
    case 1:
        buscarHobbies();
        break;
        case 2:
        addHobbies();
        break;
        case 3:
        removeHobbies();
        break;
        case 4:
        alterHobbies();
        break;
        case 5:
            mostrarHobbies();
            break;
    default:
        break;
 }
}

 operacao();