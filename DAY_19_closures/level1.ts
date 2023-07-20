function comptage() {
    let count = 0;
    function onMultiplie() {
        count += 2*2
        count++ 
        return count
    }

    return onMultiplie
}
let innerFunc = comptage()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())