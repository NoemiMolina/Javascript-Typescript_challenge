let num = 10;
let numBis = '9.8';
let python = 'python';
let jargon = 'jargon';
let setenceJargon = 'I hope this course is not full of jargon';
let caCommenceLesMaths = Math.floor(Math.random() * 100);
let caCommenceLesMathsBis = Math.floor(Math.random() * 50) + 50;
let caCommenceLesMathsTer = Math.floor(Math.random() * 255);
let sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
let java = "JavaScript";



console.log('"There is no exercise better for the heart than reaching down and lifting people up."' + ' by John Holmes teaches us to help one another');
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
console.log(typeof num);

console.log(parseFloat(numBis) + 0.2);
console.log(python.includes('on') && jargon.includes('on'));
console.log(setenceJargon.includes('jargon'));
console.log(caCommenceLesMaths);
console.log(caCommenceLesMathsBis);
console.log(caCommenceLesMathsTer);
console.log(java.length - 1);
console.log('1,1,1,1,1 \n' + '2,1,2,4,8 \n' + '3,1,3,9,27 \n' + '4,1,4,16,64 \n' + '5,1,5,25,125 \n');
console.log(sentenceBecause.substr(31, 23)); 