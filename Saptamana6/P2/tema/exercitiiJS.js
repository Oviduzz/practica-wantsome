
//ex1
// Am transformat Numberul in String pentru a putea extrage prima cifra din cnp, care indica sexul persoanei
// Am stocat prima cifra in variabila
// Pentru ca s-a facut conversia in string. nu am folosit "==="
function checkGender(cnp) {
    var primaCifra = cnp.toString()[0];
    if (primaCifra == 1) {
        return "Male";
    }
    else if (primaCifra == 2) {
        return "Female";
    }
}
console.log(checkGender(211223232321));

//ex2
var calificativ = function (nota) {
    if (nota === 0) {
        return "1 din oficiu pentru tine";
    }
    else if (nota <= 3) {
        return 'Calificativul corespunzator punctajului ' + nota + ' este "E"';
    }
    else if (nota <= 6) {
        return 'Calificativul corespunzator punctajului ' + nota + ' este "D"';
    }
    else if (nota <= 8) {
        return 'Calificativul corespunzator punctajului ' + nota + ' este "B"';
    }
    else if (nota === 9) {
        return 'Calificativul corespunzator punctajului ' + nota + ' este "A"';
    }
    else if (nota === 10) {
        return 'Calificativul corespunzator punctajului ' + nota + ' este "E"';
    }
    else { return "Bravo superman!"; }

}
console.log(calificativ(0));

//ex3.1

var taraOrigine = function (masina) {
    if (masina.toUpperCase() === "AUDI" || masina.toUpperCase() === "VOLKSWAGEN") {
        return "Marca " + masina + " se produce in Germania";
    }
    else if (masina.toUpperCase() === "DACIA" || masina.toUpperCase() === "ARO") {
        return "Marca " + masina + " se produce in Romania";
    }
    else if (masina.toUpperCase() === "PEUGEOT" || masina.toUpperCase() === "RENAULT") {
        return "Marca " + masina + " se produce in Franta";
    }
    else {
        return "Marca nu este cunoscuta";
    }
}


//ex 3.2

function taraOrigine2(masina2) {
    var car = masina2.toUpperCase();
    switch (car) {
        case "AUDI": return "Marca " + masina2 + " se produce in Germania";
            break;
        case "VOLKSWAGEN": return "Marca " + masina2 + " se produce in Germania";
            break;
        case "PEUGEOUT": return "Marca " + masina2 + " se produce in Franta";
            break;
        case "LADA": return "Marca " + masina2 + " se produce in Russia";
            break;
        case "TOYOTA": return "Marca " + masina2 + " se produce in Japonia";
            break;
        case "VOLVO": return "Marca " + masina2 + " se produce in Suedia";
            break;
        default: return "Marca este necunoscuta";
    }
}
console.log(taraOrigine2("toyota"));

//ex3.3

//Variabila "car"/"masina3" se gaseste stocata in interiorul obiectului sub forma diferitelor key
//In momentul apelarii functiei se returneaza valoarea acestora
//

function taraOrigine3(masina3) {
    var car = masina3.toUpperCase();
    var masini = {
        TOYOTA: 'Japonia',
        BMW: 'Germania',
        LADA: 'Russia',
        VOLVO: 'Suedia',
        DACIA: 'Romania',
        'RANGE ROVER': 'Anglia',
        'default': "alta tara"
    }
    return "Marca " + masina3 + " se produce in " + (masini[car] || masini['default']);
}
console.log(taraOrigine3("range rover"));

// (function(call){
//     alert (call);

// })("hello")

// ex4 nu am reusit sa o fac IIFE

var empArray = [{name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }];
 console.log(empArray.sort(function(a, b){
    return a.salary-b.salary;}));
