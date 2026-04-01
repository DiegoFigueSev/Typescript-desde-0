(()  => {

    //* Argumentos obligatorios
    const fullname = (firstname:string, lastName:string):string => {
        return `${firstname} ${lastName}`;
    }

    const name = fullname('Diego', 'Figueroa');

    console.log({name});
    
    //* Argumentos opcionales

    const optionalFullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName ?? 'Sevillano'}`
    }

    const optionalName:string = optionalFullName('Diego')

    console.log({optionalName});
    
    //* Argmentosp or defecto 

    const defaultFullName = (firstName:string, lastName:string='Sevillano') => {
        return `${firstName}     ${lastName}`
    }

    console.log(defaultFullName('Roberto'));
    
})()