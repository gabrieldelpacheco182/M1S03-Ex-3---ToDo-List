
function buscarHobbies() {
    
    let hobbiSearch = prompt("Digite um hobbi.")
    for (let i = 0; i < listaHobbies.length; i++) {
     const buscar = listaHobbies.find((item) => item === hobbiSearch);/* find função para pesquisar */

      if (buscar == hobbiSearch) {
        alert(`Item existente ${buscar}`);
        operacao();
      } else {
        alert("Item não existe");
        operacao();
    }
       } 
console.log(listaHobbies);
      }

function addHobbies() {
    listaHobbies.push(prompt("O que quer adicionar?"));  
    alert(`Sua nova lista ${listaHobbies}`);
    console.log(listaHobbies);
    operacao();
}
function removeHobbies() {
    let removerFinal = prompt("Deseja mesmo remover o ultimo item da lista? Digite (sim)")
    if(removerFinal=='sim') {
    let hobbiespop = listaHobbies.pop();
    alert(`O item ${hobbiespop} foi excluido`);
}
console.log(listaHobbies);
operacao();
}

function alterHobbies() {
    const antigo = prompt("Selecione o elemento que quer alterar");
        const novo = prompt("Ecreveva um novo elemento");

        const index = listaHobbies.indexOf(antigo);

        if (index !== -1) {
          listaHobbies[index] = novo;
        }
        console.log(listaHobbies);
    operacao();
}
function mostrarHobbies(){
    alert(`Lista de hobbies exsitentes ${listaHobbies}`);
    console.log(listaHobbies);
    operacao();
}
 var listaHobbies = ["correr", "andar"]
 
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
    default:    alert("Errou.")
        break;
 }
}
console.log(listaHobbies);

 operacao();