
(() => {

    //never
    // Never no es undifined | Never no es void | Never es simplemente NEVER
    const abc = (message:string):never => {
        //? Significa que mi funcion NO DEBE TERMINAR exitosamente

        throw new Error(message)
    }


    try {
        abc('auxilio');
    } catch(error){
        console.log(error);
    } finally {
        console.log("Bloque finalizado");
        
    }
    

})()