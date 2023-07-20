// Creer une fonction qui retourne un tableau de string contenant que les couleurs de chaque objet. Il ne faut pas de duplication. 
const objects = 

[
{ id: "e0fb36b2-a978-438c-9769-96c30348d6fe", metadata: { color: "#efefef", } }, 
{ id: "afe5bd8a-4bd0-4a1c-8985-77cca0cbd111", metadata: { color: "#e1111e", } }, 
{ id: "5fc00b9a-7874-47a2-b2bb-4b127ba48184", metadata: { color: "#0f0faa", } },
{ id: "417661a5-ef76-4f34-abdc-5f7cf1333565", metadata: { color: "#0f0faa", } }, 
{ id: "517661a5-ef76-4f34-abdc-5f7cf1333565", metadata: { color: "#ff1aa1", } }

];

function mettreLesCouleursDansUnTableauMaisSansDoublonsTavu () {
    let tabloColor = objects.map(obj => obj.metadata.color);
    let tabloUnique = tabloColor.filter((color, index) => tabloColor.indexOf(color) === index);
    
   return tabloUnique
};

console.log(mettreLesCouleursDansUnTableauMaisSansDoublonsTavu())