alert('Seja Bem-Vindo!');

let p1 = prompt("Digite seu nome");

let p2 = prompt("Digite seu PODER");

let p3 = prompt("Digite o nome de um VILÃO");

let p4 = prompt("Digite um lugar que gostaria de estar");

let msg = document.getElementById("msg");

msg.innerHTML = `Olá ${p1} o seu poder é ${p2} você vai enfrentar ${p3} em/no ${p4}`

