function longerThan7orNot(myName: string) {
    for (let i = 0; i < myName.length; i++) {
        if (myName.length > 7) {
            return "Your name is long"
        } else {
            return "Your name is short"
        };
    };

};

function toBeLongOrNotToBeLong(prenom: string, nomfamille: string) {

    for (let i = 0; i < prenom.length; i++) {
        if (prenom.length < nomfamille.length) {
            return "Ton prénom : " + prenom + " est plus long que ton nom de famille : " + nomfamille
        } else if (prenom.length > nomfamille.length) {
            return "Ton nom de famille : " + nomfamille + " est plus long que ton prenom : " + prenom
        };

    };
};


let myAge = 250;
let yourAge = 25;
let humanReadableTime = new Date();


console.log('PREMIER PROMPT: ' + 'Enter base : ' + 20, 'Enter height : ' + 10, 'The area of the triangle is : ' + 0.5 * 20 * 10);
console.log('DEUXIEME PROMPT: ' + 'Enter a side a : ' + 5, 'Enter a side b :' + 4, 'Enter a side c: ' + 3, 'The perimeter of the triangle is : ' + 5 + 4 + 3);
console.log('TROISIEME PROMPT : ' + 'Enter a length : ' + 8, 'Enter a width : ' + 12, 'The area is : ' + 8 * 12, 'The perimeter is : ' + 2 * (8 + 12));
console.log('QUATRIEME PROMPT AVEC UN TRUC QUE JE CONNAIS PO : ' + 'Ton radius (????) : ' + 54, 'The area is jai pas compris');
console.log('CINQUIEME PROMPT : ' + 'Enter hours : ' + 40, 'Enter rate per hour : ' + 28, 'Your weekly earning is : ' + 40 * 28);
console.log(longerThan7orNot("Constantin"));
console.log(toBeLongOrNotToBeLong("Mishka", "Molina-Buonore"));
console.log("I am " + (myAge - yourAge) + " older than you ! ");
console.log('SIXIEME PROMPT : ' + 'Enter birth year : ' + 1995, '. You are ' + (2023 - 1995) + ', you are old enough to drive.', 'Enter a birth year: ' + 2005, '. You are ' + (2023 - 2010) + ', you will be allowed to drive after 5 years');
console.log('Enter number of years you live : ' + 100, '. You lived ' + (86400 * 365) * 100 + " seconds !");
console.log(humanReadableTime.getFullYear() + "-", humanReadableTime.getMonth() + "-", humanReadableTime.getDate() + "  ", humanReadableTime.getHours() + ":", humanReadableTime.getMinutes() + " coucou hehe ");
// pour les autres il faut juste changer la position des get et les expressions entre guillemets

// LEVEL 3 :

console.log(humanReadableTime.getFullYear() + "-", humanReadableTime.getMonth() + "-", humanReadableTime.getDate() + " ", humanReadableTime.getHours() + ":" + "0", humanReadableTime.getMinutes() + " c pa bo ");