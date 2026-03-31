
(() => {

    let isSuperman:boolean = true
    let isBatman:boolean = false
    
    console.log({isSuperman});
    console.log({isBatman});
    
    isSuperman = true && false

    console.log({isSuperman});

    let response:string = (isBatman) ? 'Batman' : (isSuperman) ? 'Superman' : 'Ninguno' 
    
    console.log({response});
    


})()