
(() => {

    const batman = 'Bat\'man';
    const linternaVerde = "Linterna verda";

    const volcanNegro:string = `Heroe: Volcan Negro`;

    let constructor:string = String(32);
    console.log(constructor.toUpperCase());

    console.log(`El heroe es ${constructor.toUpperCase()}`);
    
    //Null check ? - Corto circuito como en python
    console.log(batman[10]?.toUpperCase());
    
    let nullableValue = null
    var nullSafety:string = nullableValue ?? 'Nothing'

    console.log(nullSafety);
    

})()