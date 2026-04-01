(() => {

    const addNumber = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const saveTheWorld = ():string => 'El mundo esta salvado';
    
    //* FUNCIONES ANONIMAS
    let myFunction:() => number;

    const calculate = (a:()=>string, b:string):string => {
        return a() + b
    }

    console.log(calculate(()=>'hola y ', 'adios'));
    

})()