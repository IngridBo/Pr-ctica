let num1 = prompt("Ingrese un numero 1/3");
let num2 = prompt("Ingrese segundo número 2/3 ");
let num3 = prompt("Ingrese tercer número 3/3");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3); 

let mayor;
let centro;
let menor;

if(num1 > num2 && num1 > num3){
    mayor = num1;
    if(num2 = num3){
        centro = num2;
        menor = num3;
    } else{
        centro = num3;
        menor = num2;
    }
} else if(num2 > num1 && num2 > num3){
    mayor = num2;
    if(num1 = num3){
        centro = num1;
        menor = num3;
    } else{
        centro = num3;
        menor = num1;
    }
} else if(num3 < num1 && num3 < num2){
    mayor = num3;
    if(num1 = num2){
        centro = num1;
        menor = num2;
    } else{
        centro = num2;
        menor = num1;
    }
} else if (num1 === num2 && num2 === num3){
    mayor = num1;
    centro = num2;
    menor = num3;
}

console.log(`Ordenados de mayor a menor: ${mayor}, ${centro}, ${menor}`);
console.log(`Ordenados de menor a mayor: ${menor}, ${centro}, ${mayor}`);
