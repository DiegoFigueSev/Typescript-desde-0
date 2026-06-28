(() => {


    const valuesString:string = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    let valuesMap:{ [key: string]: number } = {}
    valuesString.split(' ').forEach((e, i) => valuesMap[e]=i+1)
    console.log('a' in valuesMap);

    function alphabetPosition(text:string):string {
        let response:string = '';
        for (let val of text){
            if (val !== ' ' || val.toLowerCase() in valuesMap){
                response += `${valuesMap[val.toLowerCase()]} `
            }
        }
        return response.trim();
    }
    
    console.log(alphabetPosition("The sunset sets at twelve o' clock."));
    
})()