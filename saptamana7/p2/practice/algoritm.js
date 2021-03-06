//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function hideEmail(mail) {
    var firstSplit = mail.split("@");//am separat stringul la @
    var secondSplit = mail.split('.');// am separat stringul la .
    var firstSplitSection = firstSplit[0].substr(0, 3);//am stocat prima sectiune elementului[0] din arrayul obtinut prin split
    var secondSplitSection = firstSplit[0].slice(-3);// am stocat a doua sectiune elementului[0] din arrayul obtinut prin split
    var result = firstSplitSection + "..." + secondSplitSection + "@..." + secondSplit[1];//am concatenat cele doua sectiuni si elementul[1] din secondSplit
    return result;
}
console.log(hideEmail("victortoma@yahoo.com"));// invocarea functiei

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function firstUpper(string) {//am declarat functia  
    var splitArray = string.split(" ");//facem array in functie de " "
    for (i = 0; i < splitArray.length; i++) {//conditia de iteratie
        splitArray[i] = splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1);//concatenam restul cuvantului cu prima litera facuta upperCase
    }
    return splitArray.join(" ");
}
console.log(firstUpper("sunt superman si fac piata"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
function reversed(string) {//declararea functiei
    var arraySplit = string.split("");
    for (i = 0; i < arraySplit.length; i++) {//conditia de iteratie
        if (arraySplit[i] == arraySplit[i].toLowerCase()) {//verificam daca e litera mica
            arraySplit[i] = arraySplit[i].toUpperCase();//daca e litera mica, o transformam in litera mare
        } else {
            arraySplit[i] = arraySplit[i].toLowerCase();// daca nu e mica, o facem mica
        }
    }
    return arraySplit.join("");
}
console.log(reversed("AnAarEMeRe"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
function addWord(string, number) {
    var result = ""//declaram o var care o sa contina stringul final
    for (i = 0; i < number; i++) {//conditia de iteratie
        result += string;//adaugam in var result, pentru fiecare iteratie, cuvantul
    }
    return result;
}
console.log(addWord("PeRe", 5));//invocam functia

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function palindrome(string) {
    var array = string.split("");//facem un array din string pentru a putea lucra mai usor
    if (string === array.reverse().join("")) {//conditia care verifica daca cuvantul este echivalent cu arrayul reversed si lipit
        return "is palindrome";
    }
    return "is not palindrome";
}
console.log(palindrome("perep"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
var oneArray = [          //am creat arrayul care cuprinde arrayuri
    [1, 5, 2, 10, 25],
    [6, 11, 55, 22],
    [13, 14, 0, 77, 100],
    [9, 3, 20, 17]
]

function getHighest(arrayul) {//declar functia
    var newArray = [];        //am creat arrayul care va cuprinde elementele extrase din sub-arrayuri
    for (i = 0; i < arrayul.length; i++) {//conditia iteratiei
        var result = arrayul[i].sort(function (a, b) {//stocatam rezultatul sortarii, in ordine crescatoare, a fiecarui sub-array, in var result
            return a - b;//conditia sortarii crescatoare
        })
        newArray.push(result.pop())//folosim push pentru a adauga in newArray, elementele extrase cu pop din rezultatul fiecarei iteratii (cel mai mare va fi ultimul)
    }
    return newArray;
}
console.log(getHighest(oneArray));//am invocat functia

//Ex7
// Implementati o functie care face reverse la un string
function reverseStr(string) {
    var arrayStr = string.split("").reverse().join("");//variabila array care retine stringul despartit, intors, si apoi concatenat
    return arrayStr;
}
console.log(reverseStr("Exceptie care intareste regula"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function factorial(number) {//declar functia
    var result = 1;//variabila result cu valoarea 1 pentru a putea inmulti cu i
    for (i = 1; i <= number; i++) {//conditia pentru iteratie; 0 exclusm pentru a nu avea rezultat 0
        result *= i;//inmultim cu i iterat pana la valoarea numarului, inclusiv
    }
    return result;
}
console.log(factorial(10));//invocam functia

//Ex9
//Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function checkStringWithin(string1, string2) {
    var array = string1.split(" ");
    return array[array.length - 1] === string2//verificam daca string2 este ultimul cuvant al stringului1
}
console.log(checkStringWithin("Ana are mere si pere", "pere"));

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat
oneArray = [5, 2, 10, 0, 7, 2];//declaram arrayul
function findSevenWithin(array) {
    for (i = 0; i < array.length; i++) {//declaram conditia de iteratie
        console.log(array[i], array[i] === 7);//afisam rezultatul boolean al cautarii in functie de conditia =7
        if (array[i] === 7) {//conditionam sa returneze valoarea care a indeplinit conditia
            return [i], i = array[i];
        }
    }
}
function truthBeTold(array, truthFunction) {
    return truthFunction(array);
}
console.log(truthBeTold(oneArray, findSevenWithin))

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
function stringLettersWithin(stringOne, stringTwo) {
    var arrayOne = stringOne.split(""); console.log(arrayOne);
    var arrayTwo = stringTwo.split(""); console.log(arrayTwo);
    for (i = 0; i < arrayTwo.length; i++) {
        var result = arrayOne.includes(arrayTwo[i]);//verificam daca fiecare element al arrayuluitwo(stringtwo) este inclus in arrayulOne(stringOne)
    }
    return result;
}
console.log(stringLettersWithin("abcdefg", "cbadgh"));

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata
var arrayOne = ["mere", 5, "are", "ana", "peeere", 7, "prune", 20];
function checkElement(array, value) {
    for (i = 0; i < arrayOne.length; i++) {//conditia de iteratie
        console.log(array[i], array[i] === value);//afisam rezultatele boolean
        if (array[i] === value) {//conditia de oprire a iteratiei
            return;//oprim iteratia
        }
    }
}
checkElement(arrayOne, "ana");

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
var arrayOne = [false, null, 0, "", undefined, NaN];
var arrayTwo = [16, 23, null, 0, 5, "pizza", false, "", undefined, NaN];
// function sortingFalse(arrayOne, arrayTwo) {
//     // var result = []
//     for (i = 0; i < arrayOne.length; i++) {//conditia de iteratie prin arrayOne
//         for (j = 0; j < arrayTwo.length; j++) {//conditia de iteratie a arrayTwo pentru fiecare element din arrayOne
//             if (arrayOne[i] === arrayTwo[j]) {//conditionam daca fiecare element din arrayOne este gasit in arrayTwo
//                 console.log(arrayTwo.splice(j, 1));//daca avem rezultat pozitiv, il scoatem cu ajutorul metodei splice
//             }
//         }
//     }
//     console.log(arrayTwo);
// }
// sortingFalse(arrayOne, arrayTwo);

const excludeFalsy = (array) => {
    const newArray = [];
    for (i = 0; i < array.length; i++) {
        let value = array[i]
        if (value !== null && value !== false && value !== 0 && value !== undefined && value !== "" && value !== NaN) {
            // console.log(newArray)
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(excludeFalsy(arrayTwo));

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function adding(string, nr) {
    var result = "";
    for (i = 0; i < nr; i++) {//conditia de iteratie pentru a stabili de cate ori adaugam stringul in functie valoarea Nr, i=1, i<=nr      
        result += string;//rezultat la care concatenam stringul
    } return result;
}
console.log(adding("add sos ", 5));