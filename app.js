// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let campoEscritura = document.getElementById('amigo');
    let nombreAmigo = campoEscritura.value.trim();
  
    if (nombreAmigo === '') {
      alert('Por favor, inserte un nombre.');
      return;
    }
      amigos.push(nombreAmigo);
      campoEscritura.value = '';
      mostrarAmigos();
  }
  
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
     lista.innerHTML = '';
     for (let i = 0; i < amigos.length; i++) {
     let elementoLi = document.createElement('li');
     elementoLi.textContent = amigos[i];
     lista.appendChild(elementoLi);
  }

}
mostrarAmigos();

function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear.");
      return;
    }
   
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (`El amigo sorteado es: ${amigoSorteado}`);
  }
  