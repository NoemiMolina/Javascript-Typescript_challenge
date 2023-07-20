// 1

let toutou = {} ;

// 2

// 3

let toutouCool: any = {
    getDogInfo : { 
    firstname : 'Mishka',
    legs : 4,
    color : 'brown, white and black',
    Barkingmethod : function () {
        let result = '';
        result += 'woof woof' 
        return result
    },
    
}
};

// 5


toutouCool['breed'] = { 
  value: 'Bouledogue Francais et Malinois'
}
toutouCool['getDogInfo'] = {
}




console.log(toutouCool); // 1 & 2 
console.log('LE NOM DU CHIENGUE : ', toutouCool.getDogInfo.firstname, 'LES PATTES DU CHIENGUE : ', toutouCool.getDogInfo.legs, 'LA COULEUR DU CHIENGUE :', toutouCool.getDogInfo.color, 'LE SON DU CHIENGUE : ', toutouCool.getDogInfo.Barkingmethod()) // 3 & 4
