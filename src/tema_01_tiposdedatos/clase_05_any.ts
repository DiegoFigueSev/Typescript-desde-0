(() => {

    //No es recomendable usar any porque el IDE no podra ayudarnos con el autocompletado
    //Aparte tendremos muchos errores mas adelante
    let avenger:any = 123;
    avenger = 'hola'
    console.log(avenger);
    
    let exists;
    exists = 10;
    exists = '';

})()