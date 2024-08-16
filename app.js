/*const amount=12
if (amount<10){
    console.log("small no");
}
else{console.log("large no");}

console.log(`in my first node app`);
console.log(__dirname);
const { readFile, writeFile}= require('fs')
*/

const _ = require('lodash');

const items=[1,[3,[45,6]],2,3];
const newitems = _.flattenDeep(items);
console.log(newitems);