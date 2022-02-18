const { createApp } = require('vue');
import App from "./App.vue";


// Completare il Test ES6 

// Converti tutti gli elementi di un array in una stringa: esempio // Sex,Drugs,Rock,Roll
let words = ['Sex', 'Drugs', 'Rock', 'Roll'];

// Ordina gli elementi di un array
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

// Scrivere un oggetto person che contenga (firstname, lastname, e una funzione fullName che ritorni firstname e lastname)
let person = {
    firstname: 'Pippo',
    lastname: 'Franco',
};

// Itera l'oggetto di seguito
let dog = {
    name: 'Bob',
    age: 1,
    race: 'pastore tedesco',
};


// Dato un'array, creare un metodo che prenda in input un valore e ritorni un array ma senza il valore dato in input
// esempio 3 ritorna un array [1,2,4,5]
const array = [1, 2, 3, 4, 5];


// Scrivi un metodo che prenda in ingresso due input: la dimensione dell'array ed un valore
// e ritorni un array composto dal valore ripetuto tante volte quante la dimensione.
// esempio (5, 1) result = [a,a,a,a,a]


// Esercizio reverse, dalla var testo restituire la stringa in ordine invertito.
// Ad esempio: se la stringa di input è "Alten Italia",
// il tuo programma dovrebbe restituire la seguente stringa "ailatI netlA".


createApp(App).mount("#app");
