function greeting () {
    let greet = 'coucou, ';
    function greetVIP (name: string) {
        return greet + name
    } 
    function greetPremium (breed : string){
        return `Tu es un ${breed} et tes trop cute`
    }
    function byebye (nickname : string){
        return `Allez bisous ma ${nickname}`
    }
    return {
        greetVIP: greetVIP('Mishka'),
        greetPremium: greetPremium('Bouledogue français et malinois'),
        byebye: byebye('grosse')
    }
};
const threeFunctions = greeting()

console.log(threeFunctions.byebye)