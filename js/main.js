function clique(){
    document.getElementById("Agradecimento").innerHTML =  "<b> Obrigado por clicar! </b>";
   //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://facebook.com/");
    window.location.href = "https://facebook.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return(n1 + n2)
}
//alert(soma(5, 10));*/

/*function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
//var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/



/*var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
alert(d.getDay());*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
}*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}*/


/*var frutas =[{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome:"Maca", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

/*var lista = ["maca", "pera", "laranja"];
console.log(lista[1]);
console.log(lista[0]);
lista.push("uva");
//lista.pop();

console.log(lista);
console.log(lista.length);
console.log(lista.reverse());

console.log(lista.toString()[0]);

console.log(lista.join(" | "));*/

/*var nome = "David San Martín";
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
var n1 = 5;
var n2 = 3;
//alert(nome +" tem "+idade+" anos ");
alert(idade+idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase);
console.log(frase.toLowerCase);
//alert(frase.replace("Japão", "Brasil"));
console.log(n1 * n2);*/