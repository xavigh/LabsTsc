
// define Obj
const Math = {};

function add(x1, x2){
    return x1 + x2;

}

function substract(x1, x2){
    return x1 - x2;

}

function multiply(x1, x2){
    return x1 * x2;

}
function divide(x1, x2){
    if(x2 == 0){
        console.log('You cannot divide by number zero');
    }else{
        return x1 / x2;
    } 
}

module.exports = Math;

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;


/* exports.add = add;
exports.substract = substract;
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/

