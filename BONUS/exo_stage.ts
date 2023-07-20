// Creer une fonction qui retourne un tableau de string contenant que les couleurs de chaque objet. Il ne faut pas de duplication. 
const objects =

    [
        { id: "e0fb36b2-a978-438c-9769-96c30348d6fe", metadata: { color: "#efefef", } },
        { id: "afe5bd8a-4bd0-4a1c-8985-77cca0cbd111", metadata: { color: "#e1111e", } },
        { id: "5fc00b9a-7874-47a2-b2bb-4b127ba48184", metadata: { color: "#0f0faa", } },
        { id: "417661a5-ef76-4f34-abdc-5f7cf1333565", metadata: { color: "#0f0faa", } },
        { id: "517661a5-ef76-4f34-abdc-5f7cf1333565", metadata: { color: "#ff1aa1", } }

    ];

function mettreLesCouleursDansUnTableauMaisSansDoublonsTavu() {
    let tabloColor = objects.map(obj => obj.metadata.color);
    let tabloUnique = tabloColor.filter((color, index) => tabloColor.indexOf(color) === index);

    return tabloUnique
};

console.log(mettreLesCouleursDansUnTableauMaisSansDoublonsTavu())


//  * Une fonction qui prend 1 tableaux de nombre en parametre
//  * Cette fonction retourne un tableau ou chaque valeur va être additioner avec la valeur précedente
//  * ex: [1, 2, 3] ==> [1, 3, 5]
//  * ex: [15, 2, 10, 0, 1] ==> [15, 17, 12, 10, 1]
//  * ex: [15, 2, 10, 0, 1] ==> [15 + 0, 2 + 15, 10 + 2, 10, 1]
//  * ex: [x, y, z, a, b] ==> [x + 0, y + x, z + y, a + z, b + a]
// */

function exoStage1(tabloNbr: number[]): number[] {
    let result: number[] = [];

    for (let index = 0; index < tabloNbr.length; index++) {


        if (tabloNbr[index - 1] === undefined) {
            result.push(tabloNbr[0]);
        } else {
            result.push(tabloNbr[index] + tabloNbr[index - 1]);
        }
    }
    return result;
};

console.log(exoStage1([1, 4, 0, 5]))
//                  //  A  B  C  D


 
// Fait une fonction qui prend deux paramètres. Les deux params seront des tableaux (A et B).
// Il faut que ta fonction renvoie un seul et unique tableau qui va contenir A et B mais "une fois sur deux". 

// Exemple: 
// mergeOneOnTwo(["a", "b", "c"], [1, 2, 3]) ===> ["a", 1, "b", 2, "c", 3];
// mergeOneOnTwo(["a", 2, "c"], [1, "b", "x"]) ===> ["a", 1, 2, "b", "c", "x"];



function exoDuVendredi (tabloA : any [], tabloB : any []) : any  [] {

    let tabloFinal : any[] = [];

    for (let i = 0; i < tabloA.length ; i++){
        
         tabloFinal.push(tabloA[i],tabloB[i]);
         console.log("ton truc: " + tabloFinal)
    }; 
    return tabloFinal

}
console.log(exoDuVendredi(['a', 'b', 'c'],[1, 2 ,3])); 

// Fait une fonction qui prend deux paramètres. Les deux params seront des tableaux (A et B).
// Il faut que ta fonction renvoie un seul et unique tableau qui va contenir A et B. Les deux tableaux sont des tableaux d'objets. Si deux objets (un dans A et un dans B) on le même id, il va falloir merge l'objet A avec l'objet B.  

// Exemple: 
// mergeObject([{ id: 1, a: 1 }, { id: 2, b: 2 }], [{ id: 1, a: 10 }, { id: 3, c: "coucou" }]) ===> [{ id: 1, a: 10 }, { id: 2, b: 2 }, { id: 3, c: "coucou" }];
// mergeObject([{ id: 0, a: 1 }, { id: 2, b: 2 }], [{ id: 1, a: 10 }, { id: 3, c: "coucou" }]) ===> [{ id: 0, a: 1 }, { id: 1, a: 10 }, { id: 2, b: 2 }, { id: 3, c: "coucou" }]; */
// //-------------------------------------------------------

type MyArrayOfObject = (Record<string, any> & { id: number })[]

function mergeObject(A: any[], B: any[]) {
    let merged = [...A]; // on prend A et on le fout dans un nouveau tableau
    B.forEach((objB: { id: number }) => { // pour chaque element de l'objet B qui a un nombre pour id
        let indexA = A.findIndex((objA: { id: any }) => objA.id === objB.id); // indexA va trouver l'emplacement de l'id dans le tableau A qui a le meme emplacement dans le tableau B
        if (indexA !== -1) { // si c'est le cas
            merged[indexA] = { ...A[indexA], ...objB }; // on fusionne l'objet A avec l'objet B
        }
    });
    return merged; // on retourne notre tableau/fusion des deux objets qui NORMALEMENT est placé en ordre croissant selon les valeurs correspondantes aux id
}
console.log(mergeObject([{ id: 1, a: 1 }, { id: 2, b: 2 }], [{ id: 1, a: 10 }, { id: 3, c: "coucou" }, { id: 2, b: 9 }]))

