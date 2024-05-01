'use strict';

/* 1 - CREARE UN CICLO FOR PER ANALIZZARE I NUMERI DA 1 A 100
*      CREIAMO UNA STRINGA VUOTA "RESULT" CHE SARà POPOLATA CON FIZZ + BUZZ NEI CASI OPPORTUNI
*      UTILIZZIAMO MODULO PER CAPIRE SE N è MULTIPLO DI 3
*           SE N è MULTIPLO DI 3 ALLORA AGGIUNGO A "RESULT" IL VALORE "Fizz"
*      UTILIZZIAMO MODULO PER CAPIRE SE N è MULTIPLO DI 5
*           SE N è MULTIPLO DI 5 ALLORA AGGIUNGO A "RESULT" IL VALORE "Buzz"
*      NEL RISULTATO FINALE RESTITUIAMO "RESULT" SE è DIVERSO DA "" ALTRIMENTI RESTITUIAMO N
*      BONUS 2 - CONTROLLARE SE "RESULT" = "Fizz" allora "CLASSNAME" = "fizz"
*                CONTROLLARE SE "RESULT" = "Buzz" allora "CLASSNAME" = "buzz"
*           
*      BONUS 1 - SELEZIONARE IL QUADRATO CORRETTO DOVE POSIZIONARE "RESULT" ALL'INTERNO DEL DOM CON APPEND()
*
*/

// SELEZIONO ALL'INTERNO DEL DOM IL DIV DOVE VOGLIO AGGIUNGERE IL BLOCCO
const list = document.getElementById("list");

// CREARE UN CICLO FOR PER ANALIZZARE I NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
    // CREIAMO UNA STRINGA VUOTA "RESULT" CHE SARà POPOLATA CON FIZZ + BUZZ NEI CASI OPPORTUNI
    let result = '';
    let className = '';
    // UTILIZZIAMO MODULO PER CAPIRE SE N è MULTIPLO DI 3
    if (i % 3 === 0) {
        // SE N è MULTIPLO DI 3 ALLORA AGGIUNGO A "RESULT" IL VALORE "Fizz"
        result = "Fizz";
        // BONUS 2 - CONTROLLARE SE "RESULT" = "Fizz" allora "CLASSNAME" = ".fizz"
        className = 'fizz';
    }
    // UTILIZZIAMO MODULO PER CAPIRE SE N è MULTIPLO DI 5
    if (i % 5 === 0) {
        // SE N è MULTIPLO DI 5 ALLORA AGGIUNGO A "RESULT" IL VALORE "Buzz"
        result += "Buzz";
        // CONTROLLARE SE "RESULT" = "Buzz" allora "CLASSNAME" += ".buzz"
        className += 'buzz';
    }
    // NEL RISULTATO FINALE RESTITUIAMO "RESULT" SE è DIVERSO DA "" ALTRIMENTI RESTITUIAMO N
    if (result === '') {
        result = i;
    }

    // BONUS 1 - CREARE RIQUADRO PER "RESULT" ALL'INTERNO DEL DOM CON APPEND()
    const li = document.createElement("li");
    li.innerText = result;
    if (className !== '') {
        li.classList.add(className);
    }
    list.append(li);

    // STAMPO IN CONSOLE IL L'ELEMENTO LI CHE HO CREATO
    console.log(li);
}


