
(() => {

    //never
    // Never no es undifined | Never no es void | Never es simplemente NEVER
    const abc = (message:string):never | string => {
        //? Significa que mi funcion NO DEBE TERMINAR exitosamente

        throw new Error(message);
        return "hola mundo";
    }


    try {
        abc('auxilio');
    } catch(error){
        console.log(error);
    } finally {
        console.log("Bloque finalizado");
        
    }
    

})()