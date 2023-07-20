let sentenceEncoreBecause = 'You cannot end a sentence with because because because is a conjunction';
let patternBis = /because/gi;
let cleaningSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let calculateTotal = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let nums = '5000' + '10000' + ' 15000'
let numFloatBis = parseFloat(nums);
function love(lettres: string, mot: string): number {
    let motBis = mot.split(lettres);
    let nbrRepeat = motBis.length - 1;
    return nbrRepeat;
};

console.log(love('love', 'Love is the best thing in the world. Some found their love and some are still looking for their love'));
console.log(sentenceEncoreBecause.match(patternBis)?.length); 
console.log(cleaningSentence.replace(/[$&#%@;]+/gi, '')); 
console.log(numFloatBis);
console.log(calculateTotal.match(/[0-9]/gi)); 