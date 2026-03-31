
(() => {

    //Enums 
    // Obj; Clasificar nuestros valores constantes / Ayuda a trabajar con valores con sentido semantico
    let audioLevel;

    enum AudioLevel {
        min,
        medium,
        max = 10
    } // ennumerado! Con razon se decia asi 

    const currentAudio:AudioLevel = AudioLevel.medium

    console.log(currentAudio);
    console.log(AudioLevel.max);
    
    const auxAudio:AudioLevel = 1

    console.log(auxAudio);
    

})()