
// 1 


const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log('EXO 1 : ', 'e :', e, 'pi :', pi, 'gravity : ', gravity, 'humanBodyTemp :', humanBodyTemp, 'WaterBoilingTemp :', waterBoilingTemp);

// 2



const countriesArrayChapterUnknown = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let [fin, est, sw, den, nor] = countriesArrayChapterUnknown;
console.log('EXO 2 : ', 'fin :', fin, '/ est :', est, '/ sw : ', sw, '/ den :', den, '/ nor : ', nor);

// 3


const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
let { width, height, area, perimeter } = rectangle;
console.log('EXO 3 AVEC KEYS ==> DONNE LES VALUES : ', width, height, area, perimeter);