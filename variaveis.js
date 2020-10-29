// NumeroMaior
{
    var num1 = 105;
    var num2 = 106;
    var num3 = 90;
    var num4 = 101;
    var num5 = 2158;
    var nummaior;
    if (num1 >= num2) {
        nummaior = num1;
    }
    else {
        nummaior = num2;
    }
    if (num3 >= nummaior) {
        nummaior = num3;
    }
    else if (num4 >= nummaior) {
        nummaior = num4;
    }
    else if (num5 >= nummaior) {
        nummaior = num5;
    }
    console.log(`O numero maior é ${nummaior}`);
}


// Par e Impar
{
    if (num1 % 2 == 0) {
        console.log(`${num1} é par`);
    }
    else {
        console.log(`${num1} é impar`);
    }
    if (num2 % 2 == 0) {
        console.log(`${num2} é par`);
    }
    else {
        console.log(`${num2} é impar`);
    }
    if (num3 % 2 == 0) {
        console.log(`${num3} é par`);
    }
    else {
        console.log(`${num3} é impar`);
    }
    if (num4 % 2 == 0) {
        console.log(`${num4} é par`);
    }
    else {
        console.log(`${num4} é impar`);
    }
    if (num5 % 2 == 0) {
        console.log(`${num5} é par`);
    }
    else {
        console.log(`${num5} é impar`);
    }
}


//Dia da Semana
{
    var DiadaSemana = 0;
    if (DiadaSemana <= 7 && DiadaSemana >= 1)
        switch (DiadaSemana) {
            case 1: console.log("Domingo")
                break;

            case 2: console.log("Segunda-Feira")
                break;

            case 3: console.log("Terça-Feira")
                break;

            case 4: console.log("Quarta-Feira")
                break;

            case 5: console.log("Quinta-Feira")
                break;

            case 6: console.log("Sexta-Feira")
                break;

            case 7: console.log("Sabado")
                break;
        }
    else {
        console.log("Numero inválido")
    }
}

//Voto
{
    var idade = 71
    if (idade >= 18 && idade <= 70) {
        console.log("É obrigado a votar")
    }
    else {
        console.log("Voto é opcional");
    }
}

//AnoBissexto
{
    var ano = 2032
    if (ano % 4 == 0) {
        console.log(`${ano} é bissexto`);
    }
    else {
        console.log(`${ano} não é bissexto`);
    }
}