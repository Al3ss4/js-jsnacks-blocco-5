console.log('JS OK!');

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


//creo un array di 10 oggetti che rappresentano una zucchina

let zucchina = [

    {
        varietà : 1,
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà : 1,
        peso: 2,
        lunghezza: 2,
    },
    {
        varietà : 1,
        peso: 3,
        lunghezza: 3,
    },
    {
        varietà : 1,
        peso: 4,
        lunghezza: 4,
    },
    {
        varietà : 1,
        peso: 5,
        lunghezza: 5,
    },
    {
        varietà : 1,
        peso: 6,
        lunghezza: 6,
    },
    {
        varietà : 1,
        peso: 7,
        lunghezza: 7,
    },
    {
        varietà : 1,
        peso: 8,
        lunghezza: 8,
    },
    {
        varietà : 1,
        peso: 9,
        lunghezza: 9,
    },
    {
        varietà : 1,
        peso: 10,
        lunghezza: 10,
    }

];

console.log(zucchina);


// creo un for per andare a ciclare l'array e prendermi il peso per poi fare la somma
    let sum=0;
    for( i = 0; i< zucchina.length; i++){
        sum += zucchina[i].peso;
    }
    console.log(sum);





//Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.


//Crea 10 oggetti che rappresentano una zucchina.

let zucchinaNew = [

    {
        varietà : 1,
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà : 1,
        peso: 2,
        lunghezza: 16,
    },
    {
        varietà : 1,
        peso: 3,
        lunghezza: 3,
    },
    {
        varietà : 1,
        peso: 4,
        lunghezza: 17,
    },
    {
        varietà : 1,
        peso: 5,
        lunghezza: 5,
    },
    {
        varietà : 1,
        peso: 6,
        lunghezza: 18,
    },
    {
        varietà : 1,
        peso: 7,
        lunghezza: 7,
    },
    {
        varietà : 1,
        peso: 8,
        lunghezza: 19,
    },
    {
        varietà : 1,
        peso: 9,
        lunghezza: 9,
    },
    {
        varietà : 1,
        peso: 10,
        lunghezza: 20,
    }

];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

let zucchinaCorta=[];
let zucchinaLunga=[];

for (let i = 0 ; i < zucchinaNew.length; i++){
    if(zucchinaNew[i].lunghezza < 15){
        zucchinaCorta.push(zucchinaNew[i]);
    }else{
        zucchinaLunga.push(zucchinaNew[i]);
    }
    
}
console.log(zucchinaCorta);
console.log(zucchinaLunga);


//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//somma peso array zucchine corte
let sommaPesoZucchinaCorta=0;
for (let i = 0; i< zucchinaCorta.length; i++){

    sommaPesoZucchinaCorta += zucchinaCorta[i].peso;
}
console.log('La somma delle zucchine corte è: ', sommaPesoZucchinaCorta);

//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)